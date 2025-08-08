import {
  SuccessPage,
  Logo,
  Heading,
  Title,
  OrderName,
  OrderInfo,
  OrderTotalTitle,
  OrderTotalInfo,
  Subtitle,
  OrderTotalBox,
  OrderTotalRow,
} from "./Success.js";
import Footer from "../../components/Footer.jsx";


export default function Success({ orderData }) {
  if (!orderData) {
    return (
      <SuccessPage className="success-page">
        <main>
          <Title>Hata</Title>
          <p>Sipariş verisi bulunamadı.</p>
        </main>
        <Footer />
      </SuccessPage>
    );
  }
 
  return (
    <SuccessPage className="success-page">
      <main>
        <Logo src="images/iteration-1-images/logo.svg" alt="Logo" />
        <Subtitle>lezzetin yolda</Subtitle>
        <Heading>
          <span>SİPARİŞ </span>
          <span>ALINDI</span>
        </Heading>

        <OrderName>Position Absolute Acı Pizza</OrderName>
        <OrderInfo>
          Boyut: {orderData.boyut} <br />
          Hamur: {orderData.hamur} <br />
          Ek Malzemeler: {orderData.malzemeler.join(", ")} <br />
        </OrderInfo>
        <OrderTotalBox>
          <OrderTotalTitle>Sipariş Toplamı</OrderTotalTitle>
          <OrderTotalInfo>
            <OrderTotalRow>
              <span>Seçimler</span>
              <span>{(orderData.malzemeler.length * 5 * orderData.adet).toFixed(2)} ₺</span>
            </OrderTotalRow>
            <OrderTotalRow>
              <span>Toplam</span>
              <span>{orderData.toplamFiyat} ₺</span>
            </OrderTotalRow>
          </OrderTotalInfo>
        </OrderTotalBox>
      </main>

      <Footer />
    </SuccessPage>
  );
}
