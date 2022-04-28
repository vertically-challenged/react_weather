import Axios from 'axios'
import { API_KEY, defaultCity, defaultCountry } from './config'

const axios = Axios.create({
  baseURL: 'https://api.openweathermap.org/'
})

export class API {
  getGeocode = async (cityName = defaultCity, countryName = defaultCountry, limit = 999) => {
    const geocode = await axios(`/geo/1.0/direct?q=${cityName},${countryName}&limit=${limit}&appid=${API_KEY}`)
    return geocode.data[0]
  }

  getWeatherData = async (geocode) => {
    const weatherData  = await axios(`/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&units=${'metric'}&appid=${API_KEY}&lang=ru`)
    return weatherData
  }
}