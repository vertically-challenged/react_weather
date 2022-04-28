import React, { useState, useEffect } from 'react'
import { API } from './API/API'
import './App.scss'
import City from './modules/City/City'
import CurrentWeather from './modules/CurrentWeather/CurrentWeather'

const api = new API()

function App() {
  const [city, setCity] = useState('Москва')
  const [country, setCountry] = useState('RU')
  const [geocode, setGeocode] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  const setData = () => {
    api.getGeocode(city, country)
    .then((geocode) => {
      setGeocode(geocode)
      return geocode
    })
    .then((geocode) => {
      api.getWeatherData(geocode)
      .then((weatherData) => {
        setWeatherData(() => weatherData.data)
      })  
    })
  } 

  useEffect(() => {
    setData()
  }, [])

  const onSubmitCityHandler = () => {
    return (event) => {
      event.preventDefault()
      setData()
    }
  }

  return (
    <div className="App">
      <div className="container">
        <City 
          city={city} 
          country={country} 
          setCity={setCity} 
          onSubmitCityHandler={onSubmitCityHandler(setGeocode, city, country)}
        />
        <div className="main-bloc">
          {weatherData && <CurrentWeather currentWeather={weatherData.current}/>}
        </div>
      </div>
    </div>
  )
}

export default App
