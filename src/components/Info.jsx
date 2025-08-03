import './Info.css'

function Info() {


  return (
   <section className="info-section">
        <div className="info-card info-1">
          <h1>Özel Lezzetus</h1>
          <h2>Position: Absolute Acı Burger</h2>
          <button className="btn-order">SİPARİŞ VER</button>
        </div>
        <div className="info-right">
          <div className="info-card info-2">
            <h1>Hackathlon Burger Menü</h1>
            <button className="btn-order">SİPARİŞ VER</button>
          </div>
          <div className="info-card info-3">
            <h1><span className="color-change">Çoooook</span> hızlı npm gibi kurye</h1>
            <button className="btn-order">SİPARİŞ VER</button>
          </div>
        </div>  
      </section>
  )
}

export default Info;
