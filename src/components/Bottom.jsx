import { BottomSection, BottomNav, BottomLink, BottomImage,BottomContainer} from './Bottom.js';
function Bottom() {


  return (
    <BottomSection>
      <BottomContainer>
      <BottomNav>
        <BottomLink href="yenikore.html">
          <BottomImage src="images/iteration-2-images/icons/1.svg" alt="Nav 1" />
          YENİ! Kore
        </BottomLink>
        <BottomLink href="pizza.html">
          <BottomImage src="images/iteration-2-images/icons/2.svg" alt="Nav 2" />
          Pizza
        </BottomLink>
        <BottomLink href="burger.html">
          <BottomImage src="images/iteration-2-images/icons/3.svg" alt="Nav 3" />
          Burger
        </BottomLink>
        <BottomLink href="kizartmalar.html">
          <BottomImage src="images/iteration-2-images/icons/4.svg" alt="Nav 4" />
          Kızartmalar
        </BottomLink>
        <BottomLink href="fastfood.html">
          <BottomImage src="images/iteration-2-images/icons/5.svg" alt="Nav 5" />
          Fast Food
        </BottomLink>
        <BottomLink href="gazliicecek.html">
          <BottomImage src="images/iteration-2-images/icons/6.svg" alt="Nav 6" />
          Gazlı İçecek
        </BottomLink>
      </BottomNav>
      </BottomContainer>
    </BottomSection>
  )
}

export default Bottom;