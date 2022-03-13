import { GAEvent } from '@/lib/gtag'
import { mobileMenuState } from '@/state'
import type { Pagelink as PagelinkInterface } from '@/types'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { FC } from 'react'

interface IPageLink {
  link: PagelinkInterface
  isPath: boolean
}

const PageLink: FC<IPageLink> = ({ link, isPath }) => {
  const { label, icon, url, analyticsEvent } = link
  const [open, setOpen] = useAtom<boolean>(mobileMenuState) as any

  return (
    <Link href={url}>
      <a
        className={clsx(
          'flex w-full items-center rounded-lg px-4 py-2 transition-all',
          isPath ? 'bg-secondary text-secondary' : 'hover:bg-primary-2'
        )}
        onClick={() => {
          setOpen(false)
          GAEvent({
            category: 'links_record',
            label: 'event',
            value: analyticsEvent,
          })
        }}
      >
        <div className="flex h-full w-full items-center justify-start">
          <span className="mr-2">{icon}</span>

          {label}
        </div>
      </a>
    </Link>
  )
}

export default PageLink
