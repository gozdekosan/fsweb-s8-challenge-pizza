import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  * {
    box-sizing: inherit;
  }
`;

export const BannerSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url('/images/iteration-1-images/home-banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-top: 40px;

  @media (max-width: 600px) {
    height: 100vh;
    padding-top: 20px;
  }
`;

export const Logo = styled.img`
  width: 360px;
  height: auto;

  @media (max-width: 600px) {
    width: 360px;
  }
`;

export const Basliklar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const P = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-size: 86px;
  line-height: 92px;
  gap: 8px;
  padding: 0 16px;

  span {
    display: inline;
  }

  .line1, .line2 {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  @media (max-width: 600px) {
    .line1, .line2 {
      flex-direction: column;
      gap: 0;
      
    }

    span {
      text-align: center;
      font-weight:300;
    }
  }
`;




export const BtnHungry = styled.button`
  width: 193.27px;
  height: 56px;
  border-radius: 50px;
  background-color: #FDC913;
  color: black;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  border: none;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e6b800;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 60px;
    font-size: 24px;
    margin-top: 20px;
    font-weight:600;
    font-family: 'Barlow', sans-serif;
  }
`;
