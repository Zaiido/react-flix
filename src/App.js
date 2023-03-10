import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Backoffice from './components/Backoffice';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import NetflixNavbar from './components/NetflixNavbar';
import PageNotFound from './components/PageNotFound';
import TrendingNowSection from './components/TrendingNowSection';
import TvShows from './components/TvShows';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NetflixNavbar />
        <div className='overflow-hidden'>
          <Routes>
            <Route element={<TrendingNowSection />} path="/" />
            <Route element={<TvShows />} path='/tv-shows' />
            <Route element={<MovieDetails />} path='/movie-details/:movieId' />
            <Route element={<Backoffice />} path="/backoffice" />
            <Route element={<PageNotFound />} path="*" />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
