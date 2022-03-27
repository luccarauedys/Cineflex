import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

import Loading from '../../components/Loading';

export default function Seats({ infos, getInfos }) {
  const { movie, weekday, hour } = infos;
  const navigate = useNavigate();
  const { sessionID } = useParams();
  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`;
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [seatsName, setSeatsName] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => setSeats(response.data.seats));
  }, [URL]);

  function selectSeat({ id, name }) {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((seatID) => seatID !== id));
      setSeatsName(seatsName.filter((seatName) => seatName !== name));
    } else {
      setSelectedSeats([...selectedSeats, id]);
      setSeatsName([...seatsName, name]);
    }
  }

  function sendInfos() {
    const reservation = {
      seats: [...seatsName],
      name: name.toString(),
      cpf: cpf.toString(),
    };

    getInfos({ reservation });

    axios
      .post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {
        ids: [...selectedSeats],
        name: name.toString(),
        cpf: cpf.toString(),
      })
      .then(() => navigate('/success'))
      .catch((response) => console.log(response.error));
  }

  return seats.length === 0 ? (
    <Loading />
  ) : (
    <FlexColumn>
      <h2>Selecione o(s) assento(s)</h2>

      <Grid>
        {seats.map((seat) => {
          return seat.isAvailable ? (
            <Seat
              onClick={() => {
                selectSeat(seat);
              }}
              background={
                selectedSeats.includes(seat.id) ? '#f7cd51' : '#e3e3e3'
              }
              key={seat.id}
            >
              {seat.name}
            </Seat>
          ) : (
            <Seat
              onClick={() => alert('Esse assento não está disponível')}
              key={seat.id}
              background={'#ff664f'}
            >
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

      <Button onClick={sendInfos}>Reservar assento(s)</Button>

      <Footer>
        <img src={movie.posterURL} alt={movie.title} />
        <h2>
          {movie.title} | {weekday} - {hour}
        </h2>
      </Footer>
    </FlexColumn>
  );
}
