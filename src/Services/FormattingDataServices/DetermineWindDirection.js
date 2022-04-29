function DetermineWindDirection(windDeg) {
  if (windDeg >= 338 && windDeg <= 360) return 'C'
  if (windDeg >= 0 && windDeg < 23) return 'С'
  if (windDeg >= 23 && windDeg < 68) return 'СВ'
  if (windDeg >= 68 && windDeg < 113) return 'В'
  if (windDeg >= 113 && windDeg < 158) return 'ЮВ'
  if (windDeg >= 158 && windDeg < 203) return 'Ю'
  if (windDeg >= 203 && windDeg < 248) return 'ЮЗ'
  if (windDeg >= 248 && windDeg < 293) return 'З'
  if (windDeg >= 293 && windDeg < 338) return 'СЗ'
  return 'Ошибка'
}

export default DetermineWindDirection
