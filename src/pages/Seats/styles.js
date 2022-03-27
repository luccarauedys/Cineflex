import styled from 'styled-components';

export const FlexColumn = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-top: 110px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #e3e3e3;
  }
`;

export const Grid = styled.div`
  height: 200px;
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(5, 20%);
  justify-items: center;
  align-items: center;
`;

export const Seat = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => props.background};
  color: #000000;
  cursor: pointer;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const LegendItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${(props) => props.background};
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #e3e3e3;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label,
  input {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 500;
  }

  label {
    color: #e3e3e3;
  }

  input {
    background-color: #e3e3e3;
    color: #000000;
    margin-top: 0.8rem;
    padding: 0.6rem 1rem;
    border-radius: 1.2rem;
    &:focus {
      background-color: #fff0c4;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
`;

export const Button = styled.button`
  width: 60%;
  max-width: 500px;
  margin: 1rem auto;
  margin-bottom: 10rem;
  font-size: 18px;
  font-weight: 500;
  padding: 0.8rem;
  border-radius: 1.6rem;
  background-color: #e2b60b;
  cursor: pointer;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 20px 40px;
  background-color: #000000e6;
  box-shadow: -2px 2px 5px #00000030;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    max-height: 100%;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    color: #e3e3e3;
  }
`;
