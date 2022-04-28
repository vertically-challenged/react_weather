import React from 'react'
import Input from '../_common/Input/Input'
import './City.scss'

const City = ({city, setCity, onSubmitCityHandler}) => {
  const inputOnChangeHandler = (setCity) => {
    return (event) => {
      setCity(() => event.target.value)
    }
  }

  return (
    <div className="city">
      <form onSubmit={onSubmitCityHandler}>
        <Input value={city} onChangeHandler={inputOnChangeHandler(setCity)}/>
      </form>
    </div>
  )
}

export default City
