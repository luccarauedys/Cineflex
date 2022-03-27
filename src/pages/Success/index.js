import { useNavigate } from 'react-router-dom';

import { Main, Container, Info, Button } from './styles';

export default function Success({ infos }) {
  const { movie, weekday, date, hour, reservation } = infos;
  const navigate = useNavigate();

  return (
    <Main>
      <h1>Pedido feito com sucesso!</h1>
      <Container>
        <Info>
          <h2>Filme e Sessão</h2>
          <p>{movie.title}</p>
          <p>
            {weekday}, {date} às {hour}
          </p>
        </Info>
        <Info>
          <h2>Ingressos</h2>
          {reservation.seats.map((seat) => {
            return <p key={seat}>Assento {seat}</p>;
          })}
        </Info>
        <Info>
          <h2>Comprador</h2>
          <p>Nome: {reservation.name}</p>
          <p>CPF: {reservation.cpf}</p>
        </Info>
      </Container>
      <Button onClick={() => navigate('/')}>Voltar para Home</Button>
    </Main>
  );
}
