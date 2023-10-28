import React, { useEffect, useState } from 'react'
import { IGlobalLayoutProps } from './_app'
import { NextPage, GetStaticProps } from 'next'
import { prepareIntroPageSeo } from '../utils/seo/intro'
import CoreLink from '../components/core/CoreLink'
import { getWorkPageUrl } from '../utils/work'
import { BriefcaseIcon } from '@heroicons/react/outline'

interface IProps extends IGlobalLayoutProps {
  pageData: {}
}

const Intro: NextPage<IProps> = props => {
  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl font-bold font-primary-bold">Detailed introduction</div>

        <p className="mt-6">
          So you might have already noticed my love for building digital products, but this isn't something I was bugged
          very recently. Infact, I've been learning technology since the age of 12.
        </p>

        <p className="mt-5">
          A college dropout, born and raised in{' '}
          <CoreLink
            url="https://en.wikipedia.org/wiki/Dharavi"
            className="border-dashed border-b border-funBlue text-funBlue"
            isExternal>
            Dharavi
          </CoreLink>{' '}
          (Asia's largest slum). Started my professional jouney by working at a small-scale Jeans factory for almost a
          year when I was 17/18. After some stability, I began working on full-stack web applications for learning.
          Developed various projects with different tech stacks and open-sourced them all. Continued doing this for more
          than 2 years.
        </p>

        <p className="mt-5">
          Got my first job offer as a front-end developer from People Interactive (shaadi.com) when I was 19. At the
          moment, I'm a member of Kognitos' technical staff where we're building an OS for rapid automation and innovation fueled by AI and a Natural Language interpreter. Learn
          more about my work experience in detail{' '}
          <CoreLink
            url={getWorkPageUrl()}
            className="font-medium font-primary-medium border-dashed border-b border-funBlue text-funBlue inline-flex items-center">
            here <BriefcaseIcon className="w-5 ml-1" />
          </CoreLink>
          .
        </p>

        <p className="mt-5">My other interests include literature, history and philosophy.</p>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  return {
    props: {
      pageData: null,
      seo: prepareIntroPageSeo(),
      layoutData: {},
    },
  }
}

export default Intro
