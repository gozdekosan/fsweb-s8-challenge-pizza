import {
  MainSection,
  IconsSection,
  H1,
  H2,
  BtnFood,
} from './Main.js';

function Main() {
  return (
    <MainSection>
      <H1>en çok paketlenen menüler</H1>
      <H2>Acıktıran Kodlara Doyuran Lezzetler</H2>
      <IconsSection>
        <BtnFood>
          <img src="images/iteration-2-images/icons/1.svg" alt="Ramen ikonu" />
          Ramen
        </BtnFood>
        <BtnFood>
          <img src="images/iteration-2-images/icons/2.svg" alt="Pizza ikonu" />
          Pizza
        </BtnFood>
        <BtnFood>
          <img src="images/iteration-2-images/icons/3.svg" alt="Burger ikonu" />
          Burger
        </BtnFood>
        <BtnFood>
          <img src="images/iteration-2-images/icons/4.svg" alt="Patates kızartması ikonu" />
          French Fries
        </BtnFood>
        <BtnFood>
          <img src="images/iteration-2-images/icons/5.svg" alt="Fast food ikonu" />
          Fast Food
        </BtnFood>
        <BtnFood>
          <img src="images/iteration-2-images/icons/6.svg" alt="İçecek ikonu" />
          Soft Drinks
        </BtnFood>
      </IconsSection>
    </MainSection>
  );
}

export default Main;