import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from '../Home';
import Details from '../Details';
import Showtimes from '../Showtimes';
import Seats from '../Seats';
import Success from '../Success';

import { Header } from './styles';

export default function App() {
  const [infos, setInfos] = useState(null);

  function getInfos(newInfos) {
    setInfos({...infos, ...newInfos});
  }

  return (
    <BrowserRouter>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Routes>
        <Route path="/details/:movieID" element={<Details />} />
        <Route path="/showtimes/:movieID" element={<Showtimes getInfos={getInfos} />}/>
        <Route path="/seats/:sessionID" element={<Seats infos={infos} getInfos={getInfos} />}/>
        <Route path="/success" element={<Success infos={infos} />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
