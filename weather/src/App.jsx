import React, { useEffect, useState } from 'react'
import './App.css';
function App() {
  const [city, setCity] = useState("Delhi"); //city
  const [weatherData, setWeatherData] = useState(null); // weather data


  const currentDate = new Date(); // current date 
  const months = [ //current month
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = months[currentDate.getMonth()]; // current month
  const day = currentDate.getDate(); // current date
  const year = currentDate.getFullYear(); // current year

  const formattedDate = `${month} ${day}, ${year}`; // formatted date

  const API_KEY = "7bbfa377b34870fc6cb9341ff754bc48";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      console.log(data);
      setWeatherData(data); // set weather data
    }
    catch(error){
      console.log("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    fetchWeatherData(); // fetch weather data
  },[])

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value); // set city
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(); // fetch weather data

  }
  const getWeatherIconUrl= (main)=>{
  switch(main){
    case "Clouds":
      return "/thunder.jpg"

    case "Rain":
      return "/rain.jpg"

    case "Mist":
      return "/thunder.jpg"

    case "Haze":
      return "/rain.jpg"

    default:
      return "/thunder.jpg"
  }
  }

  return (
    <div className='App'>
      <div className='container'>
        {weatherData && (

          <>
            <h1 className='container_date'> {formattedDate} </h1>
            <div className='weather_data'>
              <h2 className='container_city'> {weatherData.name} </h2>
             

               <img 
               className='container_img'
               src={getWeatherIconUrl(weatherData.weather[0].main)}
               alt="Weather icon"
               width="180px"
               />


              <h2 className='container_degree'>{weatherData.main.temp}</h2>
              <h3 className='country_per'> {weatherData.weather[0].description}</h3>
              <form className='form' onSubmit={handleSubmit}>
                <input type="text" className='input' placeholder='Search city' onChange={handleInputChange} />
                <button type='submit'> Get </button>
              </form>
            </div>

          </>
        )}

      </div>
    </div>
  )
}

export default App
