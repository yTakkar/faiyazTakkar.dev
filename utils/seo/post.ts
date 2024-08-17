import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { IPostDetail } from '../../interface/post'
import { getPostPageUrl, getPostsPageUrl } from '../post'
import { COMMON_KEYWORDS } from './constants'

// http://localhost:3005/posts
export const preparePostsPageSeo = (): IAppSeoProps => {
  return {
    title: `Posts - ${appConfig.global.fullName}`,
    description: `A sneak peek into Faiyaz's mind. Read his thoughts, ideas, past memories and experiences.`,
    canonical: `${appConfig.global.baseUrl}${getPostsPageUrl()}`,
    keywords: [...COMMON_KEYWORDS],
  }
}

// http://localhost:3005/posts/1
export const preparePostPageSeo = (postDetail: IPostDetail): IAppSeoProps => {
  return {
    title: `${postDetail.title} - by ${appConfig.global.fullName}`,
    description: `${postDetail.description}`,
    canonical: `${appConfig.global.baseUrl}${getPostPageUrl(postDetail.id)}`,
    keywords: [...COMMON_KEYWORDS, ...postDetail.keywords],
  }
}
