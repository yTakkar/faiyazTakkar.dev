import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string | any) => {
  try {
    if (typeof window !== 'undefined') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
  } catch (error) {}
}

interface GAEvent {
  action?: any
  category: any
  label: any
  value: any
  [x: string]: any
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const GAEvent = ({ action = '', category, label, value, ...add }: GAEvent) => {
  try {
    if (typeof window !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...add,
      })
    }
  } catch (error) {}
}

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string | any) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
