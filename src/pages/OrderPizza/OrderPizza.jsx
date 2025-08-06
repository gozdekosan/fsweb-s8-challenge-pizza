import { useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import {
  OrderPage, OrderHeader, Logo, OrderContent, ContentHeading,
  FoodContent, FoodPrice, FoodRating, FoodComments, QuantityControls,
  WarningButton, QuantityDisplay, OrderSummaryBox, OrderRow, TotalPrice,
  OrderButton, FormStyled,OrderNav,
  FoodDescription,
  BottomSection
} from './OrderPizza.js';

const materials = [
  'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır',
  'Sucuk', 'Jalapeño', 'Sarımsak', 'Biber', 'Ançüez', 'Ananas', 'Kabak'
];

function OrderPizza() {
  const history = useHistory();

  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [nameError, setNameError] = useState('');
  const [responseData, setResponseData] = useState(null);

  const basePrice = 85.5;
  const materialPrice = 5;
  const materialsTotal = selectedMaterials.length * materialPrice;
  const totalPrice = (basePrice + materialsTotal) * quantity;

  const isFormValid =
    name.length >= 3 &&
    size &&
    dough &&
    selectedMaterials.length >= 4 &&
    selectedMaterials.length < 10;

  const resetForm = () => {
    setName('');
    setSize('');
    setDough('');
    setSelectedMaterials([]);
    setNote('');
    setQuantity(1);
  };

  const handleSubmit = async (event) => {
    console.log({
  name,
  nameLength: name.length,
  size,
  dough,
  selectedMaterials,
  selectedCount: selectedMaterials.length,
  isFormValid
});
    event.preventDefault();
    if (!isFormValid) {
      alert('Lütfen tüm alanları eksiksiz ve doğru şekilde doldurun.');
      return;
    }

    const payload = {
      isim: name,
      boyut: size,
      hamur: dough,
      malzemeler: selectedMaterials,
      siparişNotu: note,
      adet: quantity,
      toplamFiyat: totalPrice.toFixed(2),
    };

    try {
  const response = await axios.post(
    'https://reqres.in/api/pizza',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    }
  );
  console.log("Sipariş Özeti:", response.data);  
  resetForm();
  history.push('/success');
} catch (error) {
  console.error('Sipariş gönderilemedi:', error);
  alert('Sipariş gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
}
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(value.length < 3 ? 'İsim en az 3 karakter olmalı.' : '');
  };

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleDoughChange = (e) => setDough(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);

  const handleMaterialChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selectedMaterials.length >= 10) {
        alert('En fazla 10 malzeme seçebilirsiniz!');
        return;
      }
      setSelectedMaterials([...selectedMaterials, value]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== value));
    }
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <OrderPage>
      <OrderHeader>
        <Logo src="/images/iteration-1-images/logo.svg" alt="Logo" />
      <OrderNav>
          <NavLink to="/" activeClassName="active">Anasayfa</NavLink>
          <NavLink to="/orderpizza" activeClassName="active">Sipariş Oluştur</NavLink>
        </OrderNav>
      </OrderHeader>

      <OrderContent>
        <ContentHeading>Position Absolute Acı Pizza</ContentHeading>
        <FoodContent>
          <FoodPrice>85.50₺</FoodPrice>
          <FoodRating>4.9</FoodRating>
          <FoodComments>(200)</FoodComments>
        </FoodContent>
        <FoodDescription>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.
        </FoodDescription>
      </OrderContent>

      <FormStyled onSubmit={handleSubmit} className="order-form">
        <div className="size-dough-container">
          <div className="size-section">
            <p className="size-title">
              Boyut Seç <span style={{ color: 'red' }}>*</span>
            </p>
            {['small', 'medium', 'large'].map((value) => (
              <Label key={value} className="d-block mb-2">
                <Input
                  type="radio"
                  name="size"
                  value={value}
                  checked={size === value}
                  onChange={handleSizeChange}
                  aria-required="true"
                /> {value === 'small' ? 'Küçük' : value === 'medium' ? 'Orta' : 'Büyük'}
              </Label>
            ))}
          </div>
          <div className="dough-section">
            <p className="dough-title">
              Hamur Seç <span style={{ color: 'red' }}>*</span>
            </p>
            <Input
              name="hamur"
              type="select"
              value={dough}
              onChange={handleDoughChange}
              aria-required="true"
            >
              <option value="" disabled hidden>Hamur kalınlığı</option>
              <option value="super thin">Süpper İnce</option>
              <option value="thin">İnce</option>
              <option value="normal">Normal</option>
              <option value="thick">Kalın</option>
            </Input>
          </div>
        </div>

        <h2 className="pizza-material">Ek Malzemeler</h2>
        <p className="pizza-text">En az 4, en fazla 10 malzeme seçebilirsiniz.</p>
        <div className="materials-grid">
          {materials.map((material) => (
            <FormGroup check key={material}>
              <Label check for={`material-${material}`}>
                <Input
                  type="checkbox"
                  id={`material-${material}`}
                  value={material}
                  checked={selectedMaterials.includes(material)}
                  onChange={handleMaterialChange}
                />{' '}
                {material}
              </Label>
            </FormGroup>
          ))}
        </div>

        <FormGroup className="name-section">
          <Label for="name">İsminiz</Label>
          <Input
            id="name"
            name="isim"
            placeholder="İsminizi giriniz"
            type="text"
            onChange={handleNameChange}
            value={name}
            required
            aria-required="true"
          />
          {nameError && <p className="text-danger">{nameError}</p>}
        </FormGroup>

        <FormGroup className="note-section">
          <Label for="note">Sipariş Notu</Label>
          <Input
            id="note"
            name="note"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            type="textarea"
            value={note}
            onChange={handleNoteChange}
          />
        </FormGroup>

        <BottomSection>
          <QuantityControls>
            <WarningButton type="button" onClick={handleDecrease}>-</WarningButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <WarningButton type="button" onClick={handleIncrease}>+</WarningButton>
          </QuantityControls>

          <OrderSummaryBox>
            <h4>Sipariş Toplamı</h4>
            <OrderRow>
              <span>Seçimler</span>
              <span>{(materialsTotal * quantity).toFixed(2)}₺</span>
            </OrderRow>
            <OrderRow>
              <span>Toplam</span>
              <TotalPrice>{totalPrice.toFixed(2)}₺</TotalPrice>
            </OrderRow>
            <OrderButton type="submit" disabled={!isFormValid}>
              SİPARİŞ VER
            </OrderButton>
          </OrderSummaryBox>
        </BottomSection>
      </FormStyled>
    </OrderPage>
  );
}

export default OrderPizza;