import { useLocation } from "react-router-dom";
import { BackButton, LoadMoreButtonWrapper } from "./Tweets.styled";
import UsersList from "../../components/usersList/UsersList";
import { useEffect, useRef } from "react";

export default function Tweets() {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? "/");

  useEffect(() => {
    backLinkLocation.current = location.state?.from ?? "/";
  }, [location]);

  return (
    <>
      <BackButton to={backLinkLocation.current}>Go back</BackButton>
      <UsersList />
    </>
  );
}




