import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Details from './pages/Details';
import Showtimes from './pages/Showtimes';
import Seats from './pages/Seats';
import Success from './pages/Success';

export default function App() {
  const [infos, setInfos] = useState(null);

  function getInfos(newInfos) {
    setInfos({ ...infos, ...newInfos });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:movieID" element={<Details />} />
        <Route
          path="/showtimes/:movieID"
          element={<Showtimes getInfos={getInfos} />}
        />
        <Route
          path="/seats/:sessionID"
          element={<Seats infos={infos} getInfos={getInfos} />}
        />
        <Route path="/success" element={<Success infos={infos} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
