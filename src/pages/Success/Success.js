import styled from 'styled-components';

export const SuccessPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #CE2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:10%;
  text-align: center;
  color: white;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 360px;
  height: auto; 
  margin-bottom: 70px;
  margin-top: 50px; 
  display: block;
  margin-left: auto;
  margin-right: auto;
    padding top:5%;
  @media (max-width: 600px) {
    width: 400px; 
    height: 55px; 
    margin-top: 30px; 
`;

export const Heading = styled.h1`
  font-size: 86px;
  line-height: 1.4;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  width: 100%;
  padding-top:10%;
  @media (max-width: 600px) {
  padding-top:20%;
    font-size: 72px;
    line-height: 1.2;
    max-width: 80%;
    margin: 0 auto;
    overflow-wrap: break-word;
  }
`;