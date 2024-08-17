import { IAppSeoProps } from '../../components/seo/AppSeo'
import appConfig from '../../config/appConfig'
import { getWorkPageUrl } from '../work'
import { COMMON_KEYWORDS } from './constants'

// http://localhost:3005/work
export const prepareWorkPageSeo = (): IAppSeoProps => {
  return {
    title: `Work - ${appConfig.global.fullName}`,
    description: `My professional background.`,
    canonical: `${appConfig.global.baseUrl}${getWorkPageUrl()}`,
    keywords: [...COMMON_KEYWORDS],
  }
}
