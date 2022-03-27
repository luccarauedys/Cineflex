import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from '../Home';
import Details from '../Details';
import Showtimes from '../Showtimes';
import Seats from '../Seats';
import Success from '../Success';
import NotFound from '../NotFound';

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
        <Route path="/" exact element={<Home />} />
        <Route path="/details/:movieID" exact element={<Details />} />
        <Route path="/showtimes/:movieID" exact element={<Showtimes getInfos={getInfos} />}/>
        <Route path="/seats/:sessionID" exact element={<Seats infos={infos} getInfos={getInfos} />}/>
        <Route path="/success" exact element={<Success infos={infos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
