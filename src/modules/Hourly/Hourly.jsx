import React, { useState } from 'react'
import { DateFormattingFullDate, DateFormatting } from '../../Services/FormattingDataServices/DateFormatting'
import iconsList from '../../icons/icons'
import CapitalLetter from '../../Services/FormattingDataServices/CapitalLetter'
import AddPlusIfNeeded from '../../Services/FormattingDataServices/AddPlusIfNeeded'
import Button from './Button/Button'
import './Hourly.scss'

const getSunTime = (dailyWeather) => {
  const sunTime = []
  for (let i = 0; i < dailyWeather.length; i += 1) {
    sunTime.push({ event: 'sunrise', dt: dailyWeather[i].sunrise })
    sunTime.push({ event: 'sunset', dt: dailyWeather[i].sunset })
  }
  return sunTime
}

const dataPreparation = (
  hourlyWeather,
  currentTime,
  dailyWeather,
) => {
  const sunTime = getSunTime(dailyWeather)
  const preparingDate = []

  for (let i = 0; i < hourlyWeather.length; i += 1) {
    if (currentTime < hourlyWeather[i].dt) {
      preparingDate.push(hourlyWeather[i])

      if (DateFormatting(hourlyWeather[i + 1]?.dt) === '00:00') {
        preparingDate.push({
          type: 'separator',
          day: DateFormattingFullDate(hourlyWeather[i + 1]?.dt),
        })
      }

      for (let j = 0; j < sunTime.length; j += 1) {
        if (sunTime[j]?.dt > hourlyWeather[i]?.dt && sunTime[j]?.dt < hourlyWeather[i + 1]?.dt) {
          preparingDate.push({
            event: sunTime[j].event,
            time: DateFormatting(sunTime[j].dt),
            ...DateFormattingFullDate(sunTime[j].dt),
          })
        }
      }
    }
  }

  return preparingDate
}

function Hourly(hourlyProps) {
  const {
    currentTime,
    dailyWeather,
    hourlyWeather,
  } = hourlyProps

  const [data] = useState(dataPreparation(
    hourlyWeather,
    currentTime,
    dailyWeather,
  ))

  console.log(data)

  return (
    <ul className="hourly-list">
      {data.map((item) => {
        if (item.type === 'separator') {
          return (
            <div className="hourly-list__separator">
              <div className="separator__day">{item.day.day}</div>
              <div className="separator__mouth">{item.day.mouth}</div>
            </div>
          )
        }

        if (item.event) {
          return (
            <li className="hourly-list__item hourly-list__sunTime">
              {item.event === 'sunrise' && <img width="50px" height="50px" src={iconsList.other.sunrise} alt="sunrise" />}
              {item.event === 'sunset' && <img width="50px" height="50px" src={iconsList.other.sunset} alt="sunset" />}
              <div>{item.time}</div>
              <div>
                {item.day}
                {' '}
                {item.mouth}
              </div>
            </li>
          )
        }
        return (
          <li className="hourly-list__item">
            <div className="hourly-list__time">{DateFormatting(item.dt)}</div>
            <div>
              <img width="50px" height="50px" src={iconsList.weather[item.weather[0].icon]} alt="icon" />
            </div>
            {/* <div>{CapitalLetter(item.weather[0].description)}</div> */}
            <div className="hourly-list__temp">{AddPlusIfNeeded(Math.round(item.temp))}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default Hourly
