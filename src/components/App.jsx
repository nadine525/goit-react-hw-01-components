import { Profile } from 'components/Profiles/Profile';
import user from 'data/user.json';

import {Statistics} from 'components/Statistics/Statistics';
import stats from 'data/data.json';

import {FriendList} from 'components/Friends/FriendList';
import friends from 'data/friends.json';

import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>

  );
};
