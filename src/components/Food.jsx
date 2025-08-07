import { FoodSection,FoodComments,FoodImage,FoodItem,FoodPrice,FoodRating,FoodStuff,FoodTitle,Rating} from './Food.js';
function Food() {


  return (
    <FoodSection>
      <FoodItem>
        <FoodImage src="images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
        <FoodStuff>
          <FoodTitle>Terminal Pizza</FoodTitle>
          <FoodRating>
            <Rating>4.9</Rating>
            <FoodComments>(200)</FoodComments>
            <FoodPrice>60₺</FoodPrice>
          </FoodRating>
        </FoodStuff>
      </FoodItem>

      <FoodItem>
        <FoodImage src="images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
        <FoodStuff>
          <FoodTitle>Position Absolute Acı Pizza</FoodTitle>
          <FoodRating>
            <Rating>4.9</Rating>
            <FoodComments>(200)</FoodComments>
            <FoodPrice>60₺</FoodPrice>
          </FoodRating>
        </FoodStuff>
      </FoodItem>

      <FoodItem>
        <FoodImage src="images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
        <FoodStuff>
          <FoodTitle>useEffect Tavuklu Burger</FoodTitle>
          <FoodRating>
            <Rating>4.9</Rating>
            <FoodComments>(200)</FoodComments>
            <FoodPrice>60₺</FoodPrice>
          </FoodRating>
        </FoodStuff>
      </FoodItem>
    </FoodSection>
  );
}
export default Food;
