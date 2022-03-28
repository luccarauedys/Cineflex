import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <ion-icon name="arrow-back-outline"></ion-icon>
    </Button>
  );
}

const Button = styled.button`
  display: grid;
  place-items: center;
  background-color: transparent;
  cursor: pointer;

  ion-icon {
    font-size: 40px;
    color: #e2b60b;
  }

  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
`;
