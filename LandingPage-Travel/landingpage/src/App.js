import './root.css'
import './reset.css'
import Banner from './components/Banner';
import Destination from './components/Destination';
import Activity from './components/Activity';
import TourPackages from './components/TourPackages';


import { tour } from './assets/js/mock'
import SharedPhotos from './components/SharedPhotos';
import ReviewEtour from './components/ReviewEtour';


function App() {
  return (
    <div className="App"> 
      <Banner />
      <Destination />
      <Activity />
      <TourPackages 
        tours={tour}
      />
      <SharedPhotos />
      <ReviewEtour />
    </div>
  );
}

export default App;
