import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { IGlobalLayoutProps } from '../_app'
import { listPostIds, getPostDetailById } from '../../lib/post'
import { IPostDetail } from '../../interface/post'
import { preparePostPageSeo } from '../../utils/seo/post'
import MarkdownRenderer from '../../components/MarkdownRenderer'
import { getFormattedDate, getRelativeTime } from '../../utils/date'
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { copyToClipboard, routerPageBack } from '../../utils/common'
import useNativeShare from '../../hooks/useNativeShare'
import appConfig from '../../config/appConfig'
import { getPostPageUrl } from '../../utils/post'
import { toastSuccess } from '../../components/Toaster'
import CoreLink from '../../components/core/CoreLink'
import CoreImage from '../../components/core/CoreImage'
import { SOCIAL_ICONS_SRC_MAP } from '../../constants/constants'
import PostTypeTag from '../../components/post/PostTypeTag'

interface IProps extends IGlobalLayoutProps {
  pageData: {
    postDetail: IPostDetail
  }
}

const Posts: NextPage<IProps> = props => {
  const {
    pageData: { postDetail },
  } = props

  const router = useRouter()

  const shareUrl = `${appConfig.global.baseUrl}${getPostPageUrl(postDetail.id)}`
  const shareText = preparePostPageSeo(postDetail).title

  const handleURLCopy = () => {
    copyToClipboard(shareUrl)
    toastSuccess('Link copied to clipboard!')
  }

  const { shouldShowNativeShare, handleNativeShare } = useNativeShare({
    onShareFail: handleURLCopy,
  })

  const handleBackIconClick = () => {
    routerPageBack(router)
  }

  const renderShareIcon = () => {
    return (
      <div className="cursor-pointer">
        {shouldShowNativeShare ? (
          <ShareIcon
            className="w-[18px] md:w-5"
            onClick={() => {
              handleNativeShare({
                text: shareText,
                url: shareUrl,
              })
            }}
          />
        ) : (
          <ShareIcon
            className="w-[18px] md:w-5"
            onClick={() => {
              handleURLCopy()
            }}
          />
        )}
      </div>
    )
  }

  return (
    <div className="pt-5 lg:pt-8 lg:ml-72 min-w-full">
      <div className="px-5 md:px-10 pb-20">
        <div className="flex items-center justify-between mb-4">
          <div className="hover:underline cursor-pointer text-funBlue flex items-center" onClick={handleBackIconClick}>
            <ArrowLeftIcon className="h-4 w-[18px] md:w-5 mr-2" />
            <span className="text-sm">All Posts</span>
          </div>
          <div>{renderShareIcon()}</div>
        </div>

        <div className="text-xl lg:text-xl font-bold text-typo-title">{postDetail.title}</div>

        <div className="text-sm text-typo-paragraphLight flex items-center">
          {getFormattedDate(postDetail.date)} <PostTypeTag type={postDetail.type} />
        </div>

        <div className="border-b border-gray200 my-4" />

        <MarkdownRenderer>{postDetail.content}</MarkdownRenderer>

        <div className="mt-10 flex items-center text-typo-paragraphLight">
          Follow{' '}
          <CoreLink
            url={appConfig.posts.instagramUrl}
            isExternal
            title={`${appConfig.posts.instagramUsername}`}
            className="flex items-center ml-1 border-b border-b-typo-paragraphLight text-typo-paragraphLight">
            @{appConfig.posts.instagramUsername}
            <CoreImage
              url={SOCIAL_ICONS_SRC_MAP.INSTAGRAM_OFFICIAL}
              alt={`${appConfig.posts.instagramUsername}`}
              className={'w-4 ml-1'}
            />
          </CoreLink>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = listPostIds()
  const paths: any = postIds.map(postId => ({
    params: {
      postId,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<IProps> = async context => {
  const params = context.params as any
  const postDetail = getPostDetailById(params.postId)

  return {
    props: {
      pageData: {
        postDetail,
      },
      seo: preparePostPageSeo(postDetail),
      layoutData: {},
    },
  }
}

export default Posts
