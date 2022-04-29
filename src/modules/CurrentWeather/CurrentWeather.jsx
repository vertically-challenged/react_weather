import React from 'react'
import AddPlusIfNeeded from '../../Services/FormattingDataServices/AddPlusIfNeeded'
import ConvertInMmhg from '../../Services/FormattingDataServices/ConversionHpaInMmhg'
import DetermineWindDirection from '../../Services/FormattingDataServices/DetermineWindDirection'
import CapitalLetter from '../../Services/FormattingDataServices/CapitalLetter'
import iconsList from '../../icons/icons'
import './CurrentWeather.scss'

function CurrentWeather(currentWeatherProps) {
  const { currentWeather } = currentWeatherProps

  return (
    <div className="current-weather">
      <div className="current-weather__first-line">
        <div className="current-weather__main-info">
          <div className="current-weather__temp">
            {AddPlusIfNeeded(Math.round(currentWeather.temp))}
          </div>
          <img width="50px" height="50px" src={iconsList.weather[currentWeather.weather[0].icon]} alt="icons" />
        </div>
        <div className="current-weather__description">
          <div>{CapitalLetter(currentWeather.weather[0].description)}</div>
          <div className="current-weather__feels_like">
            Ощущается как
            {' '}
            {AddPlusIfNeeded(Math.round(currentWeather.feels_like))}
          </div>
        </div>
      </div>
      <div className="current-weather__second-line">
        <div className="current-weather__sub-info">
          <div>
            <img width="20px" height="20px" src={iconsList.appliances.wind} title="Ветер" alt="icon" />
            {currentWeather.wind_speed.toFixed(1)}
            {' '}
            м/с
            {' '}
            {DetermineWindDirection(Math.round(currentWeather.wind_deg))}
          </div>
          <div>
            <img width="20px" height="20px" src={iconsList.appliances.hygrometer} title="Влажность" alt="icon" />
            {currentWeather.humidity}
            %
          </div>
          <div>
            <img width="20px" height="20px" src={iconsList.appliances.thermometer} title="Давление" alt="icon" />
            {ConvertInMmhg(currentWeather.pressure)}
            {' '}
            мм. рт. ст.
          </div>
        </div>
      </div>
    </div>

  )
}

export default CurrentWeather
