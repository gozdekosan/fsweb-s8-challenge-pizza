import styled from 'styled-components';

export const BtnOrder = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

export const BtnFood = styled.button`
  display: flex;
  width: auto;
  height: 66px;
  padding: 12px 20px;
  gap: 10px;
  border-radius: 50px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32.4px;
  font-weight: 500;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
  color: #292929;
  background-color: #FFFFFF;
  border: none;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: #FFFFFF;
  }

  img {
    width: 42px;
    height: 42px;
  }
`;

export const FoodSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  padding: 32px 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FoodItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px; 
  height: 419px;
  justify-content: space-between;
  border-radius: 12px;
  padding: 32px;
  background-color: #FFFFFF;
`;

export const FoodTitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 22px;
  line-height: 29.44px;
  font-weight: 600;
  color: #292929;
  width: 270.67px;
  height: 29px;
  margin-bottom: 1rem;
`;

export const FoodRating = styled.div`
  display: flex;
  width: 270.67px;
  height: 29px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 29px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 28.8px;
  color: #1B1B1BB2;
  vertical-align: middle;
`;

export const FoodComments = styled.div`
  display: flex;
  justify-content: flex-end !important;
  align-items: flex-end !important;
  width: 38px;
  height: 29px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 28.8px;
  color: #1B1B1BB2;
  vertical-align: middle;
  margin-left: 130px;
`;

export const FoodPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 55px;
  height: 25px;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24.76px;
  color: #292929;
  vertical-align: middle;
  text-align: right;
  margin-left: 20px;
`;

export const FoodImage = styled.img`
  width: 270.67px;
  height: 265px;
  margin-bottom: 20px;
`;

export const FoodStuff = styled.div`
  width: 270.67px;
  height: 355px;
  gap: 24px;
`;
