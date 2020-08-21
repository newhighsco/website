import React from 'react'
import { node, object } from 'prop-types'
import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Footer, Header, Meta } from '..'

import backdropImage from '../../images/backdrop.jpg'
import backdropVideo from '../../videos/backdrop.mp4'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer
    as="main"
    id="content"
    role="main"
    header={<Header />}
    footer={
      <>
        <Footer />
        <Backdrop image={backdropImage} video={backdropVideo} />
      </>
    }
    gutter
  >
    <Meta {...meta} />
    {children}
  </ThemedPageContainer>
)

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
