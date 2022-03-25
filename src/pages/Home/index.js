import { Link } from 'react-router-dom';

import { Header, Main, Movies, Movie } from './styles';

export default function Home() {
  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Main>
        <h2>Selecione o filme</h2>
        <Movies>
          <Movie>
            <Link to="">
              <img src="" alt="" />
            </Link>
          </Movie>
        </Movies>
      </Main>
    </>
  );
}
