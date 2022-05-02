import React, { useState, useEffect } from 'react'
import API from './API/API'
import './App.scss'
import City from './modules/City/City'
import Time from './modules/Time/Time'
import CurrentWeather from './modules/CurrentWeather/CurrentWeather'
import Hourly from './modules/Hourly/Hourly'
import Daily from './modules/Daily/Daily'
import Additionally from './modules/Additionally/Additionally'

function App() {
  const [city, setCity] = useState('Москва')
  const [country, setCountry] = useState('RU')
  const [/* geocode */, setGeocode] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [AQ, setAQ] = useState(null)

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
        API.airPollution(currentGeocode).then((airPollutionData) => {
          setAQ(() => (airPollutionData))
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
          <Daily
            dailyWeather={weatherData.daily}
          />
          <Additionally
            AQ={AQ}
            currentWeather={weatherData.current}
          />
        </div>
      </div>
      )}
    </div>
  )
}

export default App
