import React from 'react'

export default function Separator(separatorProps) {
  const { day, mouth } = separatorProps

  return (
    <div className="hourly-list__separator">
      <div className="separator__day">{day}</div>
      <div className="separator__mouth">{mouth}</div>
    </div>
  )
}
