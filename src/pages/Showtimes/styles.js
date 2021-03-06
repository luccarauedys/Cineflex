import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 70px;
  padding-bottom: 160px;
  width: 90%;
  margin: 0 auto;

  h2 {
    font-size: 25px;
    font-weight: 500;
    color: #e3e3e3;
    text-align: center;
    padding: 35px;
  }
`;

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Showtime = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 20px;
    color: #e3e3e3;
  }

  div {
    display: flex;
    gap: 0.5rem;

    button {
      width: 140px;
      padding: 10px;
      border-radius: 2rem;
      font-size: 20px;
      font-weight: 500;
      color: var(--black);
      background-color: #e2b60b;
      cursor: pointer;
      &:hover {
        filter: brightness(80%);
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 20px 40px;
  background-color: #000000e6;
  box-shadow: -2px 2px 5px #00000030;

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
