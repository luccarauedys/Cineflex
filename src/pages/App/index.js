import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Details from '../Details';
import Showtimes from '../Showtimes';

import { Header } from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/details/:movieID" element={<Details />} />
        <Route path="/showtimes/:movieID" element={<Showtimes />} />
      </Routes>
    </BrowserRouter>
  );
}
