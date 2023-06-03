import logo from '../../images/logo.png'
import frame from '../../images/frame.png'
import mainImg from '../../images/main.png'
import PropTypes from "prop-types";
import {
  Avatar, 
  AvatarWrapper,
  BackgroundPicture,
  ButtonWrapper,
  Button,
  CardBackground,
  FrameWrapper,
  Line,
  LogoContainer,
  Followers,
  Tweets,
} from "./UserCard.styled";
import { useDispatch} from "react-redux";
import { addFollowId, deleteFollowId } from "../../redux/followerOfSlice";
import { decreaseFollowers, increaseFollowers } from "../../redux/usersSlice";

import { useState } from 'react';

export const UserCard = ({ tweets, followers, avatar, id, isFollow }) => {
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [followerCount, setFollowerCount] = useState(followers);
  
  const handleOnFollow = () => {
  if (isFollowing) {
  dispatch(deleteFollowId(id));
  dispatch(decreaseFollowers(id));
  setFollowerCount((prevCount) => prevCount - 1);
  } else {
  dispatch(addFollowId(id));
  dispatch(increaseFollowers(id));
  setFollowerCount((prevCount) => prevCount + 1);
  }
  setIsFollowing((prevState) => !prevState);
  };
    const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };
  return (
    <CardBackground>
         <LogoContainer>
   <img src={logo} alt="logo" width={76} height={22} />
 </LogoContainer>
 <BackgroundPicture src={mainImg} alt="picture" width={308} height={168} />
 <Line></Line>
 <FrameWrapper>
<AvatarWrapper>
<Avatar src={avatar} alt="frame" width={56} height={56} />
</AvatarWrapper>
 <img src={frame} alt="frame" width={80} height={80} />
 </FrameWrapper>
 <Tweets>
 <span>{formatNumber(tweets)}</span> tweets
 </Tweets>
 <Followers>
<span>{formatNumber(followerCount)}</span> Followers
</Followers>
<ButtonWrapper>
<Button
style={{ background: isFollowing ? "#5CD3A8" : "#ebd8ff" }}
onClick={handleOnFollow}
>
{isFollowing ? "Following" : "Follow"}
</Button>
</ButtonWrapper>
</CardBackground>
);
};




UserCard.propTypes = {
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFollow: PropTypes.bool.isRequired,
};
