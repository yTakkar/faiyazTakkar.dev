import { Seo, WorkDetail } from '@/components'
import { experiences } from '@/constants'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import appConfig from 'config'
import type { NextPage } from 'next'

const Work: NextPage = () => {
  return (
    <>
      <Seo title="Work - Faiyaz Shaikh" description="My professional background." />

      <div className="content">
        <h1 className="text-2xl font-bold text-primary lg:text-3xl">My work experience!</h1>

        <h2 className="mt-2">
          Learn more about my professional experience on{' '}
          <a href={appConfig.global.socialProfiles.linkedIn} className="link" target="_blank" rel="noopener noreferrer">
            LinkedIn <ExternalLinkIcon className="ml-1 inline-block w-4" />
          </a>{' '}
        </h2>

        <ul className="mt-6 flex flex-col lg:gap-y-4">
          {experiences.map((workExperience: any, index: number) => {
            return <WorkDetail key={index} workExperience={workExperience} />
          })}
        </ul>
      </div>
    </>
  )
}

export default Work
