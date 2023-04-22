import { useState, useEffect } from 'react';
import { getUsers } from '../../servises/usersApi';
import { useCheckboxStore } from '@ariakit/react';

import { UserCards, CheckboxButton, Cards } from './UserCardsItem.styled';

export const UserCardsItem = () => {
  const [users, setUsers] = useState([]);
  const checkbox = useCheckboxStore();
  const label = checkbox.useState(state => (state.value ? 'Checked' : 'Unchecked'));

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  // console.log(users);

  return (
    <Cards>
      {users.map(user => (
        <UserCards key={user.id}>
          <img src={user.avatar} alt="" />
          <p>{user.user} </p>
          <p>{user.tweets} TWEETS</p>
          <p>{user.followers} FOLLOWERS</p>user
        
          <CheckboxButton as="button" store={checkbox}>
            {label}
          </CheckboxButton>
        </UserCards>
      ))}
    </Cards>
  );
};
