import classNames from 'classnames'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IMarkdownRendererProps {
  children: any
  disableLineWhiteSpace?: boolean
}

function MarkdownRenderer(props: IMarkdownRendererProps) {
  const { children, disableLineWhiteSpace } = props

  const renderLinkComponent = ({ node: _node, ...props }: any) => {
    if (props?.href?.startsWith('mailto:')) {
      return <a {...props} />
    }
    return (
      <a {...props} target="_blank" rel="noreferrer noopener">
        Link
      </a>
    )
  }

  const component: any = {
    a: renderLinkComponent,
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={classNames('html-body', {
        'whitespace-nowrap': disableLineWhiteSpace,
      })}
      components={component}>
      {children}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
