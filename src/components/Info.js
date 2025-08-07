import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const InfoSection = styled.section`
  margin: 0 auto;
  display: flex;
  width: 90%;
  max-width: 1072px;
  gap: 11px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
    padding: 0 10px; 
  }
`;

export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 12px;
  width: 100%;
  max-width: 530px;

  @media (max-width: 600px) {
    max-width: 100%; 
    align-items: center; 
  }
`;

export const Info1 = styled.div`
  background-image: url('images/iteration-2-images/cta/kart-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 500px;
  height: 440px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  padding: 20px; 
  box-sizing: border-box;
  overflow: hidden;

  h1 {
    font-family: 'Quattrocento', serif;
    font-size: 68px;
    line-height: 72px;
    font-weight: 700;
    letter-spacing: 0;
    color: #FFFFFF;
    width: 100%;
    max-width: 300px; 
    text-align: left;
    margin: 0 0 10px 0;
    white-space: normal;
    overflow-wrap: break-word;
    height: auto;
  }

  h2 {
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
    line-height: 26.76px;
    font-weight: 600;
    letter-spacing: 0;
    color: #FFFFFF;
    width: 100%;
    max-width: 300px; 
    text-align: left;
    margin: 0 0 10px 0;
    white-space: normal; 
    overflow-wrap: break-word;
    height: auto;
  }

  @media (max-width: 600px) {
    max-width: 480px; 
    height: 375px; 
    background-size: 500px auto; 
    background-position: 50% 50%;
    align-items: flex-start;
    padding: 15px;
    margin-bottom:18px;
    margin-top:20px;
    h1 {
      text-align: left; 
      margin: 0 0 10px 0;
      max-width: 60%; 
      line-height: 36px; 
    }
    h2 {
      text-align: left; 
      margin: 0 0 10px 0;
      max-width: 60%;
      white-space: normal; 
      overflow-wrap: break-word; 
    }
  }
`;

export const Info2 = styled.div`
  background-image: url('images/iteration-2-images/cta/kart-2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 530px;
  height: 220px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  padding: 20px; 
  box-sizing: border-box;
  overflow: hidden;

  h1 {
    font-family: 'Barlow', sans-serif;
    font-size: 32px;
    line-height: 44.27px;
    font-weight: 600;
    letter-spacing: 0;
    color: #FFFFFF;
    width: 100%;
    max-width: 300px; 
    text-align: left; 
    margin: 0 0 10px 0; 
    white-space: normal; 
    overflow-wrap: break-word;
    height: auto;
  }

  @media (max-width: 600px) {
    max-width: 480px;
    height: 190px; 
    background-size: 500px auto;
    background-position: 50% 50%; 
    align-items: flex-start; 
    padding: 15px;
    h1 {
      text-align: left; 
      margin: 0 0 10px 0;
      max-width: 60%; 
      white-space: normal; 
      overflow-wrap: break-word;
    }
  }
`;

export const Info3 = styled.div`
  background-image: url('images/iteration-2-images/cta/kart-3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 530px;
  height: 220px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;

  h1 {
    font-family: 'Barlow', sans-serif;
    font-size: 32px;
    line-height: 44.27px;
    font-weight: 600;
    letter-spacing: 0;
    color: black;
    width: 100%;
    max-width: 300px; 
    text-align: left;
    margin: 0 0 10px 0; 
    white-space: normal; 
    overflow-wrap: break-word;
    height: auto;
  }

  @media (max-width: 600px) {
    max-width: 480px;
    height: 176px; 
    background-size: 500px auto; 
    background-position: 50% 50%; 
    align-items: flex-start; 
    padding: 15px;
    h1 {
      text-align: left; 
      margin: 0 0 10px 0;
      max-width: 60%; 
      white-space: normal; 
      overflow-wrap: break-word; 
    }
  }
`;

export const ColorChange = styled.span`
  color: #CE2829;
`;

export const BtnOrder = styled.button`
  width: 138px;
  height: 48px;
  border-radius: 50px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 48px;
  font-weight: 600;
  letter-spacing: 0;
  text-align: center;
  color: #CE2829;
  background-color: #FFFFFF;
  border: none;
  margin: 10px 0 0 20px; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    margin: 10px 0 0 15px; 
  }
`;