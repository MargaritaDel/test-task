import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectUsers } from "../../redux/selectors";
import { PER_PAGE, fetchUsers } from "../../redux/operations";
import { UserCard } from "../userCard/UserCard";
import { MainContainer } from "./UsersList.styled";
import { clearUsers } from "../../redux/usersSlice";
import { LoadMoreButton, LoadMoreButtonWrapper } from "./UsersList.styled";
import { selectupdatedUsers } from "../../redux/selectors";
import { useLocation, useSearchParams } from "react-router-dom";

const UsersList = () => {
  const location = useLocation();
  // const backLinkLocation = useRef(location.state?.from ?? `/`);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("currentPage") ?? "";
  const updatedUsers = useSelector(selectupdatedUsers);
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (updatedUsers.length && !currentPage) {
      dispatch(clearUsers());
      setSearchParams({ currentPage: 1 });
      return;
    }
    if (!currentPage) {
      setSearchParams({ currentPage: 1 });
      return;
    }
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  const isShowButton = users.length && !isLoading && !(users.length % PER_PAGE);
  const nextPage = () => {
    const page = Number(currentPage) + 1;
    setSearchParams({ currentPage: page });
  };
  return (
    <>
      <MainContainer>
        {updatedUsers &&
          updatedUsers.map(({ id, tweets, followers, avatar, isFollow }) => (
            <UserCard
              key={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
              isFollow={isFollow}
            />
          ))}
      </MainContainer>
      {isShowButton && (
        <LoadMoreButtonWrapper>
          <LoadMoreButton onClick={nextPage}>Load More</LoadMoreButton>
        </LoadMoreButtonWrapper>
      )}
    </>
  );
};

export default UsersList;
