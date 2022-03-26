import styled from 'styled-components';
import '../../assets/variables.css';

export const Main = styled.main`
  padding-top: 70px;
  width: 90%;
  margin: 0 auto;

  h2 {
    font-size: 25px;
    font-weight: 500;
    color: var(--default-text-color);
    padding: 35px;
    text-align: center;
  }
`;

export const Movies = styled.ul`
  list-style: none;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
`;

export const Movie = styled.li`
  img {
    width: 100%;
    max-width: 300px;
    border-radius: 0.8rem;
    box-shadow: 2px 2px 10px #00000050;
    transition: all ease 0.5s;
  }
  img:hover {
    transform: scale(110%);
  }
`;
