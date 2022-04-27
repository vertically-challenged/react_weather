import React from 'react'

const Input = ({name, value, onChangeHandler}) => {
  return (
    <input 
      type="text" value={value} onChange={onChangeHandler}
    />
  )
}

export default Input
