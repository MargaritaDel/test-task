import styled from '@emotion/styled';
import bcg from "../../images/main.png";

export const HomeTitle = styled.h1`
text-align: center;
margin-bottom: 10px;
font-style: bold;
font-weight: 500;
font-size: 50px;
line-height: 24px;
text-transform: uppercase;
color: #4B2A99; 

`;

export const HomeText = styled.p`
text-align: center; 
font-style: normal;
font-weight: 350;
font-size: 25px;
color: #4B2A99;

`;

export const LinkButton = styled.button`
text-align: center;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
color: black;
padding: 0.5rem 1rem;
border: none;
cursor: pointer;
width: 196px;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
padding: 14px 28px;

&:hover {
    background: #5CD3A8;
    box-shadow: 0 0 10px #1DA1F2;
}
`;

export const LinkButtonWrapper = styled.div`
margin-top: 26px;
    margin-bottom: 36px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;

export const containerStyle = styled.div`
border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '400px',
  height: '400px',
`;

export const WrapperBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: url(${bcg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 60px;
`;