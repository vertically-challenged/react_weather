import cloud from './png/cloud.png'
import clouds from './png/clouds.png'
import fog from './png/fog.png'
// import forestFire from './png/forestFire.png'
// import hail from './png/hail.png'
import hygrometer from './png/hygrometer.png'
import moon from './png/moon.png'
import partlyCloudyDay from './png/partlyCloudyDay.png'
import partlyCloudyNight from './png/partlyCloudyNight.png'
import rain from './png/rain.png'
import snow from './png/snow.png'
import Sun from './png/Sun.png'
import sunrise from './png/sunrise.png'
import sunset from './png/sunset.png'
import thermometer from './png/thermometer.png'
import thunderstorm from './png/thunderstorm.png'
import wind from './png/wind.png'
// import windsock from './png/windsock.png'
// import windy from './png/windy.png'
import sync from './png/sync.png'
import left from './png/left.png'
import right from './png/right.png'
import warning from './png/warning.png'
import uv from './png/uv.png'
import aqi from './png/aqi.png'

const weather = {
  '01d': Sun,
  '01n': moon,
  '02d': partlyCloudyDay,
  '02n': partlyCloudyNight,
  '03d': cloud,
  '03n': cloud,
  '04d': clouds,
  '04n': clouds,
  '09d': rain,
  '09n': rain,
  '10d': rain,
  '10n': rain,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '13d': snow,
  '13n': snow,
  '50d': fog,
  '50n': fog,
}

const appliances = {
  hygrometer,
  wind,
  thermometer,
}

const ui = {
  sync,
  left,
  right,
}

const other = {
  sunrise,
  sunset,
  warning,
  uv,
  aqi,
}

const iconsList = {
  weather,
  appliances,
  ui,
  other,
}

export default iconsList
