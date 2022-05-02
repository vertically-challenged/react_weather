import React from 'react'
import iconsList from '../../icons/icons'
import { DateFormatting } from '../../Services/FormattingDataServices/DateFormatting'
import getAirPollution from '../../Services/AirPollution'
import './Additionally.scss'

export default function Additionally(additionallyProps) {
  const { AQ, currentWeather } = additionallyProps

  return (
    <table className="additionally">
      <tbody>
        <tr>
          <td>
            <img width="40px" height="40px" src={iconsList.other.uv} alt="icon" />
            <span>УФ-индекс:</span>
          </td>
          <td>
            {currentWeather.uvi}
          </td>
        </tr>
        <tr>
          <td>
            <img width="40px" height="40px" src={iconsList.other.sunrise} alt="icon" />
            <span>Восход:</span>
          </td>
          <td>
            {DateFormatting(currentWeather.sunrise)}
          </td>
        </tr>
        <tr>
          <td>
            <img width="40px" height="40px" src={iconsList.other.sunset} alt="icon" />
            <span>Закат:</span>
          </td>
          <td>
            {DateFormatting(currentWeather.sunset)}
          </td>
        </tr>
        <tr>
          <td>
            <img width="40px" height="40px" src={iconsList.other.aqi} alt="icon" />
            <span>Качество воздуха:</span>
          </td>
          <td>
            {` ${getAirPollution(AQ).aqi}`}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
