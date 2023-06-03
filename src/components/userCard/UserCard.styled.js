import styled from '@emotion/styled';

export const CardBackground = styled.li`
  position: relative;
  width: 380px;
  height: 432px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 28px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BackgroundPicture = styled.img`
  width: 308px;
  height: 168px;
  justify-items: center;

  object-fit: cover;
`;
export const Line = styled.div`
  width: 100%;
  height: 8px;
  margin-top: 18px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const FrameWrapper = styled.div`
  position: absolute;
  top: 190px;
  left: 150px;
  width: 80px;
  height: 80px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  left: 12px;
  top: 8px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Tweets = styled.p`
margin-top: 70px;
text-align: center;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`;

export const Followers = styled.p`
margin-top: 16px;
text-align: center;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`;

export const ButtonWrapper = styled.div`
margin-top: 26px;
margin-bottom: 36px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
width: 196px;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
transform: translate3d(0, 0, 0);
transition: box-shadow 0.3s ease-in-out;
color: #373737;
padding: 14px 28px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
cursor: pointer;

&:hover {
        box-shadow: 0 0 10px #1DA1F2;
    }

&.active {
    transition: background 0.5s;
    background: #5CD3A8;
}
`;
