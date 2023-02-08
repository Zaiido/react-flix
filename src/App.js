import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import NetflixNavbar from './components/NetflixNavbar';
import NewReleases from './components/NewReleases';
import TrendingNowSection from './components/TrendingNowSection';
import TvShows from './components/TvShows';
import WatchItAgain from './components/WatchItAgain';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NetflixNavbar />
        <div className='overflow-hidden'>
          <Routes>
            <Route element={<TrendingNowSection />} path="/" />
          </Routes>
          <Routes>
            <Route element={<WatchItAgain />} path="/" />
          </Routes>
          <Routes>
            <Route element={<NewReleases />} path="/" />
          </Routes>
          <Routes>
            <Route element={<TvShows />} path='/tv-shows' />
            <Route element={<MovieDetails />} path='/movie-details/:movieId' />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
