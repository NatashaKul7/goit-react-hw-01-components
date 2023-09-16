import styled from "@emotion/styled";

export const Container = styled.ul`
min-width: 346px;
`
export const Items = styled.li`
display: flex;
gap: 12px;
align-items: center;
padding: 14px;
margin-bottom: 8px;

border: solid 1px black;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
`
export const Status = styled.span`
width: 16px;
height: 16px;
border-radius: 50%;
`
// export const Online = styled.p`
// background-color: #008000;
// `
// export const Offline = styled.p`
// background-color: #FF0000;
// `
export const Name = styled.p`
font-size: 22px;
`

export const Span = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;