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
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  box-sizing: border-box;
  background-image: url('/images/iteration-1-images/home-banner.png');
  background-size: cover; /* Daha iyi duyarlı ölçeklendirme için */
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  min-width: 100%;


  @media (max-width: 600px) {
    height: 80vh;
    background-position: center;
  }
`    

export const Logo = styled.img`
  width: 360px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    width: 360px;
    top: 10px;
    left: 10px;
  }

  @media (max-width: 480px) {
    width: 120px;
    top: 8px;
    left: 8px;
  }
`;

export const Basliklar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 60px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    margin-top: 50px;
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 0 10px;
  }
`;

export const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 86px;
  font-weight: 100;
  line-height: 92px;
  letter-spacing: 1.5px;
  text-align: center;
  width: 100%;
  max-width: 768px;
  height: auto;
  color: #FFFFFF;
  text-transform: uppercase;
  z-index: 1;
  margin: 0;

  span {
    display: inline;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    font-size: 68px;
    line-height: 74px;
    max-width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 56px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 38px;
    max-width: 95%;
    letter-spacing: 1px;
  }
`;

export const BtnHungry = styled.button`
  width: 193.27px;
  height: 56px;
  border-radius: 50px;
  background-color: #FDC913;
  color: black;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
  border: none;
  margin: 20px 0 30px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e6b800;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 1024px) {
    width: 180px;
    height: 52px;
    font-size: 17px;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 48px;
    font-size: 16px;
    margin: 15px 0 25px 0;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 40px;
    font-size: 14px;
    margin: 10px 0 20px 0;
  }
`;