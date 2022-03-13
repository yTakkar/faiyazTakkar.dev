import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import Content from './Content'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import { mobileMenuState } from '@/state'

interface IMobileMenu {
  links: any
}

const MobileMenu: FC<IMobileMenu> = ({ links }) => {
  const [open, setOpen] = useAtom<boolean>(mobileMenuState) as any

  return (
    <div className="fixed inset-x-0 bottom-2 z-50 w-full p-2 lg:hidden">
      <div
        className={clsx(
          'mx-auto h-full w-full rounded-lg border border-border-primary bg-primary/70 text-center backdrop-blur-md backdrop-filter',
          open ? 'p-2 pt-5' : 'p-3'
        )}
      >
        <button
          className={clsx('select-none font-bold', {
            ['mb-3']: open,
          })}
          onClick={() => setOpen((bool: boolean) => !bool)}
        >
          {!open ? 'Menu' : 'Close'}
        </button>

        {open && (
          <motion.div
            style={{ overflow: 'hidden' }}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'linear', duration: 0.4 }}
          >
            <Content links={links} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

//

export default MobileMenu
