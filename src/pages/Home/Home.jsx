import { Link } from "react-router-dom";
import {  
  BannerSection,
  Logo,
  Basliklar,
  P,
  BtnHungry,
} from "./Home.js";
import Bottom from "../../components/Bottom.jsx"; 
import Info from "../../components/Info.jsx"; 
import Food from "../../components/Food.jsx"; 
import Main from "../../components/Main.jsx"; 
import Footer from "../../components/Footer.jsx"; 

function Home() {
  return (
    <>
     <BannerSection>
        <Logo src="images/iteration-1-images/logo.svg" alt="Logo" />
        <Basliklar>
          <P>
           <span className="line1"><span>Kod</span> <span>acıktırır</span></span>
            <span className="line2"><span>Pizza,</span> <span>doyurur</span></span>
          </P>
          <Link to="/orderpizza">
            <BtnHungry>ACIKTIM</BtnHungry>
          </Link>
        </Basliklar>
      </BannerSection>
      <Bottom/>
      <Info/>
      <Main/>
      <Food/>
      <Footer/>
    </>
  );
}

export default Home;
