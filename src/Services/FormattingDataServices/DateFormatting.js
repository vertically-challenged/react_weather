const monthList = {
  0: 'Января',
  1: 'Февраля',
  2: 'Марта',
  3: 'Апреля',
  4: 'Мая',
  5: 'Июня',
  6: 'Июля',
  7: 'Августа',
  8: 'Сентября',
  9: 'Октября',
  10: 'Ноября',
  11: 'Декабря'
}

export function DateFormatting (dt) {
  const date = new Date(dt*1000)
  const Hours = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`
  const Minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`
  return Hours + ':' + Minutes
}

export function DateFormattingFullDate (dt) {
  const date = new Date(dt*1000)
  console.log(date)
  return {
    day: date.getDate(),
    mouth: monthList[date.getMonth()]
  }
}