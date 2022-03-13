import appConfig from 'config'
import Aside from './Aside'
import MobileMenu from './MobileMenu'

import { AnnotationIcon, BriefcaseIcon, HomeIcon } from '@heroicons/react/outline'
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, MailIcon } from '@/components/Icons'
import type { Links as ILink } from '@/types'

const Links: ILink = {
  pageLinks: [
    {
      label: 'Home',
      icon: <HomeIcon className="h-6 w-6" />,
      url: '/',
      analyticsEvent: 'nav_home',
    },
    {
      label: 'Detailed Intro',
      icon: <AnnotationIcon className="h-6 w-6" />,
      url: '/intro',
      analyticsEvent: 'nav_intro',
    },
    {
      label: 'Work',
      icon: <BriefcaseIcon className="h-6 w-6" />,
      url: '/work',
      analyticsEvent: 'nav_work',
    },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      icon: <GithubIcon className="h-5 w-5" />,
      isExternal: true,
      url: appConfig.global.socialProfiles.gitHub,
      analyticsEvent: 'nav_social_github',
    },
    {
      label: 'Twitter',
      icon: <TwitterIcon className="h-5 w-5" />,
      isExternal: true,
      url: appConfig.global.socialProfiles.twitter,
      analyticsEvent: 'nav_social_twitter',
    },
    {
      label: 'LinkedIn',
      icon: <LinkedinIcon className="h-5 w-5" />,
      isExternal: true,
      url: appConfig.global.socialProfiles.linkedIn,
      analyticsEvent: 'nav_social_linkedin',
    },
    {
      label: 'Instagram',
      icon: <InstagramIcon className="h-5 w-5" />,
      isExternal: true,
      url: appConfig.global.socialProfiles.instagram,
      analyticsEvent: 'nav_social_instagram',
    },
    {
      label: 'Email',
      icon: <MailIcon className="h-5 w-5" />,
      isExternal: false,
      url: `mailto:${appConfig.global.emailAddress}`,
      analyticsEvent: 'nav_social_mail',
    },
  ],
}

const Navigation = () => {
  return (
    <>
      <Aside links={Links} />
      <MobileMenu links={Links} />
    </>
  )
}

export default Navigation
