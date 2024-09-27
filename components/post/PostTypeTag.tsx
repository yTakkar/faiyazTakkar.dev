import React from 'react'
import { PostType } from '../../interface/post'

export const POST_TYPE_LABEL_MAP: Record<PostType, string> = {
  [PostType.PHILOSOPHY]: 'Philosophy',
  [PostType.PAST_MEMORY]: 'Past Memory',
  [PostType.POETRY]: 'Poetry',
  [PostType.EXPERIENCE]: 'Experience',
  [PostType.QUOTE]: 'Quote',
}

// in hex
export const POST_TYPE_BG_COLOR_MAP: Record<PostType, string> = {
  [PostType.PHILOSOPHY]: '#00BCD4', // Cyan
  [PostType.PAST_MEMORY]: '#FF9800', // Orange
  [PostType.POETRY]: '#FF4081', // Pink
  [PostType.EXPERIENCE]: '#9C27B0', // Purple
  [PostType.QUOTE]: '#FF5722', // Deep Orange
}

interface IPostTypeTagProps {
  type: PostType
}

function PostTypeTag(props: IPostTypeTagProps) {
  const { type } = props

  return (
    <span
      className="ml-2 text-xxs px-[6px] py-[2px] rounded text-white"
      style={{
        backgroundColor: POST_TYPE_BG_COLOR_MAP[type],
      }}>
      {POST_TYPE_LABEL_MAP[type]}
    </span>
  )
}

export default PostTypeTag
