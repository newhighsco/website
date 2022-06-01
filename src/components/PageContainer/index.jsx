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
              <video preload="none" muted autoPlay loop playsInline>
                <source src="/videos/backdrop.mp4" type="video/mp4" />
              </video>
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
