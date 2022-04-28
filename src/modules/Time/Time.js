import React from 'react'
import { DateFormatting } from '../../Services/FormattingDataServices/DateFormatting'

const Time = () => {
  return (
    <div className="time">Сейчас {DateFormatting(Number())}</div>
  )
}

export default Time
