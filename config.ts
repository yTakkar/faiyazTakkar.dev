const name = 'Faiyaz'
const nickName = 'Takkar'
const fullName = 'Faiyaz Shaikh'

const appConfig = {
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
      instagram: 'https://www.instagram.com/_faiyaz_shaikh',
      gitHub: 'https://github.com/yTakkar',
      linkedIn: 'https://www.linkedin.com/in/faiyaz-s-413450118/',
    },
  },
  seo: {
    facebook: {},
    twitter: {
      username: process.env.TWITTER_USERNAME,
    },
  },
  integrations: {
    googleAnalytics: {
      enabled: Boolean(process.env.GA),
      code: process.env.GA_CODE,
    },
  },
}

export default appConfig
