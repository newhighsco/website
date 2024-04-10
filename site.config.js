import logoVector from '@images/logo-avatar.svg'
import logoBitmap from '@images/logo-avatar-dark.png'
import openGraphImage from '@images/sharing.jpg'
import colors from '@styles/_colors.module.scss'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'New High Score',
  shortName: 'N↑S',
  title: 'New High Score - Extending your favourite end-game',
  description: 'Extending your favourite end-game',
  logo: {
    bitmap: logoBitmap.src,
    vector: logoVector
  },
  openGraphImage: openGraphImage.src,
  themeColor: colors.black,
  socialLinks: {
    github: 'https://github.com/newhighsco'
  }
}

export default config
