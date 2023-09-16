import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Transactions } from 'components/Transactions/Transactions';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions}/>
    </Container>
  );
};
