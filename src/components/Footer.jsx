import './Footer.css'

function Footer() {


  return (
    <footer className="footer-section">
  <div className="footer-item">
    <div className="footer-left">
      <div className="iletisim-section">
        <img className="logo" src="src/components/img2/iteration-2/footer/logo-footer.svg" alt="Footer Logo" />
        <address>
          <ul>
            <li>
              <img src="src/components/img2/iteration-2/footer/icons/icon-1.png" alt=""/>
              <p>  341 Londonderry Road, İstanbul Türkiye</p>
            </li>
            <li>
              <img src="src/components/img2/iteration-2/footer/icons/icon-2.png" alt=""/>
              <p>  aciktim@teknolojikyemekler.com</p>
            </li>
            <li>
              <img src="src/components/img2/iteration-2/footer/icons/icon-3.png" alt=""/>
              <p> +90 212 123 45 67</p>
            </li>
          </ul>
        </address>
      </div>
      <div className="menu-section">
        <h2>Hot Menu</h2>
        <ul>
          <li>Terminal Pizza</li>
          <li>5 Kişilik Hackathlon Pizza</li>
          <li>useEffect Tavuklu Pizza</li>
          <li>Beyaz Console Frosty</li>
          <li>Testler Geçti Mutlu Burger</li>
          <li>Position Absolute Acı Burger</li>
        </ul>
      </div>
    </div>
    <div className="social-section">
      <h2>Instagram</h2>
      <div className="social-image">
        <img src="src/components/img2/iteration-2/footer/insta/li-0.png" alt=""/>
        <img src="src/components/img2/iteration-2/footer/insta/li-1.png" alt=""/>
        <img src="src/components/img2/iteration-2/footer/insta/li-2.png" alt=""/>
        <img src="src/components/img2/iteration-2/footer/insta/li-3.png" alt=""/>
        <img src="src/components/img2/iteration-2/footer/insta/li-4.png" alt=""/>
        <img src="src/components/img2/iteration-2/footer/insta/li-5.png" alt=""/>
      </div>
    </div>
  </div>
  <div className="footer-border">
    <div className="bottom-footer">
      <p className="copyright">© 2023 Teknolojik Yemekler.</p>
    </div>
  </div>
</footer>
  )
}

export default Footer
