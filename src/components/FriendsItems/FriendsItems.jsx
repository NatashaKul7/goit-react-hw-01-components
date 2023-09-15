export const FriendsItems = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      </li>
      ))}
      </ul>
  );
};
