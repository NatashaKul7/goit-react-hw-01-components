import {
  Container,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  Details,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Details>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Details>
        <Details>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Details>
        <Details>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Details>
      </Stats>
    </Container>
  );
};
