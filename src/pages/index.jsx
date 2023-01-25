import PageContainer from '@components/PageContainer'
import config from '@config'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { object } from 'prop-types'
import React from 'react'
import urlJoin from 'url-join'

const { name, title, logo, socialLinks, url } = config

const HomePage = ({ meta }) => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={name}
      url={url}
      sameAs={[socialLinks.twitter]}
    />
    <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />
  </PageContainer>
)

HomePage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        canonical: urlJoin(url, '/'),
        customTitle: true,
        title
      }
    }
  }
}

export default HomePage
