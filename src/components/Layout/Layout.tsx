import { Container } from '@mantine/core'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import React, { PropsWithChildren } from 'react'

import { Favicons } from '@/components/Layout/Favicons'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

// import { Favicons } from '@/components/Layout/Favicons'

const Layout = (props: PropsWithChildren<NextSeoProps>) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <>
      <NextSeo
        titleTemplate='%s | 小康 Blog'
        defaultTitle='小康 – Developer, YouTuber'
        description={t('Seo.defaultDesc')}
        canonical={`https://honghong.me${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://honghong.me${router.asPath}`,
          type: 'website',
          title: '小康 – Developer, YouTuber',
          description: t('Seo.defaultDesc'),
          images: [
            {
              url: 'https://honghong.me/static/images/og/og.png',
              width: 1200,
              height: 630,
              alt: t('Seo.defaultDesc'),
            },
          ],
        }}
        additionalLinkTags={[...Favicons]}
        {...props}
      />
      <Header />
      <Container
        sx={(theme) => ({
          padding: '24px 30px',
          [theme.fn.largerThan('sm')]: {
            padding: '48px 32px',
          },
        })}
      >
        {props.children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
