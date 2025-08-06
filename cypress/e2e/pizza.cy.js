describe('Pizza Order Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5175/orderpizza');
  });

  it('should allow name input', () => {
    cy.get('input[name="isim"]').type('Ayşe Aslan').should('have.value', 'Ayşe Aslan');
  });

  it('should allow selecting multiple materials', () => {
    ['Pepperoni', 'Sucuk', 'Mısır', 'Soğan'].forEach((malzeme) => {
      cy.get(`#material-${malzeme}`).check().should('be.checked');
    });
  });

  it('should submit form successfully with valid inputs', () => {
    cy.get('input[name="isim"]').type('Ayşe Aslan');
    cy.get('input[name="size"][value="medium"]').check();
    cy.get('select[name="hamur"]').select('normal');
    ['Pepperoni', 'Mısır', 'Soğan', 'Sucuk'].forEach((malzeme) => {
      cy.get(`#material-${malzeme}`).check();
    });
    cy.get('textarea[name="note"]').type('Ekstra sos ekler misiniz? Teşekkkürler.');
    cy.contains('+').click();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/success');
  });
});
