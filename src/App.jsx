import React, { useState, useEffect } from 'react'
import API from './API/API'
import './App.scss'
import City from './modules/City/City'
import Time from './modules/Time/Time'
import CurrentWeather from './modules/CurrentWeather/CurrentWeather'
import Hourly from './modules/Hourly/Hourly'

function App() {
  const [city, setCity] = useState('Москва')
  const [country, setCountry] = useState('RU')
  const [/* geocode */, setGeocode] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  // console.log(weatherData)

  const setData = () => {
    API.getGeocode(city, country)
      .then((currentGeocode) => {
        setGeocode(currentGeocode)
        return currentGeocode
      })
      .then((currentGeocode) => {
        API.getWeatherData(currentGeocode)
          .then((currentWeatherData) => {
            setWeatherData(() => (currentWeatherData.data))
          })
      })
  }

  useEffect(() => {
    setData()
  }, [])

  const onSubmitCityHandler = () => (event) => {
    event.preventDefault()
    setData()
  }

  return (
    <div className="App">
      { weatherData && (
      <div className="container">
        <City
          city={city}
          country={country}
          setCity={setCity}
          setCountry={setCountry}
          onSubmitCityHandler={onSubmitCityHandler(setGeocode, city, country)}
        />
        <Time time={weatherData.current.dt} />
        <div className="weather-bloc">
          <CurrentWeather currentWeather={weatherData.current} />
          <Hourly
            currentTime={weatherData.current.dt}
            dailyWeather={weatherData.daily}
            hourlyWeather={weatherData.hourly}
          />
        </div>
      </div>
      )}
    </div>
  )
}

export default App
