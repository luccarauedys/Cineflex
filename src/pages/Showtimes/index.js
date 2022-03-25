import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Main, Footer } from './styles';

export default function Showtimes() {
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
        <h2>Selecione o horário</h2>
      </Main>

      <Footer>
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Footer>
    </>
  );
}
