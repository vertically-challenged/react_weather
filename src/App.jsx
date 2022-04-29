import React, { useState, useEffect } from 'react'
import API from './API/API'
import './App.scss'
import City from './modules/City/City'
import Time from './modules/Time/Time'
import CurrentWeather from './modules/CurrentWeather/CurrentWeather'

function App() {
  const [city, setCity] = useState('Москва')
  const [country, setCountry] = useState('RU')
  const [geocode, setGeocode] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

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
      <div className="container">
        <City
          city={city}
          country={country}
          setCity={setCity}
          setCountry={setCountry}
          onSubmitCityHandler={onSubmitCityHandler(setGeocode, city, country)}
        />

        <Time time={weatherData?.current.dt} />

        <div className="main-bloc">
          {weatherData && <CurrentWeather geocode={geocode} currentWeather={weatherData.current} />}
        </div>
      </div>
    </div>
  )
}

export default App
