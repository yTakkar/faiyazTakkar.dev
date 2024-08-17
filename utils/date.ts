import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export const getRelativeTime = (time: string | number) => {
  // @ts-ignore
  return dayjs(time).fromNow()
}

export const getFormattedPostDate = (date: string) => {
  const day = date.split('-')[0]
  const month = date.split('-')[1]
  const year = date.split('-')[2]
  const newDate = new Date(`${year}-${month}-${day}`)
  return dayjs(newDate).format('ll')
}
