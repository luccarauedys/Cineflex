import styled from 'styled-components';
import '../../assets/variables.css';

export const Main = styled.main``;

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
  background-color: var(--bg-color-alt);
  box-shadow: -2px 2px 5px #00000030;

  img {
    max-height: 100%;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--default-text-color);
  }
`;
