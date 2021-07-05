import React, { useEffect, useState } from 'react'
import { node, object } from 'prop-types'
import {
  Backdrop,
  Image,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Footer, Header, Meta } from '..'

import backdropImage from '../../images/backdrop.jpg?size=320'
import backdropImages from '../../images/backdrop.jpg?resize&format=webp'
import backdropVideo from '../../videos/backdrop.mp4'
import logoUrl from '../../images/logo-avatar.svg'

const PageContainer = ({ meta, children }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const reduceMotion =
      matchMedia('(prefers-reduced-motion: reduce)')?.matches || false

    setLoaded(!reduceMotion)
  }, [])

  return (
    <ThemedPageContainer
      as="main"
      id="content"
      role="main"
      header={<Header />}
      footer={
        <>
          <Footer />
          <Backdrop>
            <Image
              src={backdropImage.src}
              sources={[{ srcSet: backdropImages.srcSet, type: 'image/webp' }]}
            />
            {loaded && (
              <video src={backdropVideo} muted autoPlay loop playsInline />
            )}
          </Backdrop>
        </>
      }
      gutter
    >
      <Meta
        {...meta}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: logoUrl
          },
          {
            rel: 'sitemap',
            type: 'application/xml',
            href: '/sitemap.xml'
          }
        ]}
      />
      {children}
    </ThemedPageContainer>
  )
}

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
