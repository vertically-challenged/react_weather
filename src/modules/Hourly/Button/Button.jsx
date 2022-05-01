import React, { useState } from 'react'
import iconsList from '../../../icons/icons'

function Button(buttonProps) {
  const { direction, onScroll } = buttonProps
  const [timerID, setTimerID] = useState(setInterval(() => {}, 1))

  return (
    <div
      role="button"
      className={`hourly-list__button hourly-list__button--${direction}`}
      onMouseDown={() => {
        const timer = setInterval(() => {
          onScroll()
        }, 1)

        setTimerID(() => timer)
      }}
      onMouseUp={() => {
        clearInterval(timerID)
      }}
      onKeyDown={onScroll}
      tabIndex={0}
    >
      <img width="35px" height="35px" src={iconsList.ui[direction]} alt="icons" />
    </div>
  )
}

export default Button
