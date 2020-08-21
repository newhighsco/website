import urlJoin from 'url-join'
import colors from './src/styles/_colors.module.scss'
import logoUrl from './src/images/logo-avatar-dark.png'
import openGraphImageUrl from './src/images/sharing.jpg'

const url = process.env.SITE_URL

export const config = {
  lang: 'en',
  url,
  name: 'New High Score',
  shortName: 'N↑S',
  title: 'New High Score - Extending your favourite end-game',
  description: 'Extending your favourite end-game',
  logo: urlJoin(url, logoUrl),
  openGraphImage: urlJoin(url, openGraphImageUrl),
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  googleTrackingId: 'UA-120983547-1',
  disallowRobots: process.env.DISALLOW_ROBOTS
}

export const meta = {
  dangerouslySetAllPagesToNoFollow: config.disallowRobots,
  dangerouslySetAllPagesToNoIndex: config.disallowRobots,
  titleTemplate: `%s | ${config.name}`,
  description: config.description,
  openGraph: {
    site_name: config.name,
    type: 'website',
    images: [{ url: config.openGraphImage }]
  },
  twitter: {
    cardType: 'summary',
    site: `@${config.twitterHandle}`,
    handle: `@${config.twitterHandle}`
  },
  additionalMetaTags: [{ name: 'theme-color', content: config.themeColor }]
}

export const socialLinks = {
  email: 'hello@newhighsco.re',
  facebook: 'https://www.facebook.com/newhighsco/',
  github: 'https://github.com/newhighsco',
  twitter: 'https://twitter.com/newhighsco'
}
