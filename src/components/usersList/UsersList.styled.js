import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const MainContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
`;


export const LoadMoreButtonWrapper = styled.div`
margin-top: 26px;
    margin-bottom: 36px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;



export const LoadMoreButton = styled.button`
width: 196px;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
transform: translate3d(0, 0, 0);
color: #373737;
padding: 14px 28px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
cursor: pointer;
transition: box-shadow 0.3s ease-in-out;

&:hover {
    box-shadow: 0 0 10px #1DA1F2;
}
`;

export const BackButton = styled(Link)`
text-align: center;
text-decoration: none;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
color: black;
font-size: 1rem;
padding: 0.5rem 1rem;
border: none;
cursor: pointer;
`;