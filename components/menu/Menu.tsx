import {
  AnnotationIcon,
  BriefcaseIcon,
  ChipIcon,
  ExternalLinkIcon,
  HomeIcon,
  PencilAltIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import appConfig from '../../config/appConfig'
import { SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import { getHomePageUrl } from '../../utils/home'
import { getWorkPageUrl } from '../../utils/work'
import CoreActiveLink from '../core/CoreActiveLink'
import CoreImage from '../core/CoreImage'
import CoreLink from '../core/CoreLink'
import { DesktopView, MobileView } from '../ResponsiveViews'
import classnames from 'classnames'
import { getIntroPageUrl } from '../../utils/intro'
import { getSideProjectsPageUrl } from '../../utils/side-projects'
import { AnalyticsEventType } from '../../constants/analytics'
import { getPostsPageUrl } from '../../utils/post'

const PAGE_LINKS = [
  {
    label: 'Home',
    icon: HomeIcon,
    url: getHomePageUrl(),
    analyticsEvent: AnalyticsEventType.NAV_HOME,
  },
  {
    label: 'Detailed Intro',
    icon: AnnotationIcon,
    url: getIntroPageUrl(),
    analyticsEvent: AnalyticsEventType.NAV_INTRO,
  },
  {
    label: 'Work',
    icon: BriefcaseIcon,
    url: getWorkPageUrl(),
    analyticsEvent: AnalyticsEventType.NAV_WORK,
  },
  // {
  //   label: 'Posts',
  //   icon: PencilAltIcon,
  //   url: getPostsPageUrl(),
  //   analyticsEvent: AnalyticsEventType.NAV_BLOGS,
  // },
  {
    label: 'Side Projects',
    icon: ChipIcon,
    url: getSideProjectsPageUrl(),
    analyticsEvent: AnalyticsEventType.NAV_SIDE_PROJECTS,
  },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    iconUrl: SOCIAL_ICONS_SRC_MAP.LINKEDIN,
    isExternal: true,
    url: appConfig.global.socialProfiles.linkedIn,
    analyticsEvent: AnalyticsEventType.NAV_SOCIAL_LINKEDIN,
  },
  {
    label: 'X',
    iconUrl: SOCIAL_ICONS_SRC_MAP.TWITTER,
    isExternal: true,
    url: appConfig.global.socialProfiles.twitter,
    analyticsEvent: AnalyticsEventType.NAV_SOCIAL_TWITTER,
  },
  {
    label: 'GitHub',
    iconUrl: SOCIAL_ICONS_SRC_MAP.GITHUB,
    isExternal: true,
    url: appConfig.global.socialProfiles.gitHub,
    analyticsEvent: AnalyticsEventType.NAV_SOCIAL_GITHUB,
  },
  {
    label: 'Instagram',
    iconUrl: SOCIAL_ICONS_SRC_MAP.INSTAGRAM,
    isExternal: true,
    url: appConfig.global.socialProfiles.instagram,
    analyticsEvent: AnalyticsEventType.NAV_SOCIAL_INSTAGRAM,
  },
  {
    label: 'Email',
    iconUrl: SOCIAL_ICONS_SRC_MAP.MAIL,
    isExternal: false,
    url: `mailto:${appConfig.global.emailAddress}`,
    analyticsEvent: AnalyticsEventType.NAV_SOCIAL_MAIL,
  },
]

interface IMenuProps {}

const MenuContent: React.FC<IMenuProps> = () => {
  const { asPath } = useRouter()
  const firstPath = asPath.split('/')[1]

  return (
    <div>
      <div>
        {PAGE_LINKS.map(pageLink => {
          const defaultIcon = () => null
          const Icon = pageLink.icon || defaultIcon

          return (
            <CoreLink
              key={pageLink.label}
              url={pageLink.url}
              className={classnames(
                'flex items-center transition-all rounded-lg w-full px-4 py-2 mb-1',
                `/${firstPath}` === pageLink.url ? 'bg-primary hover:bg-primary text-white' : 'hover:bg-gray100'
              )}
              onClick={() => {
                ga('event', pageLink.analyticsEvent)
              }}>
              <Icon className="w-6 h-6 mr-2" />
              <span>{pageLink.label}</span>
            </CoreLink>
          )
        })}
      </div>

      <div className="px-4 lg:absolute bottom-3 lg:w-[90%]">
        <div className="mt-6 text-gray600 mb-3">Let's connect</div>
        <div className="flex items-center justify-between mb-4">
          {SOCIAL_LINKS.map(socialLink => {
            return (
              <CoreActiveLink
                title={socialLink.label}
                key={socialLink.label}
                url={socialLink.url}
                // className="flex items-center hover:bg-gray100 transition-all rounded-lg w-full"
                isExternal={socialLink.isExternal}
                onClick={() => {
                  ga('event', socialLink.analyticsEvent)
                }}>
                <CoreImage className="w-6 lg:w-5" alt={socialLink.label} url={socialLink.iconUrl} />
                {/* <span>{socialLink.label}</span> */}
                {/* {socialLink.isExternal ? <ExternalLinkIcon className="w-4 h-4 text-gray500 ml-auto" /> : null} */}
              </CoreActiveLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface IMenuMobileProps extends IMenuProps {}

const MenuMobile: React.FC<IMenuMobileProps> = () => {
  const [showMenu, toggleMenu] = useState(false)

  return (
    <nav>
      {!showMenu ? (
        <div className="fixed bottom-0 left-0 z-10 block w-full p-2" onClick={() => toggleMenu(true)}>
          <div className="border border-gray400 rounded-lg text-black bg-white/70 backdrop-filter backdrop-blur py-3 text-center cursor-pointer font-medium ">
            Menu
          </div>
        </div>
      ) : null}

      {showMenu ? (
        <div
          className="fixed bottom-0 left-0 right-0 z-10 p-2 m-2 bg-white/70 backdrop-filter backdrop-blur border border-gray400 rounded-lg"
          onClick={() => toggleMenu(false)}>
          <div className="py-3 text-center cursor-pointer text-black font-medium " onClick={() => toggleMenu(false)}>
            Close
          </div>
          <MenuContent />
        </div>
      ) : (
        false
      )}
    </nav>
  )
}

interface IMenuDesktopProps extends IMenuProps {}

const MenuDesktop: React.FC<IMenuDesktopProps> = props => {
  return (
    <aside className="bg-white w-[16rem] border-r border-gray200 h-screen pt-6 pb-10 flex flex-col px-4 fixed">
      <MenuContent />
    </aside>
  )
}

const Menu: React.FC<IMenuProps> = props => {
  return (
    <div>
      <MobileView useCSS>
        <MenuMobile {...props} />
      </MobileView>
      <DesktopView useCSS>
        <MenuDesktop {...props} />
      </DesktopView>
    </div>
  )
}

export default Menu
