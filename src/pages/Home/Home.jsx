import { Link } from "react-router-dom";
import {  
  BannerSection,
  Logo,
  Basliklar,
  P,
  BtnHungry,
} from "./Home.js";

function Home() {
  return (
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
  );
}

export default Home;
