import React, { useEffect, useState } from 'react'
import { DateFormattingFullDate, DateFormatting } from '../../Services/FormattingDataServices/DateFormatting'
import iconsList from '../../icons/icons'
import CapitalLetter from '../../Services/FormattingDataServices/CapitalLetter'
import AddPlusIfNeeded from '../../Services/FormattingDataServices/AddPlusIfNeeded'
import './Hourly.scss'
import Button from './Button/Button'
import Separator from './Cards/Separator'
import SunTime from './Cards/SunTime'
import Weather from './Cards/Weather'

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
          ...DateFormattingFullDate(hourlyWeather[i + 1]?.dt),
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

  const [data, setData] = useState(dataPreparation(
    hourlyWeather,
    currentTime,
    dailyWeather,
  ))

  useEffect(() => {
    setData(() => dataPreparation(
      hourlyWeather,
      currentTime,
      dailyWeather,
    ))
  }, [currentTime])

  console.log(data)

  return (
    <div className="hourly-list__wrapper">
      <Button direction="left" />
      <ul className="hourly-list">
        {data.map((item) => {
          if (item.type === 'separator') {
            return (
              <Separator
                day={item.day}
                mouth={item.mouth}
              />
            )
          }

          if (item.event) {
            return (
              <SunTime
                event={item.event}
                time={item.time}
                day={item.day}
                mouth={item.mouth}
              />
            )
          }
          return (
            <Weather
              dt={DateFormatting(item.dt)}
              icon={iconsList.weather[item.weather[0].icon]}
              temp={AddPlusIfNeeded(Math.round(item.temp))}
            />
          )
        })}
      </ul>
      <Button direction="right" />
    </div>
  )
}

export default Hourly
