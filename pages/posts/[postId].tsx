import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { IGlobalLayoutProps } from '../_app'
import { listPostIds, getPostDetailById } from '../../lib/post'
import { IPostDetail } from '../../interface/post'
import { preparePostsPageSeo } from '../../utils/seo/post'
import MarkdownRenderer from '../../components/MarkdownRenderer'
import { getRelativeTime } from '../../utils/date'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { routerPageBack } from '../../utils/common'
import BackButton from '../../components/BackButton'

interface IProps extends IGlobalLayoutProps {
  pageData: {
    postDetail: IPostDetail
  }
}

const Posts: NextPage<IProps> = props => {
  const {
    pageData: { postDetail },
  } = props

  return (
    <div className="pt-5 lg:pt-8 lg:ml-72">
      <div className="px-5 md:px-10 pb-20">
        <BackButton />

        <div className="text-xl lg:text-xl font-bold text-typo-title">{postDetail.title}</div>
        <div className="text-sm text-typo-paragraphLight">{getRelativeTime(postDetail.date)}</div>

        <MarkdownRenderer>{postDetail.content}</MarkdownRenderer>
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
      seo: preparePostsPageSeo(),
      layoutData: {},
    },
  }
}

export default Posts
