import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Main, Container, Showtime, Footer } from './styles';

export default function Showtimes() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;
    axios.get(URL).then((response) => {
      console.log(response.data);
      setMovie(response.data);
      setDays(response.data.days);
    });
  }, [movieID]);

  return (
    <>
      <Main>
        <h2>Selecione o horário</h2>

        <Container>
          {days.map((day) => {
            return (
              <Showtime key={day.id}>
                <p>
                  {day.weekday} - {day.date}
                </p>
                <div>
                  {day.showtimes.map((time) => {
                    return <button key={time.id}>{time.name}</button>;
                  })}
                </div>
              </Showtime>
            );
          })}
        </Container>
      </Main>

      <Footer>
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Footer>
    </>
  );
}
