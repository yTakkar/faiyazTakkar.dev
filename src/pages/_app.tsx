import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Root } from '@/components/Layout/Containers'
import Script from 'next/script'
import { useEffect } from 'react'
import { GAEvent, GA_TRACKING_ID, useAnalytics } from '@/lib/gtag'

export function reportWebVitals({ id, name, label, value }: any) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js

  // https://nextjs.org/docs/advanced-features/measuring-performance#custom-metrics

  console.log({ id, name, label, value })

  GAEvent({
    action: name,
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
  })
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  useAnalytics()

  return (
    <>
      <Script
        id="ga-analytics-load"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script id="ga-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          
          `}
      </Script>

      <Root>
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default MyApp
