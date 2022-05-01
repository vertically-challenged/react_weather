import React from 'react'
import iconsList from '../../icons/icons'
import { DateFormattingFullDate } from '../../Services/FormattingDataServices/DateFormatting'
import './Daily.scss'

export default function Daily(dailyProps) {
  const { dailyWeather } = dailyProps

  return (
    <table className="daily-weather">
      <tbody>
        {dailyWeather.map((day, index) => (
          <tr key={day.dt}>
            {index === 0 && <td className="daily-weather__date">Сегодня</td>}
            {index !== 0
            && (
            <td className="daily-weather__date">
              <span className="daily-weather__day">{DateFormattingFullDate(day.dt).day}</span>
              <span>{DateFormattingFullDate(day.dt).mouth}</span>
            </td>
            )}
            <td className="daily-weather__description">
              <img width="40px" height="40px" src={iconsList.weather[day.weather[0].icon]} alt="icon" />
              <span>{day.weather[0].description}</span>
            </td>
            <td className="daily-weather__temp">
              <span>{`${Math.round(day.temp.max)}°`}</span>
              <span>{' / '}</span>
              <span>{`${Math.round(day.temp.min)}°`}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
