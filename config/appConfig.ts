const name = 'Faiyaz'
const nickName = 'Takkar'
const fullName = 'Faiyaz Shaikh'

const appConfig = {
  isDev: process.env.ENV?.includes('local'),
  env: process.env.ENV,
  global: {
    domain: process.env.ENV_DOMAIN,
    baseUrl: process.env.ENV_BASE_URL,
    name: name,
    nickName: nickName,
    fullName: fullName,
    emailAddress: 'www.shtakkar@gmail.com',
    birthDate: '1998-09-09',
    socialProfiles: {
      twitter: 'https://twitter.com/shtakkar',
      instagram: 'https://www.instagram.com/faiyaztakkarrr/',
      gitHub: 'https://github.com/yTakkar',
      linkedIn: 'https://www.linkedin.com/in/faiyaz-s-413450118/',
    },
  },
  seo: {
    facebook: {},
    twitter: {
      username: process.env.ENV_SEO_TWITTER_USERNAME,
    },
  },
  integrations: {
    googleAnalytics: {
      enabled: process.env.ENV_INTEGRATION_GOOGLE_ANALYTICS_ENABLED === 'true',
      code: process.env.ENV_INTEGRATION_GOOGLE_ANALYTICS_CODE,
    },
  },
}

export default appConfig
