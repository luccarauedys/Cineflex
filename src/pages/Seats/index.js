import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../Loading';

import {
  FlexColumn,
  Grid,
  Seat,
  Legend,
  LegendItem,
  InputGroup,
  Button,
  Footer,
} from './styles';

export default function Seats({ selected, getBuyerInfos }) {
  const { movie, weekday, hour } = selected;

  const { sessionID } = useParams();
  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`;

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');

  function handleInfosInput() {
    getBuyerInfos(name, cpf);
    console.log(name, cpf);
    // navegar para a pagina de sucesso
  }

  useEffect(() => {
    axios.get(URL).then((response) => setSeats(response.data.seats));
  }, [URL]);

  return seats.length === 0 ? (
    <Loading />
  ) : (
    <FlexColumn>
      <h2>Selecione o(s) assento(s)</h2>

      <Grid>
        {seats.map((seat) => {
          return seat.isAvailable ? (
            <Seat
              onClick={() => console.log('selecionei')}
              key={seat.id}
              isAvailable={seat.isAvailable}
            >
              {seat.name}
            </Seat>
          ) : (
            <Seat key={seat.id} isAvailable={seat.isAvailable}>
              {seat.name}
            </Seat>
          );
        })}
      </Grid>

      <Legend>
        <LegendItem background="#f7cd51">
          <div></div>
          <p>Selecionado</p>
        </LegendItem>
        <LegendItem background="#e3e3e3">
          <div></div>
          <p>Disponível</p>
        </LegendItem>
        <LegendItem background="#ff664f">
          <div></div>
          <p>Indisponível</p>
        </LegendItem>
      </Legend>

      <InputGroup>
        <label>
          Nome do comprador <br />
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          CPF do comprador <br />
          <input
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
        </label>
      </InputGroup>

      <Button onClick={handleInfosInput}>Reservar assento(s)</Button>

      <Footer>
        <img src={movie.posterURL} alt={movie.title} />
        <h2>
          {movie.title} | {weekday} - {hour}
        </h2>
      </Footer>
    </FlexColumn>
  );
}
