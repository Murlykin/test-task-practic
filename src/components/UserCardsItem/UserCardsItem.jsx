import { useState, useEffect } from "react";
import { updateUser } from "../../servises/usersApi";

import image from "../../images/picture21.png";
import logo from "../../images/logo.png";

import {
  CardsItem,
  CheckboxContainer,
  Logo,
  BgImage,
  Rectangle,
  AvatarWrap,
  Avatar,
  User,
  Tweets,
  Followers,
  CheckboxInput,
  CheckboxInputLabelOff,
  CheckboxInputLabelOn,
} from "./UserCardsItem.styled";

export const UserCardsItem = (users) => {
  const { id, avatar, tweets, followers, check, user } = users.user;

  const [checked, setChecked] = useState(check);
  const [follow, setFollow] = useState(followers);

  useEffect(() => {}, []);

  const folowersChange = async () => {
    setChecked(!checked);

    if (!checked) {
      setFollow((prevState) => prevState + 1);
      await updateUser(id, follow + 1, true);
    } else {
      setFollow((prevState) => prevState - 1);
      await updateUser(id, follow - 1, false);
    }
  };

  return (
    <CardsItem key={id}>
      <Logo src={logo} alt="goit logo" />
      <BgImage src={image} alt="background image" />
      <Rectangle />
      <AvatarWrap />
      <Avatar src={avatar} alt="user avatar" />
      <User>{user} </User>
      <Tweets>{tweets} TWEETS</Tweets>
      <Followers>{follow} FOLLOWERS</Followers>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id={id}
          checked={checked}
          onChange={folowersChange}
        />
        {checked ? (
          <CheckboxInputLabelOn htmlFor={id}>Following</CheckboxInputLabelOn>
        ) : (
          <CheckboxInputLabelOff htmlFor={id}>Follow</CheckboxInputLabelOff>
        )}
      </CheckboxContainer>
    </CardsItem>
  );
};
