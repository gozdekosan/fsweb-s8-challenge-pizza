import {
  FooterSection,
  FooterItem,
  FooterLeft,
  IletisimSection,
  Logo,
  Address,
  MenuSection,
  SocialSection,
  SocialImage,
  SocialImageGrid, 
  FooterBorder,
  BottomFooter,
  Copyright,
} from "./Footer.js";

function Footer({hideOnMobile}) {
  return (
    <FooterSection $hideOnMobile={hideOnMobile}>
      <FooterItem>
        <FooterLeft>
          <IletisimSection>
            <Logo
              src="images/iteration-2-images/footer/logo-footer.svg"
              alt="Teknolojik Yemekler Logo"
            />
            <Address>
              <ul aria-label="İletişim Bilgileri" role="list">
                <li role="listitem">
                  <img
                    src="images/iteration-2-images/footer/icons/icon-1.png"
                    alt="Adres ikonu"
                  />
                  <span>341 Londonderry Road, İstanbul Türkiye</span>
                </li>
                <li role="listitem">
                  <img
                    src="images/iteration-2-images/footer/icons/icon-2.png"
                    alt="E-posta ikonu"
                  />
                  <span>aciktim@teknolojikyemekler.com</span>
                </li>
                <li role="listitem">
                  <img
                    src="images/iteration-2-images/footer/icons/icon-3.png"
                    alt="Telefon ikonu"
                  />
                  <span>+90 212 123 45 67</span>
                </li>
              </ul>
            </Address>
          </IletisimSection>

          <MenuSection aria-label="Popüler Menü">
            <h2>Hot Menu</h2>
            <ul role="list">
              <li role="listitem">Terminal Pizza</li>
              <li role="listitem">5 Kişilik Hackathlon Pizza</li>
              <li role="listitem">useEffect Tavuklu Pizza</li>
              <li role="listitem">Beyaz Console Frosty</li>
              <li role="listitem">Testler Geçti Mutlu Burger</li>
              <li role="listitem">Position Absolute Acı Burger</li>
            </ul>
          </MenuSection>
        </FooterLeft>

        <SocialSection aria-label="Instagram Fotoğrafları">
          <h2>Instagram</h2>
          <SocialImageGrid>
            <SocialImage
              src="images/iteration-2-images/footer/insta/li-0.png"
              alt="Instagram fotoğraf 1"
            />
            <SocialImage
              src="images/iteration-2-images/footer/insta/li-1.png"
              alt="Instagram fotoğraf 2"
            />
            <SocialImage
              src="images/iteration-2-images/footer/insta/li-2.png"
              alt="Instagram fotoğraf 3"
            />
            <SocialImage
              src="images/iteration-2-images/footer/insta/li-3.png"
              alt="Instagram fotoğraf 4"
            />
            <SocialImage
              src="images/iteration-2-images/footer/insta/li-4.png"
              alt="Instagram fotoğraf 5"
            />
            <SocialImage
              src="images/iteration-2-images/footer/insta/li-5.png"
              alt="Instagram fotoğraf 6"
            />
          </SocialImageGrid>
        </SocialSection>
      </FooterItem>

      <FooterBorder>
        <BottomFooter>
          <Copyright>© 2023 Teknolojik Yemekler.</Copyright>
        </BottomFooter>
      </FooterBorder>
    </FooterSection>
  );
}
export default Footer;