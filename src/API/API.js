import Axios from 'axios'
import { API_KEY, defaultCity, defaultCountry } from './config'

const axios = Axios.create({
  baseURL: 'https://api.openweathermap.org/',
})

class API {
  static getGeocode = async (cityName = defaultCity, countryName = defaultCountry, limit = 999) => {
    try {
      const geocode = await axios(`/geo/1.0/direct?q=${cityName},${countryName}&limit=${limit}&appid=${API_KEY}`)
      return geocode.data[0]
    } catch (error) {
      throw new Error(`API Error getGeocode: ${error}`)
    }
  }

  static getWeatherData = async (geocode) => {
    try {
      const weatherData = await axios(`/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&units=${'metric'}&appid=${API_KEY}&lang=ru`)
      return weatherData
    } catch (error) {
      throw new Error(`API Error getWeatherData: ${error}`)
    }
  }
}

export default API
