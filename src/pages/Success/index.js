import { useNavigate } from 'react-router-dom';

export default function Success({ infos }) {
  console.log(infos);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Sucesso</h1>
      <button onClick={() => navigate('/')}>Voltar para Home</button>
    </div>
  );
}
