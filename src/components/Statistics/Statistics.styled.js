import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  gap: 8px;
  flex: 1;
  flex-direction: column;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #ccc;

  padding: 14px;
  background-color: #e0ffff;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
