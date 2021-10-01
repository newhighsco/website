import colors from './src/styles/_colors.module.scss'
import logoBitmap from './src/images/logo-avatar-dark.png'
import logoVector from './src/images/logo-avatar.svg'
import openGraphImage from './src/images/sharing.jpg'

const config = {
  name: 'New High Score',
  shortName: 'N↑S',
  title: 'New High Score - Extending your favourite end-game',
  description: 'Extending your favourite end-game',
  logo: {
    bitmap: logoBitmap,
    vector: logoVector
  },
  openGraphImage,
  themeColor: colors.black,
  twitterHandle: 'newhighsco',
  socialLinks: {
    email: 'hello@newhighsco.re',
    facebook: 'https://www.facebook.com/newhighsco/',
    github: 'https://github.com/newhighsco',
    twitter: 'https://twitter.com/newhighsco'
  }
}

export default config
