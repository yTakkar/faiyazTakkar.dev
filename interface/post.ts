export interface IPostInfo {
  id: string
  title: string
  description: string
  keywords: string[]
  date: string
}

export interface IPostDetail extends IPostInfo {
  content: string
}
