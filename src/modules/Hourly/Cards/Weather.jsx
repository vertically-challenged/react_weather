import React from 'react'

export default function Weather(weatherProps) {
  const { dt, icon, temp } = weatherProps
  return (
    <li className="hourly-list__item">
      <div className="hourly-list__time">{dt}</div>
      <div>
        <img width="50px" height="50px" src={icon} alt="icon" />
      </div>
      <div className="hourly-list__temp">{temp}</div>
    </li>
  )
}
