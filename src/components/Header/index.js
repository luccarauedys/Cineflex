import styled from 'styled-components';

export default function Header({ children }) {
  return (
    <Container>
      {children}
      <h1>CINEFLEX</h1>
    </Container>
  );
}

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: grid;
  place-items: center;
  background-color: #000000e6;
  box-shadow: 0px 2px 5px #00000030;

  h1 {
    font-size: 35px;
    font-weight: 700;
    color: #e2b60b;
  }
`;
