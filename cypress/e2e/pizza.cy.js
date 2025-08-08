describe('Pizza Order Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/orderpizza');
  });

  it('should allow name input', () => {
    cy.get('input[name="isim"]').type('Ayşe Aslan').should('have.value', 'Ayşe Aslan');
  });

  it('should allow selecting multiple materials', () => {
    ['Pepperoni', 'Sucuk', 'Mısır', 'Soğan'].forEach((malzeme) => {
      cy.get(`#material-${malzeme}`).check({ force: true}).should('be.checked');
    });
  });
  it('should submit form successfully with valid inputs', () => {
    cy.get('input[name="isim"]').type('Ayşe Aslan');
    cy.get('input[name="size"][value="M"]').check({ force: true });
    cy.get('select[name="hamur"]').select('Normal');
    ['Pepperoni', 'Mısır', 'Soğan', 'Sucuk'].forEach((malzeme) => {
      cy.get(`#material-${malzeme}`).check({ force: true });
    });
    cy.get('textarea[name="note"]').type('Ekstra sos ekler misiniz? Teşekkkürler.');
    cy.contains('+').click();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/success');
  });
  it('should not submit the form if required fields are empty', () => {
  cy.get('input[name="isim"]').clear();
  cy.get('input[name="size"]').should('not.be.checked');
  cy.get('button[type="submit"]').click({ force: true });
  cy.url().should('include', '/orderpizza');
  });
  it('shows alert on order submission failure', () => {
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Sipariş gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    });
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('postOrderFail');
    cy.get('input[name="isim"]').type('Ayşe Aslan');
    cy.get('input[name="size"][value="M"]').check({ force: true });
    cy.get('select[name="hamur"]').select('Normal');
    ['Pepperoni', 'Mısır', 'Soğan', 'Sucuk'].forEach((malzeme) => {
      cy.get(`#material-${malzeme}`).check({ force: true });
    });
    cy.get('button[type="submit"]').click();
    cy.wait('@postOrderFail');
  });
  it('should navigate to homepage when "Anasayfa" link is clicked', () => {
    cy.get('nav').contains('Anasayfa').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('should increase and decrease quantity', () => {
  cy.get('[data-testid="quantity-display"]').invoke('text').then((text) => {
    const initial = parseInt(text);

    cy.get('[data-testid="btn-increase"]').click();
    cy.get('[data-testid="quantity-display"]').should('have.text', (initial + 1).toString());

    cy.get('[data-testid="btn-decrease"]').click();
    cy.get('[data-testid="quantity-display"]').should('have.text', initial.toString());
  });
});

it('footer should NOT be visible on mobile screen', () => {
    cy.viewport('iphone-6');
    cy.get('footer').should('not.be.visible');
  });
  
  it('footer should be visible on desktop screen', () => {
    cy.viewport(1024, 768); 
    cy.reload(); 
    cy.get('footer').should('be.visible');
  });

it('should correctly calculate price when quantity and materials change', () => {
  cy.get('[data-testid="materials-total"]').should('contain', '0.00₺');
  cy.get('[data-testid="total-price"]').should('contain', '85.50₺');

  cy.get('input[type="checkbox"][value="Pepperoni"]').check({ force: true });
  cy.get('[data-testid="materials-total"]').should('contain', '5.00₺');
  cy.get('[data-testid="total-price"]').should('contain', '90.50₺');

  cy.get('[data-testid="btn-increase"]').click();
  cy.get('[data-testid="materials-total"]').should('contain', '10.00₺'); 
  cy.get('[data-testid="total-price"]').should('contain', '191.00₺'); 

  cy.get('input[type="checkbox"][value="Sosis"]').check({ force: true });
  cy.get('[data-testid="materials-total"]').should('contain', '20.00₺'); 
  cy.get('[data-testid="total-price"]').should('contain', '211.00₺'); 

  cy.get('[data-testid="btn-decrease"]').click();
  cy.get('[data-testid="materials-total"]').should('contain', '10.00₺'); 
  cy.get('[data-testid="total-price"]').should('contain', '95.50₺'); 
});
});
describe('Pizza Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should navigate to orderpizza page when clicking "Sipariş Ver" button', () => {
    cy.contains('button', 'SİPARİŞ VER').click();
    cy.url().should('include', '/orderpizza');
  });
  const bottomLinks = [
    'YENİ! Kore',
    'Pizza',
    'Burger',
    'Kızartmalar',
    'Fast Food',
    'Gazlı İçecek'
  ];

  bottomLinks.forEach((linkText) => {
    it(`should not navigate to /orderpizza when clicking "${linkText}"`, () => {
      cy.contains(linkText).click();
      cy.url().should('not.include', '/orderpizza');
    });
  });
  it('food buttons should NOT navigate to orderpizza page', () => {
    const foodButtons = [
      'Ramen',
      'Pizza',
      'Burger',
      'French Fries',
      'Fast Food',
      'Soft Drinks',
    ];

    foodButtons.forEach(food => {
      cy.contains('button, div', food)
        .click();

      cy.url().should('not.include', 'orderpizza');
    });
  });
});
describe('Pizza Success Page Test', () => {
  const orderData = {
    boyut: 'M',
    hamur: 'İnce',
    malzemeler: ['Pepperoni', 'Sosis', 'Mısır'],
    adet: 2,
    toplamFiyat: '190.00'
  };

  beforeEach(() => {
    cy.window().then(win => {
      win.localStorage.setItem('orderData', JSON.stringify(orderData));
    });
  });

  it('footer should NOT be visible on mobile screen', () => {
    cy.viewport('iphone-6'); 

    cy.visit('http://localhost:5173/success');
    cy.get('footer').should('not.be.visible');
  });

  it('footer should be visible on desktop screen', () => {
    cy.viewport(1024, 768);

    cy.visit('http://localhost:5173/success');

    cy.get('footer').should('be.visible');
  });
});

