import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareWorkPageSeo } from '../utils/seo/work'
import workConfig from '../config/workConfig'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreLink from '../components/core/CoreLink'
import { ExternalLinkIcon } from '@heroicons/react/outline'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Work: NextPage<IProps> = props => {
  const workExperienceList = workConfig.list

  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl lg:text-3xl font-bold text-typo-title">My work experience!</div>

        <div className="mt-2">
          Learn more about my professional experience on{' '}
          <CoreLink
            url={appConfig.global.socialProfiles.linkedIn}
            isExternal
            className="font-medium border-dashed border-b border-funBlue text-funBlue inline-flex items-center">
            LinkedIn <ExternalLinkIcon className="w-4 ml-1" />
          </CoreLink>{' '}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:gap-y-4">
          {workExperienceList.map((workExperience, index) => {
            return (
              <div key={index} className="flex items-start py-4">
                <div className="w-14 h-14 min-w-14 min-h-14 mr-3 relative top-[6px]">
                  <CoreImage
                    url={workExperience.company.logo}
                    alt={`${appConfig.global.fullName}'s work experience at ${workExperience.company.name}`}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">{workExperience.role}</div>
                  <div className="text-sm">
                    {workExperience.company.name} - {workExperience.location}
                  </div>
                  <div className="text-sm text-gray700 mt-1">
                    {workExperience.experience.from} - {workExperience.experience.to}
                    {workExperience.experience.total ? ` • ${workExperience.experience.total}` : ''}
                  </div>

                  <div className="mt-2 text-sm">
                    {/* <div className="font-medium font-primary-medium">Highlights:</div> */}
                    <ul className="list-outside">
                      {workExperience.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-1">
                    {workExperience.company.urls.map((url, index) => (
                      <CoreLink
                        key={index}
                        url={url.href}
                        isExternal
                        className="text-sm border-dashed border-b border-funBlue text-funBlue mr-2">
                        {url.label}
                      </CoreLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareWorkPageSeo(),
      layoutData: {},
    },
  }
}

export default Work
