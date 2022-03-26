import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from '../Home';
import Details from '../Details';
import Showtimes from '../Showtimes';
import Seats from '../Seats';

import { Header } from './styles';

export default function App() {
  const [selected, setSelected] = useState([]);
  const [buyerInfos, setBuyerInfos] = useState('');

  function getBuyerInfos(name, cpf) {
    setBuyerInfos({ name, cpf });
  }

  return (
    <BrowserRouter>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details/:movieID" element={<Details />} />
        <Route
          path="/showtimes/:movieID"
          element={<Showtimes selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/seats/:sessionID"
          element={
            <Seats
              selected={selected}
              setSelected={setSelected}
              getBuyerInfos={getBuyerInfos}
            />
          }
        />
        <Route path="/success" element={<Success buyerInfos={buyerInfos} />} />
      </Routes>
    </BrowserRouter>
  );
}
