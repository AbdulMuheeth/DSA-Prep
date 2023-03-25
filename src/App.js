import logo from './logo.svg';
import './App.css';
import Overview from './Components/Overview';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="wrapper">
      <div className='inner-wrapper'>
          <Overview/>
          <Pricing/>
      </div>
    </div>
  );
}

export default App;
