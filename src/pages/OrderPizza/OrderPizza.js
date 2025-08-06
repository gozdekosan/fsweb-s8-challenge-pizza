import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: 'Barlow Condensed', sans-serif;
  }

  body {
    width: 100%;
    overflow-x: hidden;
  }
`;

export const OrderPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

export const OrderHeader = styled.header`
  background-color: #CE2829;
  width: 100vw;
  height: 207px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 600px) {
    height: 180px;
    padding: 0 10%;
  }
`;

export const OrderNav = styled.nav`
  display: flex;
  gap: 10px;
  text-align: left;

  a {
    position: relative;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 0 10px;

    &:not(:last-child)::after {
      content: '-';
      position: absolute;
      right: -5px;
      color: #FFFFFF;
    }

    &.order-link {
      font-weight: 900;
    }
  }

  @media (min-width: 601px) {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    padding: 0 10%;
    margin-top: 8px;

    a {
      font-size: 12px;
      padding: 0 6px;

      &:not(:last-child)::after {
        content: '-';
        right: -3px;
      }
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    left: 16px;
  }
`;

export const Logo = styled.img`
  width: 360px;
  height: 46px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 360px;
    height: 38px;
    margin-bottom: 10px;
    padding: 0 10%;
  }
`;

export const OrderContent = styled.div`
  width: 100%;
  max-width: 532px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 16px auto;
    gap: 16px;
    padding: 0 10%;
  }
`;

export const ContentHeading = styled.h1`
  font-weight: 600;
  color: black;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  text-align: left;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 0 10%;
  }
`;

export const FoodContent = styled.div`
  width: 531px;
  height: 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Barlow Condensed', Arial, sans-serif;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 10%;
  }
`;

export const FoodPrice = styled.span`
  font-size: 28px;
  font-weight: 700;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 28px;
    padding: 0 10%;
  }
`;

export const FoodRating = styled.div`
  margin-left: auto;
  margin-right: 20px;
  color: #5F5F5F;
  font-size: 16px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    font-size: 20px;
    padding: 0 10%;
  }
`;

export const FoodComments = styled.p`
  margin: 0;
  text-align: right;
  color: #5F5F5F;
  font-size: 16px;

  @media (max-width: 600px) {
    text-align: left;
    font-size: 20px;
    padding: 0 10%;
  }
`;

export const FoodDescription = styled.p`
  font-size: 20px;
  color: #5F5F5F;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 0 10%;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  resize: vertical;
  margin-bottom: 10px; 
  
 
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #D9D9D9;
    margin-top: 10px; 
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
    margin-bottom: 8px; 
    &:after {
      margin-top: 8px;
    }
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  overflow: hidden;
  width: max-content;

  @media (max-width: 600px) {
    transform: none;
    border: none;
    flex: 0 0 200px; 
  }
`;

export const WarningButton = styled.button`
  background-color: #FDC913;
  border: none;
  padding: 12px 18px;
  font-size: 20px;
  font-weight: bold;
  color: #292929;
  cursor: pointer;

  &:hover {
    background-color: #e4b810;
  }

  @media (max-width: 600px) {
    padding: 10px 0; 
    font-size: 16px;
    flex: 1; 
  }
`;

export const QuantityDisplay = styled.div`
  background-color: white;
  padding: 12px 18px;
  font-size: 18px;
  font-weight: bold;
  color: #292929;
  text-align: center;

  @media (max-width: 600px) {
    padding: 10px 0; 
    font-size: 16px;
    flex: 1; 
  }
`;

export const OrderSummaryBox = styled.div`
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  padding: 30px;
  flex: 1;
  margin-left: 20px;

  @media (max-width: 600px) {
    padding: 15px;
    margin-left: 0;
    width: 100%;
  }
`;

export const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 12px; 
  }
`;

export const TotalPrice = styled.span`
  color: #CE2829;
  font-weight: bold;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const OrderButton = styled.button`
  background-color: #FDC913;
  border: none;
  border-radius: 12px;
  padding: 16px 0;
  font-size: 16px;
  font-weight: bold;
  color: #292929;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e4b810;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 10px 0; 
    font-size: 16px;
    flex: 0 0 200px; 
    margin-top: 0; 
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: flex-start; 
    gap: 12px; 
    padding: 0;
    align-items: center;
    margin-top: 15px; 

    ${QuantityControls} {
      flex: 0 0 200px; 
    }

    ${OrderButton} {
      flex: 0 0 200px; 
  }
`;
export const FormStyled = styled.form`
  width: 100%;
  max-width: 532px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;

  .size-title {
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    color: black;
    margin-bottom: 10px;

  }

  .size-dough-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;

    @media (max-width: 600px) {
      flex-direction: row;
      gap: 10px;
      padding: 0 10%;
    }
  }

  .size-section {
    flex: 1;

    @media (max-width: 600px) {
      width: 50%;
      padding: 0;
    }
  }

  .dough-section {
    flex: 1;

    @media (max-width: 600px) {
      width: 50%;
      padding: 0;
    }
  }

  .dough-title {
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    color: #292929;
    margin-bottom: 10px;
  }

  .materials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    color: #5F5F5F;

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, auto);
      gap: 6px;
      font-size: 20px;
      padding: 0 10%;
    }
  }

  .pizza-material {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    margin-top: 20px;

    @media (max-width: 600px) {
      font-size: 20px;
      margin-top: 12px;
      padding: 0 10%;
    }
  }

  .pizza-material p {
    color: #5F5F5F;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;

    @media (max-width: 600px) {
      font-size: 20px;
      padding: 0 10%;
    }
  }
  .pizza-text {
    color: #5F5F5F;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    @media (max-width: 600px) {
      font-size: 20px;
      padding: 0 10%;}
  .name-section {
    margin-top: 20px;
    font-weight: 600;

    @media (max-width: 600px) {
      margin-top: 12px;
      padding: 0 10%;
    }
  }
  
  .note-section {
    position: relative;
    margin-top: 20px;
    padding-bottom: 30px;
    font-weight: 600;

    textarea {
      width: 100%;
      min-height: 80px;
      padding: 12px;
      font-size: 16px;
      border: 1px solid #D9D9D9;
      border-radius: 8px;
      resize: vertical;
      margin-bottom: 10px; 
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #5F5F5F80;
      margin-top: 10px; 
    }

    @media (max-width: 600px) {
      margin-top: 12px;
      padding-bottom: 20px; 
      padding: 0 10%;

      textarea {
        padding: 10px;
        font-size: 14px;
        margin-bottom: 40px; 
      }

      &:after {
        margin-top: 20px;
      }
    }
  }

  .note-section textarea::placeholder {
    color: #5F5F5F;
  }
`;