import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 120px;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 60%;
    max-width: 500px;
    border-radius: 0.8rem;
  }

  h1 {
    width: 80%;
    font-size: 30px;
    font-weight: 500;
    color: #e2b60b;
  }

  p {
    line-height: 1.5;
    width: 90%;
    font-size: 18px;
    font-weight: normal;
    color: #e3e3e3;
  }

  button {
    width: 200px;
    padding: 0.8rem;
    border-radius: 1.6rem;
    background-color: #e2b60b;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 60px;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
`;
