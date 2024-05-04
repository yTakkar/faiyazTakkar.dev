import React from 'react'
import { IPostInfo } from '../../interface/post'
import CoreLink from '../core/CoreLink'
import { getPostPageUrl } from '../../utils/post'
import { getRelativeTime } from '../../utils/date'

interface IPostInfoProps {
  postInfo: IPostInfo
}

function PostInfo(props: IPostInfoProps) {
  const { postInfo } = props

  return (
    <div className="mb-6">
      <CoreLink url={getPostPageUrl(postInfo.id)}>
        <div className="font-bold text-lg">{postInfo.title}</div>
        <div className="text-sm mt-1 text-typo-paragraphLight">{postInfo.description}</div>
        <div className="text-xs text-typo-paragraphLight mt-1">{getRelativeTime(postInfo.date)}</div>
      </CoreLink>
    </div>
  )
}

export default PostInfo
