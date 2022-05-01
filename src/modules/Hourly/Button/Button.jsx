import React from 'react'
import iconsList from '../../../icons/icons'

function Button(buttonProps) {
  const { direction } = buttonProps

  return (
    <div className={`hourly-list__button hourly-list__button--${direction}`}>
      <img width="35px" height="35px" src={iconsList.ui[direction]} alt="icons" />
    </div>
  )
}

export default Button
