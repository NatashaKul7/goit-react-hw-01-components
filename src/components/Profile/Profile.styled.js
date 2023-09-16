import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  border: solid 2px black;
  width: 300px;
  height: 300px;
`;
export const Username = styled.h1`
  font-size: 32px;
`;
export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;

  min-width: 346px;
  background-color: #e0ffff;
`;

export const Details = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  gap: 8px;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Quantity = styled.b`
  font-size: 16px;
`;
export const Label = styled.span`
  color: grey;
`;
