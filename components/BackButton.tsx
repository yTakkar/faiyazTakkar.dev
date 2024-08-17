import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import { routerPageBack } from '../utils/common'

interface IBackButtonProps {}

function BackButton(props: IBackButtonProps) {
  const router = useRouter()

  const handleBackIconClick = () => {
    routerPageBack(router)
  }

  return (
    <div className="flex items-center mb-4 hover:underline cursor-pointer text-funBlue" onClick={handleBackIconClick}>
      <ArrowLeftIcon className="h-4 w-4 mr-2 text-funBlue" />
      <span className="text-sm">All Posts</span>
    </div>
  )
}

export default BackButton
