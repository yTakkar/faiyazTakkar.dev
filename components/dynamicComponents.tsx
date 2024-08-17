import dynamic from 'next/dynamic'

export const DynamicToaster = dynamic(
  () =>
    import(/* webpackChunkName: "react-hot-toast" */ 'react-hot-toast').then(resp => {
      return resp.Toaster
    }),
  {
    ssr: false,
  }
)
