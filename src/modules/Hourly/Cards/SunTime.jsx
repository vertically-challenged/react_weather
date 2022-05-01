import React from 'react'
import iconsList from '../../../icons/icons'

export default function SunTime(sunTimeProps) {
  const {
    event,
    time,
    day,
    mouth,
  } = sunTimeProps

  return (
    <li className="hourly-list__item hourly-list__sunTime">
      {event === 'sunrise' && <img width="50px" height="50px" src={iconsList.other.sunrise} alt="sunrise" />}
      {event === 'sunset' && <img width="50px" height="50px" src={iconsList.other.sunset} alt="sunset" />}
      <div>{time}</div>
      <div>
        {day}
        {' '}
        {mouth}
      </div>
    </li>
  )
}
