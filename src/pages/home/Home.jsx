import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { HomeTitle, HomeText, LinkButton, LinkButtonWrapper, containerStyle  } from "./Home.styled";

export default function Home() {
  const arrowAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 }
  });
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 }
  });

  return (
    <div>
      <containerStyle>
      <animated.h1 style={titleAnimation}>
      <HomeTitle>Welcome to TweetView!</HomeTitle>
      </animated.h1>
      <HomeText>
        Are you looking to find out how many tweets and followers your friend, classmate, celebrity, or acquaintance has? Look no further! Our website has all the information you need.
      </HomeText>
      <HomeText>
        Explore our user-friendly interface, browse through beautifully designed tweet cards, and discover the fascinating world of social media. Just click on the link below to get started!
      </HomeText>
      </containerStyle>
     <LinkButtonWrapper>
        <Link to='/tweets'>
          <animated.div style={arrowAnimation}>
            <LinkButton>View Tweets</LinkButton>
          </animated.div>
        </Link>
      </LinkButtonWrapper>
    </div>
  );
};

