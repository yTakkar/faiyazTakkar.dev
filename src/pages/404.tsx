import { Seo } from '@/components'
import { Custom404Icon } from '@/components/Icons'
import type { NextPage } from 'next'

const Custom404: NextPage = () => {
  return (
    <>
      <Seo />

      <div className="flex h-full flex-col items-center justify-start">
        <Custom404Icon className="max-w-md" />

        <h1 className="mt-5 text-center text-lg lg:text-xl">We couldn't find the page you were looking for.</h1>
      </div>
    </>
  )
}

export default Custom404
