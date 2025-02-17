import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IPostDetail, IPostInfo } from '../interface/post'

const postsDirectory = path.join(process.cwd(), 'posts')

const isHiddenPath = (path: string) => {
  return /(^|\/)\.[^\/\.]/g.test(path)
}

export const getPostDetailById = (id: string): IPostDetail => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  return {
    id,
    type: matterResult.data.type,
    title: matterResult.data.title,
    description: matterResult.data.description,
    keywords: matterResult.data.keywords,
    date: matterResult.data.date,
    content: matterResult.content,
    disabled: matterResult.data.disabled || false,
  }
}

const getFormattedPostDate = (date: string) => {
  const day = date.split('-')[0]
  const month = date.split('-')[1]
  const year = date.split('-')[2]
  return new Date(`${year}-${month}-${day}`)
}

export const listPostInfos = (): IPostInfo[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  const postInfos: IPostInfo[] = fileNames
    .filter(fileName => !isHiddenPath(fileName))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const postDetail = getPostDetailById(id)
      return {
        id,
        type: postDetail.type,
        title: postDetail.title,
        description: postDetail.description,
        keywords: postDetail.keywords,
        date: postDetail.date,
        disabled: postDetail.disabled,
      }
    })
    .filter(post => !post.disabled)
    .sort((a, b) => getFormattedPostDate(b.date).getTime() - getFormattedPostDate(a.date).getTime())

  return postInfos
}

export const listPostIds = (): string[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.filter(fileName => !isHiddenPath(fileName)).map(fileName => fileName.replace(/\.md$/, ''))
}
