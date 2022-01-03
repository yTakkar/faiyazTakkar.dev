import React, { useContext, useEffect, useRef } from 'react'
import { getHomePageUrl } from '../../utils/home'
import { APP_LOGO, SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import appConfig from '../../config/appConfig'
import CoreLink from '../core/CoreLink'
import CoreImage from '../core/CoreImage'
import { GlobeAltIcon, MailOpenIcon } from '@heroicons/react/outline'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = props => {
  return (
    <div>
      <nav className="top-nav lg:flex fixed top-0 left-0 right-0 bg-white border-b border-periwinkleGray px-3 lg:px-4 py-2 lg:py-3 z-10">
        <div className="container mx-auto">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center w-9/12 md:w-10/12 lg:w-auto">
              <CoreLink url={getHomePageUrl()} className="mr-3">
                <CoreImage url={APP_LOGO.DEFAULT} alt="App Logo" className="h-12" />
              </CoreLink>
              <CoreLink url={getHomePageUrl()} className="font-medium font-primary-medium text-primaryTextBold text-lg">
                {appConfig.global.app.name}
              </CoreLink>
            </div>

            <CoreLink
              url={appConfig.global.demoWebsiteUrl}
              isExternal
              className="flex font-medium font-primary-medium text-sm items-center group relative"
              onClick={() => {
                ga('event', 'icon-demo')
              }}>
              <GlobeAltIcon className="w-6 mr-1" />
            </CoreLink>
          </div>
        </div>
      </nav>

      <div className="h-20" />
    </div>
  )
}

export default Header