import styled from 'styled-components';

export const SuccessPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #ce2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8%;
  text-align: center;
  color: white;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-top: 10%;
  }

  > main {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 360px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
  padding-top: 0;

  @media (max-width: 600px) {
    width: 400px;
    height: 55px;
    margin-top: 30px;
    margin-bottom: 70px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Satisfy', cursive;
  font-size: 32px;
  color: #fdc913;
  margin: 20px 0 12px 0;
  font-style: italic;

  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 86px;
  line-height: 1.4;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 15px;
  position: relative;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid white;

  span {
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    padding-top: 20%;
    font-size: 72px;
    line-height: 1.2;
    max-width: 80%;
    margin: 0 auto;
    overflow-wrap: break-word;
    border-bottom: none;
    span {
      display: block;
      white-space: normal;
    }
    margin: 20px auto 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: 'Satisfy', cursive;
  color: #fdc913;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OrderName = styled.p`
  font-size: 22px;
  font-family: 'Barlow Condensed', sans-serif;
  color: white;
  text-align: center;
  font-weight: 600;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OrderInfo = styled.p`
  font-size: 16px;
  font-family: 'Barlow Condensed', sans-serif;
  color: white;
  text-align: left;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OrderTotalTitle = styled.p`
  font-size: 20px;
  font-family: 'Barlow Condensed', sans-serif;
  color: white;
  text-align: left;
  margin-bottom: 8px;
  width: 200px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OrderTotalInfo = styled.div`
  font-size: 18px;
  font-family: 'Barlow Condensed', sans-serif;
  color: white;
  width: 200px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OrderTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.4;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const OrderTotalBox = styled.div`
  border: 1px solid white;
  padding: 10px;
  width: 250px;
  height: 150px;
  margin: 0 auto 30px;
  color: white;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;