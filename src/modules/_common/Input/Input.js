import React from 'react'
import './Input.scss'

const Input = ({name, value, onChangeHandler}) => {
  return (
    <div className='input__wrapper'>
      <input 
        className='input'
        type="text" 
        value={value} 
        onChange={onChangeHandler}
      />
      <div className='input__underline'></div>
    </div>  
  )
}

export default Input
