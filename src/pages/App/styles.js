import styled from 'styled-components';
import '../../assets/variables.css';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: grid;
  place-items: center;
  background-color: var(--bg-color-alt);
  box-shadow: 0px 2px 5px #00000030;

  h1 {
    font-size: 35px;
    font-weight: 700;
    color: var(--contrast-color);
  }
`;
