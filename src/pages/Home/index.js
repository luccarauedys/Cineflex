import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Main, Movies, Movie } from './styles';

import Loading from '../../components/Loading';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then((response) => setMovies(response.data));
  }, []);

  return (
    <>
      <Main>
        <h2>Selecione o filme</h2>
        <Movies>
          {movies.length === 0 && <Loading />}
          {movies.map((movie) => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}>
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
