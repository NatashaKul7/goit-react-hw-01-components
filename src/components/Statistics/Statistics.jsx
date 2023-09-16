import { StatList, StatItem, Container, Percentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};
