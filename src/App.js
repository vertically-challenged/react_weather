import React, { useState, useEffect } from 'react'
import { API } from './API/API'
import './App.scss'
import City from './modules/City/City'

const api = new API()

function App() {
  const [city, setCity] = useState('Москва')
  const [country, setCountry] = useState('RU')
  const [geocode, setGeocode] = useState(null)

  useEffect(() => {
    api.getGeocode(city, country).then((geocode) => setGeocode(geocode[0]))
  }, [])

  const onSubmitCityHandler = (setGeocode, city, country) => {
    return (event) => {
      event.preventDefault()
      api.getGeocode(city, country).then((geocode) => setGeocode(geocode[0]))
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
      </div>
    </div>
  )
}

export default App
