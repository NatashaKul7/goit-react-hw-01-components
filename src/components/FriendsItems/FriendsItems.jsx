import { Container, Items, Name, Span } from './FriendsItems.styled';

export const FriendsItems = ({ friends }) => {
  console.log(friends);
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Items key={id}>
          <Span>{isOnline}</Span>
          <img src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </Items>
      ))}
    </Container>
  );
};
