import { Link } from 'react-router-dom';
import {
  InfoSection,
  InfoRight,
  Info1,
  Info2,
  Info3,
  ColorChange,
  BtnOrder,
} from './Info.js';

function Info() {
  return (
    <InfoSection>
      <Info1>
        <h1>Özel Lezzetus</h1>
        <h2>Position: Absolute Acı Burger</h2>
        <Link to="/orderpizza" aria-label="Sipariş ver sayfasına git">
          <BtnOrder>SİPARİŞ VER</BtnOrder>
        </Link>
      </Info1>
      <InfoRight>
        <Info2>
          <h1>Hackathlon Burger Menü</h1>
          <Link to="/orderpizza" aria-label="Sipariş ver sayfasına git">
            <BtnOrder>SİPARİŞ VER</BtnOrder>
          </Link>
        </Info2>
        <Info3>
          <h1>
            <ColorChange>Çoooook</ColorChange> hızlı npm gibi kurye
          </h1>
          <Link to="/orderpizza" aria-label="Sipariş ver sayfasına git">
            <BtnOrder>SİPARİŞ VER</BtnOrder>
          </Link>
        </Info3>
      </InfoRight>
    </InfoSection>
  );
}

export default Info;
