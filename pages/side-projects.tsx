import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareSideProjectsPageSeo } from '../utils/seo/side-projects'
import sideProjectsConfig from '../config/sideProjects'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreLink from '../components/core/CoreLink'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const SideProjects: NextPage<IProps> = props => {
  const sideProjectsList = sideProjectsConfig.list

  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl lg:text-3xl font-bold text-typo-title">Side Projects</div>

        <div className="mt-6 grid grid-cols-1 lg:gap-y-4">
          {sideProjectsList.map((workExperience, index) => {
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
                  <div className="font-bold text-lg">{workExperience.company.name}</div>
                  {workExperience.description && <div className="text-sm mt-1">{workExperience.description}</div>}

                  <div className="mt-2 text-sm">
                    {/* <div className="font-medium font-primary-medium">Highlights:</div> */}
                    <ul className="list-outside ml-4">
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
      seo: prepareSideProjectsPageSeo(),
      layoutData: {},
    },
  }
}

export default SideProjects
