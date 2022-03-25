import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Main } from './styles';

export default function Details() {
  const [movie, setMovie] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;
    axios.get(URL).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });
  }, [movieID]);

  return (
    <>
      <Main>
        <img src={movie.posterURL} alt={movie.title} />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <Link to={`/showtimes/${movie.id}`}>
          <button>See showtimes</button>
        </Link>
      </Main>
    </>
  );
}
