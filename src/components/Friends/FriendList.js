import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.key}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
