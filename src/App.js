import React, { useState } from "react";
import axios from 'axios';
import "./index.css"
function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e64e2f4ddcfbcde1b5ce9f1b83bddb7f  `

  const searchCity = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div className="searchBar">
          <input type="text" value={city}
            onChange={event => setCity(event.target.value)}
            onKeyPress={searchCity}
            placeholder='Enter City' />
        </div>
        <div className="body">
          <div className="city">
            <i><h1> {data.name} </h1></i>
          </div>
          <div className="temp">
          {data.main ? <h1> {data.main.temp} °F</h1> : null}
          </div>
          <div className="cloud">
            {data.weather ? <strong><p>{data.weather[0].description}</p></strong> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}</p> : null}
            <strong> <p>how it feels |</p></strong>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <strong> <p>Humidity |</p> </strong>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <strong> <p>wind</p> </strong>
          </div>
        </div>
      </div>
      <p className="myName">Mohd Aleem  &nbsp;: )</p>
    </div>
  );
}

export default App;
