import {
  Container,
  Items,
  Status,
  Name,
  Span,
  Online,
  Offline,
} from './FriendsItems.styled';

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



  // <Status>
  //           {isOnline ? <Online /> : <Offline />}
  //         </Status>