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
        <div className="text-2xl font-bold text-typo-title">Detailed introduction</div>

        <p className="mt-5">
          A college dropout, born and raised in{' '}
          <CoreLink
            url="https://en.wikipedia.org/wiki/Dharavi"
            className="border-dashed border-b border-funBlue text-funBlue"
            isExternal>
            Dharavi
          </CoreLink>{' '}
          (India's largest slum). Intested in tech, literature and entrepreneurship since the age of 12. Started my
          professional jouney by working at a small-scale Jeans factory when I was 17/18.
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
