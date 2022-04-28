import React from 'react'
import './CurrentWeather.scss'

const CurrentWeather = (weatherData) => {
  console.log(weatherData)
  return (
    <div className='current-weather'>
      <div className='current-weather__first-line'>
        <div className='current-weather__main-info'>
          <div className='current-weather__temp'>
            {Math.round(weatherData.currentWeather.temp)}
          </div>
        </div>
        <div className='current-weather__description'>
          {weatherData.currentWeather.weather[0].description}
        </div>
      </div>
      <div className='current-weather__second-line'>
        <div className='current-weather__sub-info'>
          <div className='current-weather__wind'>
          </div>
          <div className='current-weather__humidity'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
