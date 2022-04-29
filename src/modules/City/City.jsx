import React from 'react'
import Input from '../_common/Input/Input'
import './City.scss'

function City(cityProps) {
  const { city, setCity, onSubmitCityHandler } = cityProps

  const inputOnChangeHandler = (setStateFunction) => (event) => {
    setStateFunction(() => event.target.value)
  }

  return (
    <div className="city">
      <form onSubmit={onSubmitCityHandler}>
        <Input value={city} onChangeHandler={inputOnChangeHandler(setCity)} />
      </form>
    </div>
  )
}

export default City
