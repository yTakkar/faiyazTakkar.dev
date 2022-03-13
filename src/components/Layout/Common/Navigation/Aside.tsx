import { FC } from 'react'
import Content from './Content'

interface IAside {
  links: any
}

const Aside: FC<IAside> = ({ links }) => {
  return (
    <aside className="fixed z-50 hidden h-screen w-64 flex-col items-end border-r border-border-primary bg-primary px-4 pt-6 pb-10 lg:flex">
      <Content links={links} />
    </aside>
  )
}

export default Aside
