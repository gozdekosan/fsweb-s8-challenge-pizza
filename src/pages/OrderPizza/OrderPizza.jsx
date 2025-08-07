import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Input} from 'reactstrap';
import axios from 'axios';
import {
  OrderPage, OrderHeader, Logo, OrderContent, ContentHeading,
  FoodContent, FoodPrice, FoodRating, FoodComments, QuantityControls,
  WarningButton, QuantityDisplay, OrderSummaryBox, OrderRow, TotalPrice,
  OrderButton, FormStyled, OrderNav,
  FoodDescription,
  BottomSection, HeaderImage, Wrapper, HiddenRadio, ButtonLabel, CheckboxLabel, CheckboxWrapper, HiddenCheckbox, CustomInput, CustomTextarea, StyledLabel
} from './OrderPizza.js';
import Footer from "../../components/Footer.jsx"; 

const materials = [
  'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır',
  'Sucuk', 'Jalapeño', 'Sarımsak', 'Biber', 'Ançüez', 'Ananas', 'Kabak'
];

function OrderPizza({ setOrderData }) {
  const history = useHistory();

  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [nameError, setNameError] = useState('');

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

      setOrderData({
        ...payload,
        response: response.data,
      });

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
      </OrderHeader>
      <Wrapper>
        <HeaderImage src="images/iteration-2-images/pictures/form-banner.png" alt="Banner" />
        <OrderNav>
          <NavLink to="/" activeClassName="active">Anasayfa</NavLink>
          <NavLink to="/orderpizza" activeClassName="active">Sipariş Oluştur</NavLink>
        </OrderNav>
        <OrderContent>
          <ContentHeading>Position Absolute Acı Pizza</ContentHeading>
          <FoodContent>
            <FoodPrice>85.50₺</FoodPrice>
            <FoodRating>4.9</FoodRating>
            <FoodComments>(200)</FoodComments>
          </FoodContent>
          <FoodDescription>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
          </FoodDescription>
        </OrderContent>
      </Wrapper>

      <FormStyled onSubmit={handleSubmit} className="order-form">
        <div className="size-dough-container">
          <div className="size-section">
            <p className="size-title">
              Boyut Seç <span style={{ color: 'red' }}>*</span>
            </p>
            {['S', 'M', 'L'].map(value => (
              <div key={value} style={{ display: 'inline-block' }}>
                <HiddenRadio
                  id={`size-${value}`}
                  name="size"
                  value={value}
                  checked={size === value}
                  onChange={handleSizeChange}
                />
                <ButtonLabel htmlFor={`size-${value}`} checked={size === value}>
                  {value === 'S' ? 'S' : value === 'M' ? 'M' : 'L'}
                </ButtonLabel>
              </div>
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
              <option value="Süpper İnce">Süpper İnce</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </Input>
          </div>
        </div>

        <h2 className="pizza-material">Ek Malzemeler</h2>
        <p className="pizza-text">En az 4, en fazla 10 malzeme seçebilirsiniz.</p>
        <div className="materials-grid">
          {materials.map((material) => (
            <CheckboxLabel key={material} htmlFor={`material-${material}`}>
              <HiddenCheckbox
                id={`material-${material}`}
                value={material}
                checked={selectedMaterials.includes(material)}
                onChange={handleMaterialChange}
              />
              <CheckboxWrapper />
              <span>{material}</span>
            </CheckboxLabel>
          ))}
        </div>

        <FormGroup className="name-section">
          <StyledLabel htmlFor="name">İsminiz</StyledLabel>
          <CustomInput
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
          <StyledLabel htmlFor="note">Sipariş Notu</StyledLabel>
          <CustomTextarea
            id="note"
            name="note"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
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
      <Footer hideOnMobile />
    </OrderPage>
  );
}

export default OrderPizza;