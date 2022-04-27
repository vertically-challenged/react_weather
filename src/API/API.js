import Axios from 'axios'
import { API_KEY, defaultCity, defaultCountry } from './config'

const axios = Axios.create({
  baseURL: 'https://api.openweathermap.org/'
})

export class API {
  getGeocode = async (cityName = defaultCity, countryName = defaultCountry, limit = 999) => {
    const geocode = await axios(`/geo/1.0/direct?q=${cityName},${countryName}&limit=${limit}&appid=${API_KEY}`)
    return geocode.data
  }
}