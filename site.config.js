import urlJoin from 'url-join'
import colors from './src/styles/settings/_colors.module.scss'
import openGraphImageUrl from './src/images/sharing.jpg'

export const config = {
  lang: 'en',
  url: process.env.SITE_URL,
  name: 'New High Score',
  shortName: 'N↑S',
  title: 'New High Score - Extending your favourite end-game',
  description: 'Extending your favourite end-game',
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  googleTrackingId: 'UA-120983547-1',
  disallowRobots: JSON.parse(process.env.DISALLOW_ROBOTS || false),
  email: 'hello@newhighsco.re'
}

export const meta = {
  dangerouslySetAllPagesToNoFollow: config.disallowRobots,
  titleTemplate: `%s | ${config.name}`,
  description: config.description,
  openGraph: {
    site_name: config.name,
    type: 'website',
    images: [{ url: urlJoin(config.url, openGraphImageUrl) }]
  },
  twitter: {
    cardType: 'summary',
    site: `@${config.twitterHandle}`,
    handle: `@${config.twitterHandle}`
  },
  additionalMetaTags: [{ name: 'theme-color', content: config.themeColor }]
}

export const socialLinks = {
  facebook: `https://www.facebook.com/${config.twitterHandle}/`,
  twitter: `https://twitter.com/${config.twitterHandle}`
}
