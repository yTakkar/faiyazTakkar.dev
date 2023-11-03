import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareHomePageSeo } from '../utils/seo/home'
import CoreImage from '../components/core/CoreImage'
import appConfig from '../config/appConfig'
import CoreLink from '../components/core/CoreLink'
import dayjs from 'dayjs'
import { getIntroPageUrl } from '../utils/intro'
import { AnnotationIcon } from '@heroicons/react/outline'
import { AnalyticsEventType } from '../constants/analytics'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Home: NextPage<IProps> = props => {
  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20 lg:max-w-[620px] ">
        <div>
          <CoreImage
            url="/images/author.jpg"
            alt={appConfig.global.fullName}
            className="w-full mb-10 rounded-lg max-h-[600px] shadow-2xl object-cover"
          />
        </div>

        <div>
          <h2 className="mt-12 mb-6 text-3xl lg:text-4xl font-black font-primary-bold">
            <span className="text-gray600">Hi, I'm </span>
            {appConfig.global.name}
          </h2>
        </div>

        <div className="post-content text-lg text-gray900">
          <p className="">
            A passionate <span className="font-medium font-primary-medium">polygot programmer</span> and an{' '}
            <span className="font-medium font-primary-medium">open-sourcer</span>. I like to build delightful digital
            products from ideation to launch (0 to 1). <CoreLink
              url={appConfig.global.socialProfiles.linkedIn}
              className="font-medium font-primary-medium border-dashed border-b border-funBlue text-funBlue inline-flex items-center"
              isExternal
              onClick={() => {
                ga('event', AnalyticsEventType.HOME_LINKEDIN)
              }}
              >
              Let's connect!
            </CoreLink>
          </p>

          {/* <p className="mt-6">Open to part-time freelancing opportunities.</p> */}

          <p className="mt-6">
            Learn more about me{' '}
            <CoreLink
              url={getIntroPageUrl()}
              className="font-medium font-primary-medium border-dashed border-b border-funBlue text-funBlue inline-flex items-center">
              here <AnnotationIcon className="w-5 ml-1" />
            </CoreLink>
          </p>

          {/* <p className="mt-6">
            I've recently open-sourced a profitable solution named{' '}
            <CoreLink
              url="https://ownstore.dev"
              isExternal
              className="border-dashed border-b border-funBlue text-funBlue">
              OwnStore
            </CoreLink>{' '}
            for the community. Helps businesses set up their online store instantly with a few configurable projects.
          </p> */}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareHomePageSeo(),
      layoutData: {},
    },
  }
}

export default Home
