import { GAEvent } from '@/lib/gtag'
import type { SocialLink as SocialLinkInterface } from '@/types'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { FC } from 'react'

interface ISocialLink {
  link: SocialLinkInterface
}

const SocialLink: FC<ISocialLink> = ({ link }) => {
  const { label, icon, url, isExternal, analyticsEvent } = link

  return (
    <Link href={url}>
      <a
        className="flex w-full items-center rounded-lg px-4 py-2 transition-all hover:bg-primary-2"
        onClick={() =>
          GAEvent({
            category: 'links_record',
            label: 'event',
            value: analyticsEvent,
          })
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex h-full w-full items-center justify-start">
          <span className="mr-2">{icon}</span>

          {label}

          {isExternal && (
            <ExternalLinkIcon className="absolute top-2/4 right-0 h-4 w-4 -translate-y-2/4 text-primary-2/50" />
          )}
        </div>
      </a>
    </Link>
  )
}

export default SocialLink
