import React from 'react'
import { DateFormatting } from '../../Services/FormattingDataServices/DateFormatting'
import './Time.scss'

function Time(timeProps) {
  const { time } = timeProps
  return (
    <div className="time">
      Сейчас
      {' '}
      {DateFormatting(Number(time))}
    </div>
  )
}

export default Time
