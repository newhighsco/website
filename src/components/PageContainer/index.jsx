import React, { useEffect, useState } from 'react'
import { node, object } from 'prop-types'
import Image from 'next/image'
import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import Footer from '@components/Footer'
import Header from '@components/Header'

import backdropImage from '@images/backdrop.jpg'
import backdropVideo from '@videos/backdrop.mp4'

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
              src={backdropImage}
              alt=""
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
              priority
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
