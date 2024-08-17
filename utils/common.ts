import { NextRouter } from 'next/router'
import { getHomePageUrl } from './home'

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const matchMinMaxMediaQuery = (min: number, max: number) => {
  return window.matchMedia(`(min-width: ${min}px) and (max-width: ${max}px)`).matches
}

export const routerPageBack = (router: NextRouter, backUrl?: string) => {
  if (window.history.length > 1) {
    if (backUrl) {
      router.push(backUrl)
    } else {
      router.back()
    }
  } else {
    router.push(getHomePageUrl())
  }
}

export const copyToClipboard = (secretInfo: string) => {
  const body = document.getElementsByTagName('body')[0]
  const tempInput = document.createElement('INPUT')
  body.appendChild(tempInput)
  tempInput.setAttribute('value', secretInfo)
  // @ts-ignore
  tempInput.select()
  document.execCommand('copy')
  body.removeChild(tempInput)
}
