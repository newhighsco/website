import PageContainer from '@components/PageContainer'
import { object } from 'prop-types'
import React from 'react'

const NotFoundPage = ({ meta }) => <PageContainer meta={meta} />

NotFoundPage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Page not found',
        description: 'Sorry, this page could not be found',
        noindex: true,
        nofollow: true
      }
    }
  }
}

export default NotFoundPage
