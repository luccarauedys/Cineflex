import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header, Main, Movies, Movie } from './styles';
import loading from '../../assets/img/loading.gif';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then((response) => setMovies(response.data));
  }, []);

  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Main>
        <h2>Selecione o filme</h2>
        <Movies>
          {movies.length === 0 && (
            <img src={loading} style={{ width: '100px' }} alt="Loading GIF" />
          )}

          {movies.map((movie) => {
            return (
              <Movie key={movie.id}>
                <Link to={`/sessions/${movie.id}`}>
                  <img src={movie.posterURL} alt={movie.title} />
                </Link>
              </Movie>
            );
          })}
        </Movies>
      </Main>
    </>
  );
}
