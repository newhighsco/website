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

const PageContainer = ({ meta, children }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
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
      <Meta {...meta} />
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
