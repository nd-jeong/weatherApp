import React, {useState} from 'react';
import './App.css';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [weatherInfo, weatherInfoRequest] = useState({});
  const [infoCheck, infoBool] = useState(false);

// Grab weather info prop from search button component
  const submitRequest = (info) => {
    weatherInfoRequest(info);
  }
// Bool to check whether to load weather info component
  const dataLoadCheck = (bool) => {
    infoBool(bool);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
        <CitySearch
          submitRequest = {submitRequest}
          dataLoadCheck = {dataLoadCheck}
        />
        {infoCheck && <WeatherDisplay weatherInfo={weatherInfo}/>}
        <footer className="App-footer"/>
    </div>
  );
}

export default App;
