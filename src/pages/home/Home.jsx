import { Link } from 'react-router-dom';
import { HomeTitle, HomeText, LinkButton  } from "./Home.styled";

export default function Home() {
  return (
    <div>
      <HomeTitle>Welcome to TweetView!</HomeTitle>
      <HomeText>
        Are you looking to find out how many tweets and followers your friend, classmate, celebrity, or acquaintance has? Look no further! Our website has all the information you need.
      </HomeText>
      <HomeText>
        Explore our user-friendly interface, browse through beautifully designed tweet cards, and discover the fascinating world of social media. Just click on the link below to get started!
      </HomeText>
      <Link to='/tweets'>
        <LinkButton>View Tweets</LinkButton>
      </Link>
    </div>
  );
};

