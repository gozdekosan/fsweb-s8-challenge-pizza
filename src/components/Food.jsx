import './Food.css'

function Food() {


  return (
    <section className="food-section">
        <div className="food-item">
          <img src="src/components/img2/iteration-2/pictures/food-1.png" alt="Terminal Pizza" />
          <div className="food-stuff">
            <p>Terminal Pizza</p>
            <div className="food-rating">
              <span className="rating">4.9</span>
              <span className="food-comments">(200)</span>
              <span className="food-price">60₺</span>
            </div>
          </div>
        </div>

        <div className="food-item">
          <img src="src/components/img2/iteration-2/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
          <div className="food-stuff">
            <p>Position Absolute Acı Pizza</p>
            <div className="food-rating">
              <span className="rating">4.9</span>
              <span className="food-comments">(200)</span>
              <span className="food-price">60₺</span>
            </div>
          </div>
        </div>

        <div className="food-item">
          <img src="src/components/img2/iteration-2/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
          <div className="food-stuff">
            <p>useEffect Tavuklu Burger</p>
            <div className="food-rating">
              <span className="rating">4.9</span>
              <span className="food-comments">(200)</span>
              <span className="food-price">60₺</span>
            </div>
          </div>
        </div>
      </section>
     
  )
}

export default Food;
