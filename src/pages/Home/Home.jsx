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
          <P>kod acıktırır pizza, doyurur</P>
          <Link to="/orderpizza">
            <BtnHungry>ACIKTIM</BtnHungry>
          </Link>
        </Basliklar>
      </BannerSection>
  );
}

export default Home;
