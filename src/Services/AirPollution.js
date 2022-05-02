const aqiIndex = {
  1: 'Хорошо',
  2: 'Удовлетворительно',
  3: 'Не очень плохо',
  4: 'Плохо',
  5: 'Крайне плохо',
}

function getAirPollution(airPollutionData) {
  // console.log('airPollutionData', airPollutionData)
  return {
    aqi: aqiIndex[airPollutionData.data.list[0].main.aqi],
    ...airPollutionData.data.list[0].components,
  }
}

export default getAirPollution
