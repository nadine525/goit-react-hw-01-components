import { Profile } from 'components/Profiles/Profile';
import user from 'data/user.json';

import {Statistics} from 'components/Statistic/Statistic';
import stats from 'data/data.json';


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
    </div>

  );
};
