import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from '../Home';
import Details from '../Details';
import Showtimes from '../Showtimes';
import Seats from '../Seats';
import Success from '../Success';

import { Header } from './styles';

export default function App() {
  const [selected, setSelected] = useState([]);
  const [infos, setInfos] = useState('');

  function getInfos(infos) {
    setInfos(infos);
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
              getInfos={getInfos}
            />
          }
        />
        <Route path="/success" element={<Success infos={infos} />} />
      </Routes>
    </BrowserRouter>
  );
}
