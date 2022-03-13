import { Seo } from '@/components'
import { BriefcaseIcon } from '@heroicons/react/outline'
import appConfig from 'config'
import dayjs from 'dayjs'
import type { NextPage } from 'next'
import Link from 'next/link'

const Intro: NextPage = () => {
  const age = dayjs().diff(dayjs(appConfig.global.birthDate), 'year')

  return (
    <>
      <Seo title="Detailed introduction - Faiyaz Shaikh" description="My detailed introduction." />

      <div className="content">
        <h1 className="text-2xl font-bold">Detailed introduction</h1>

        <h2 className="mt-6">
          So you might have already learnt about my love for building digital products, but this isn't a newly-found
          love. I've been learning technology since the age of 12. I'm {age} now.
        </h2>

        <p className="mt-5">
          Born and raised in{' '}
          <a href="https://en.wikipedia.org/wiki/Dharavi" className="link" target="_blank" rel="noopener noreferrer">
            Dharavi
          </a>{' '}
          (Asia's largest slum). Started my professional jouney by working at a small-scale Jeans factory for almost a
          year when I was 17/18.
        </p>

        <p className="mt-5">
          After some stability, I began working on full-stack web applications for learning. Developed various projects
          with different tech stack and open-sourced them all. Did this for more than 2 years.
        </p>

        <p className="mt-5">
          Got my first job offer as a front-end developer from People Interactive when I was 19. Job role was to build
          features end-to-end for users. Learn more about my work experience{' '}
          <Link href="/intro">
            <a className="link" target="_blank" rel="noopener noreferrer">
              &nbsp;here <BriefcaseIcon className="ml-1 inline-block w-4" />
            </a>
          </Link>
          .
        </p>

        <p className="mt-5">My other interests include literature, travelling, economics and history.</p>
      </div>
    </>
  )
}

export default Intro
