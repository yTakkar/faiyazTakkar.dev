import { Seo } from '@/components'
import { AnnotationIcon } from '@heroicons/react/outline'
import appConfig from 'config'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Profile from 'public/images/logo.jpeg'

const Home: NextPage = () => {
  return (
    <>
      <Seo />

      <div className="profileImage">
        <Image src={Profile} objectFit="cover" alt={appConfig.global.name} />
      </div>

      <div className="content">
        <h1 className="mt-12 mb-6 text-3xl font-bold lg:text-4xl">
          <span className="text-primary-2">Hi, I'm </span>
          {appConfig.global.name} ({appConfig.global.nickName})
        </h1>

        <div className="text-lg text-primary">
          <p className="">
            A passionate <span className="font-bold">polygot programmer</span> and an{' '}
            <span className="font-medium">open-sourcer</span>. I like to build delightful digital products. I believe in
            choosing the correct tech stack for the job at hand. Looking for a job change right now!
          </p>

          <div className="mt-6 mb-8">
            <p className="">
              Learn more about me{' '}
              <Link href="/intro">
                <a className="link">
                  &nbsp;here <AnnotationIcon className="ml-1 inline-block w-4" />
                </a>
              </Link>
            </p>{' '}
          </div>
        </div>

        <h2 className="mt-6 text-lg">
          I've recently open-sourced a profitable solution named{' '}
          <a href="https://ownstore.dev" className="link" target="_blank" rel="noopener noreferrer">
            OwnStore
          </a>{' '}
          for the community. Helps businesses set up their online store instantly with a few configurable projects.
        </h2>
      </div>
    </>
  )
}

export default Home
