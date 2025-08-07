import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const MainSection = styled.section`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #FAF7F2;
  flex: 1;

 
`;

export const IconsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  gap: 20px;
  width: 100%;
  max-width: 720px;
  position: relative;
  left: -140px;  
  border-radius: 12px;
  border:none;
  position: relative;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
    border:none;
    left: 0; 
    position: relative; 
    padding:0 15%;
  }
`;

  

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 408px;
  height: auto;
  font-family: 'Satisfy', cursive;
  font-size: 32px;
  line-height: 44.27px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  color: #CE2829;

 
`;

export const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 712px;
  height: auto;
  font-family: 'Barlow', sans-serif;
  font-size: 42px;
  line-height: 56.2px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  color: #292929;

  
`;

export const BtnFood = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 10px 20px;
  margin: 0; 
  background-color: #FFFFFF;
  border: none; 
  border-radius: 50px; 
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #292929;

  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 150px; 
  height: 80px; 

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: black;
    color: #FFFFFF;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
    width: 140px;
    height: 75px;
    margin-left:50px;
    
  }
`;