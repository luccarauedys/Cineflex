import loading from '../../assets/img/loading.gif';
import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingGif>
      <img src={loading} alt="Loading GIF" />
    </LoadingGif>
  );
}

const LoadingGif = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100px;
  }
`;
