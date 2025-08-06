
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const FooterSection = styled.footer`
  width: 100%;
  background-color: #1A1A1A;
  padding: 60px 0 50px;

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    `
    @media (max-width: 600px) {
      display: none;
    }
  `}
`;


export const FooterItem = styled.div`
  display: flex;
  width: 90%;
  max-width: 1066px;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const IletisimSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  text-align:left;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 251px;
  height: 100px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 200px;
    height: auto;
  }
`;

export const Address = styled.div`
  font-size: 18px;
  line-height: 32.4px;
  font-weight: 400;
  color: #FFFFFF;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  img {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  text-align:left;
  

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-top: 40px;
  }

  h2 {
    font-size: 24px;
    line-height: 32.11px;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 18px;
    line-height: 32.4px;
    font-weight: 400;
    color: #FFFFFF;
  }

  li {
    margin-bottom: 7.39px;
  }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }

  h2 {
    font-size: 24px;
    line-height: 32.11px;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 30px;
    margin-left: 0; 
  }
`;

export const SocialImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 300px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    justify-items: center;
  }
`;

export const SocialImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 5px;
  object-fit: cover;
`;

export const FooterBorder = styled.div`
  width: 100%;
  border-top: 1px solid #FFFFFF;
  padding-top: 20px;
`;

export const BottomFooter = styled.div`
  width: 90%;
  max-width: 1066px;
  margin: 0 auto;
`;

export const Copyright = styled.div`
  font-size: 16px;
  line-height: 28.8px;
  font-weight: 400;
  color: #FFFFFF;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
