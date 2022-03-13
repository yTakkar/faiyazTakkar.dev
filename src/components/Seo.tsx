import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface ISEO {
  [x: string]: any
}

const Seo: FC<ISEO> = ({ children, ...customMeta }) => {
  const { asPath } = useRouter()

  const meta = {
    title: "Hi, I'm Faiyaz Shaikh!",
    description: `I'm a digital product builder by profession.`,
    image: 'https://faiyaztakkar.vercel.app/images/logo.jpeg',
    type: 'website',
    ...customMeta,
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={`https://faiyaztakkar.dev${asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Lee Robinson" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="faiyaztakkar.dev" />
      <meta property="twitter:url" content="https://faiyaztakkar.dev/" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}

export default Seo
