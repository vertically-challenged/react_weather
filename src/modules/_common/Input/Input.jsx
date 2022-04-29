import React from 'react'
import './Input.scss'

function Input(inputProps) {
  const { value, onChangeHandler } = inputProps
  return (
    <div className="input__wrapper">
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
      <div className="input__underline" />
    </div>
  )
}

export default Input
