import React from 'react'
import { IPostInfo } from '../../interface/post'
import CoreLink from '../core/CoreLink'
import { getPostPageUrl } from '../../utils/post'
import { getFormattedDate } from '../../utils/date'
import PostTypeTag from './PostTypeTag'

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
        <div className="text-sm text-typo-paragraphLight mt-2 flex items-center">
          {getFormattedDate(postInfo.date)} <PostTypeTag type={postInfo.type} />
        </div>
      </CoreLink>
    </div>
  )
}

export default PostInfo
