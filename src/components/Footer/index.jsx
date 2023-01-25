import config from '@config'
import { ReactComponent as EmailIcon } from '@images/icons/email.svg'
import { ReactComponent as GithubIcon } from '@images/icons/github.svg'
import { ReactComponent as TwitterIcon } from '@images/icons/twitter.svg'
import {
  ContentContainer,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React from 'react'

import styles from './Footer.module.scss'

const { socialLinks } = config
const links = [
  {
    href: socialLinks.github,
    text: 'Find us on Github',
    icon: GithubIcon,
    target: '_blank'
  },
  {
    href: socialLinks.twitter,
    text: 'Follow us on Twitter',
    icon: TwitterIcon,
    target: '_blank'
  },
  {
    href: `mailto:${socialLinks.email}`,
    text: 'Email us',
    icon: EmailIcon
  }
]

const Footer = () => (
  <ContentContainer
    as="footer"
    role="contentinfo"
    gutter
    theme={{ content: styles.content, gutter: styles.gutter }}
  >
    <Navigation
      inline
      links={links}
      renderLink={({ text, icon: IconSvg, ...rest }) => (
        <SmartLink {...rest}>
          <Icon theme={{ root: styles.icon }} alt={text}>
            <IconSvg />
          </Icon>
        </SmartLink>
      )}
      theme={{ link: styles.link }}
    />
  </ContentContainer>
)

export default Footer
export { Footer }
