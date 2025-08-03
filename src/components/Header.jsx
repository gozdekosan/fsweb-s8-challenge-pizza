import './Header.css'

function Header() {


  return (
     <header className="banner-section">
       <img className="logo" src="src/img/iteration-1/images/logo.svg" alt="Logo" />
       <div className="basliklar">
          <h2>fırsatı kaçırma</h2>
           <p>kod acıktırır pizza, doyurur</p>
    <button className="btn btn-hungry">ACIKTIM</button>
         </div>
       </header>
  )
}

export default Header;
