import './App.css';
import Forcast from './components/Forcast';
import Today from './components/Today';


function App() {
  return (
    <div className="WeatherApp">
     <h1>this is a header</h1>
     <div className='forcastContainer'>
     <Today/>
      <Forcast/>
     </div>
    </div>
  );
}

export default App;
