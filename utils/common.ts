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
