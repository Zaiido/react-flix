import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './components/Footer';
import NetflixNavbar from './components/NetflixNavbar';
import NewReleases from './components/NewReleases';
import TrendingNowSection from './components/TrendingNowSection';
import TvShows from './components/TvShows';
import WatchItAgain from './components/WatchItAgain';

function App() {
  return (
    <div>
      <NetflixNavbar />
      <TvShows />
      <div className='overflow-hidden'>
        <TrendingNowSection />
        <WatchItAgain />
        <NewReleases />
        <Footer />
      </div>
    </div>
  );
}

export default App;
