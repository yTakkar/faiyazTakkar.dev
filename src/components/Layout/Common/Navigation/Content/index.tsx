import type { Links, Pagelink, SocialLink as SocialLinkInterface } from '@/types'
import { useRouter } from 'next/router'
import { FC } from 'react'
import PageLink from './PageLink'
import SocialLink from './SocialLink'
import ThemeSwitcher from './ThemeSwitcher'

interface IContent {
  links: Links
}

const Content: FC<IContent> = ({ links }) => {
  const { asPath } = useRouter()

  return (
    <>
      <ul className="flex w-full flex-col gap-2">
        {links.pageLinks.map((link: Pagelink, index: number) => {
          return (
            <li key={index}>
              <PageLink link={link} isPath={asPath === link.url} />
            </li>
          )
        })}
      </ul>

      <p className="mt-6 mb-2 w-full pl-4 text-primary-2">Let's connect</p>
      <ul className="flex w-full flex-col gap-2">
        {links.socialLinks.map((link: SocialLinkInterface, index: number) => {
          return (
            <li key={index}>
              <SocialLink link={link} />
            </li>
          )
        })}
      </ul>

      <div className="mt-8 flex w-full items-center justify-center lg:justify-start">
        <ThemeSwitcher />
      </div>
    </>
  )
}

export default Content
