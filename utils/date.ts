import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export const getRelativeTime = (time: string | number) => {
  // @ts-ignore
  return dayjs(time).fromNow()
}

export const getFormattedDate = (time: string | number) => {
  return dayjs(new Date(time)).format('ll')
}
