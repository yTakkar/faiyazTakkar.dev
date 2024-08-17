export enum PostType {
  PHILOSOPHY = 'philosophy',
  PAST_MEMORY = 'past-memory',
  POETRY = 'poetry',
  EXPERIENCE = 'experience',
}

export interface IPostInfo {
  id: string
  type: PostType
  title: string
  description: string
  keywords: string[]
  date: string
}

export interface IPostDetail extends IPostInfo {
  content: string
}
