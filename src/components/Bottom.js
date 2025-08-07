import styled from 'styled-components';

export const BottomSection = styled.section`
  display: flex;
  background-color: #FFFFFF;
  width: 100%; 
  height: 94px;
  padding: 26px 0; 
  margin-bottom: 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 20px 0;
    height: auto;
  }
`;

export const BottomContainer = styled.div` 
  max-width: 1200px; 
  width: 100%;
  margin: 0 auto; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0 20px; 
`;

export const BottomNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; 
  height: 42px;
  background-color: transparent; 

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 5px;
    height: auto; 
    justify-items: center;
    padding: 0 10px;
  }
`;

export const BottomLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32.4px;
  font-weight: 500;
  letter-spacing: 0;
  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 16px; 
    line-height: 24px;
    max-width: 100%; 
  }
`;

export const BottomImage = styled.img`
  width: 146.7px;
  height: 66px;
  border-radius: 50px;

  @media (max-width: 600px) {
    width: 100px; 
    height: 45px; 
  }
`;

export const BtnHungry = styled.button`
  width: 193.27px;
  height: 56px;
  border-radius: 50px;
  background-color: #FDC913;
  color: black;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  border: none;
  margin: 0 auto 30px; 
  display: block; 

  @media (max-width: 600px) {
    width: 200px;
    height: 60px;
    font-size: 24px;
    font-weight: 600;
    margin: 0 auto 20px;
  }
`;

export const BasliklarSpan = styled.span`
  display: inline;
  flex-wrap: wrap;
`;