import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Main, Container, Showtime, Footer } from './styles';

import Header from '../../components/Header';
import GoBackBtn from '../../components/GoBackBtn';
import Loading from '../../components/Loading';

export default function Showtimes({ getInfos }) {
  const [movie, setMovie] = useState([]);
  const [days, setDays] = useState([]);

  const { movieID } = useParams();
  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setMovie(response.data);
      setDays(response.data.days);
    });
  }, [URL]);

  return days.length === 0 ? (
    <>
      <Header>
        <GoBackBtn />
      </Header>
      <Loading />
    </>
  ) : (
    <>
      <Header>
        <GoBackBtn />
      </Header>
      <Main>
        <h2>Selecione o horário</h2>

        <Container>
          {days.map(({ id, weekday, date, showtimes }) => {
            return (
              <Showtime key={id}>
                <p>
                  {weekday} - {date}
                </p>
                <div>
                  {showtimes.map((showtime) => {
                    const { name: hour } = showtime;
                    return (
                      <button
                        onClick={() => {
                          const chosenSession = { movie, weekday, date, hour };
                          getInfos(chosenSession);
                        }}
                        key={showtime.id}
                      >
                        <Link to={`/seats/${showtime.id}`}>{hour}</Link>
                      </button>
                    );
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
