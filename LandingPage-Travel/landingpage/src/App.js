import './root.css'
import './reset.css'
import Banner from './components/Banner';
import Destination from './components/Destination';
import Activity from './components/Activity';


function App() {
  return (
    <div className="App"> 
      <Banner />
      <Destination />
      <Activity />
    </div>
  );
}

export default App;
