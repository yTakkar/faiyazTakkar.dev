import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { IPostDetail } from '../../interface/post'
import { getPostPageUrl, getPostsPageUrl } from '../post'
import { COMMON_KEYWORDS } from './constants'

// http://localhost:3005/posts
export const preparePostsPageSeo = (): IAppSeoProps => {
  return {
    title: `Posts - ${appConfig.global.fullName}`,
    description: `Check out my posts on various topics.`,
    canonical: getPostsPageUrl(),
    keywords: [...COMMON_KEYWORDS],
  }
}

// http://localhost:3005/posts/1
export const preparePostPageSeo = (postDetail: IPostDetail): IAppSeoProps => {
  return {
    title: `${postDetail.title} - ${appConfig.global.fullName}`,
    description: postDetail.description,
    canonical: getPostPageUrl(postDetail.id),
    keywords: [...COMMON_KEYWORDS, ...postDetail.keywords],
  }
}
