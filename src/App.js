import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState(0)
  const [selectedCity, setSelectedCity] = useState('kerala')

  useEffect(()=>{
    getWeather("Kerala",10.16,76.64)

  },[])

  function getWeather(city,latitude,longitude){

    setSelectedCity(city)

    axios.get('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    .then(data=>{
      const temp = (data.data.current_weather.temperature)

      setTemperature(temp)
    })
    .catch(error=>{
      console.log(error)
    })
  }


  return (
    <>
      <header></header>
      <main>
        <h1>My Weather App</h1>
        <p>The current weather at {selectedCity} is <span id='temperature'>{temperature}°C</span></p>
        <div className='buttons'>
          <button onClick={()=>{getWeather("Malappuram",11.05, 76.07)}}>Malappuram</button>
          <button onClick={()=>{getWeather("kozhikode",11.25,75.5)}}>Kozhikode</button>
          <button onClick={()=>{getWeather("Thrissur",10.52,76.21)}}>thrissur</button>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
