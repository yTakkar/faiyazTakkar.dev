export interface Link {
  label: string
  url: string
  icon: any
  analyticsEvent: string
}

export interface Pagelink extends Link {}

export interface SocialLink extends Link {
  isExternal: boolean
}

export interface Links {
  pageLinks: Pagelink[]
  socialLinks: SocialLink[]
}
