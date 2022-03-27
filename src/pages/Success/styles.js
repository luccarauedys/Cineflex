import styled from 'styled-components';

export const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
    width: 50%;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    color: #e2b60b;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #e3e3e3;
  }

  p {
    font-size: 18px;
    font-weight: normal;
    color: #e3e3e3;
  }
`;

export const Button = styled.button`
  width: 60%;
  max-width: 500px;
  font-size: 18px;
  font-weight: 500;
  padding: 0.8rem;
  border-radius: 1.6rem;
  background-color: #e2b60b;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;
