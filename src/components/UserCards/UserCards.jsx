import { useState, useEffect } from "react";
import { getUsers } from "../../servises/usersApi";
import { Loader } from "../../Loader/Loader";
import { UserCardsItem } from "../UserCardsItem/UserCardsItem";
import { Link } from "react-router-dom";
import {
  ListContainer,
  UserCartsList,
  LoadMoreButton,
  ButtonPosition,
  BackButton
} from "./UserCards.styled";

export const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleLoadMore = async () => {
    setLoadMore(true);

    setPage((prevState) => prevState + 1);
    const data = await getUsers(page);
    setUsers((prevState) => [...prevState, ...data]);

    setLoadMore(false);
  };

  return !users.length ? (
    <Loader />
  ) : (
    <ListContainer>
      <div>
        <UserCartsList>
          {users.map((user) => (
            <UserCardsItem key={user.id} user={user} />
          ))}
        </UserCartsList>
      </div>
        {loadMore && <Loader />}
        <ButtonPosition>
      <LoadMoreButton
        style={{ display: users.length > 11 ? "none" : "block" }}
        onClick={handleLoadMore}
        type="button"
      >
        {loadMore ? "Loading..." : "LOAD MORE"}
        </LoadMoreButton>
       
          <Link to="/">
           <BackButton>Back</BackButton>
        </Link>
        </ButtonPosition>
    </ListContainer>
  );
};
