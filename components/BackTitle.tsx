import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import classnames from 'classnames'

interface IBackTitleProps {
  title: string
  className?: string
}

const BackTitle: React.FC<IBackTitleProps> = props => {
  const { title, className } = props

  const router = useRouter()

  const handleBackIconClick = () => {
    router.back()
  }

  return (
    <div className={classnames('mt-4 mb-6 flex items-center', className)}>
      <div
        className="w-6 text-mineShaft mr-3 cursor-pointer rounded-full relative transform transition-transform hover:scale-110"
        onClick={handleBackIconClick}>
        <ArrowLeftIcon className="" />
      </div>
      <div className="font-medium font-primary-medium text-mineShaft text-lg">{title}</div>
    </div>
  )
}

export default BackTitle
