import React, { useEffect, useState } from 'react'
import 'styles/styles.scss'
import { NextPage } from 'next'
import { Router, useRouter } from 'next/router'
import PageContainer from '../components/PageContainer'
import classNames from 'classnames'
import AppSeo, { IAppSeoProps } from '../components/seo/AppSeo'
import ApplicationContext, {
  defaultApplicationContext,
  IApplicationContextProps,
} from '../components/ApplicationContext'
import { getDeviceInfo } from '../utils/applicationContext'
import { isBrowser } from '../utils/common'
import Menu from '../components/menu/Menu'
import { PageTransition } from 'next-page-transitions'
import Toaster from '../components/Toaster'

declare let window: any

export interface IPageLayoutData {}

export interface IGlobalLayoutProps {
  pageData: any
  layoutData: IPageLayoutData
  seo: IAppSeoProps
}

interface IProps {
  Component: NextPage<IGlobalLayoutProps>
  pageProps: IGlobalLayoutProps
}

const MyApp: NextPage<IProps> = props => {
  const { Component, pageProps } = props
  const { layoutData, seo } = pageProps || {}

  const router = useRouter()

  const [appState, setAppState] = useState({
    device: defaultApplicationContext.device,
  })

  useEffect(() => {
    if (isBrowser()) {
      setAppState({
        device: getDeviceInfo(),
      })
    }
  }, [])

  const applicationContext: IApplicationContextProps = {
    device: appState.device,
  }

  return (
    <div>
      <ApplicationContext.Provider value={applicationContext}>
        <AppSeo {...seo} />

        <PageContainer>
          <div className="lg:flex items-start">
            <Menu />
            <PageTransition timeout={200} classNames="pageTransition">
              <Component {...pageProps} key={router.route} />
            </PageTransition>
          </div>

          <Toaster />
        </PageContainer>
      </ApplicationContext.Provider>
    </div>
  )
}

export default MyApp
