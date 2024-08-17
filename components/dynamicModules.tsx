export const dynamicToast = () =>
  import(/* webpackChunkName: "react-hot-toast" */ 'react-hot-toast').then(mod => mod.toast)
