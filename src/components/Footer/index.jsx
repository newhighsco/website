import React from 'react'
import {
  ContentContainer,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import icons from '../../images/icons'
import { socialLinks } from '../../../site.config'

import styles from './Footer.module.scss'

const links = [
  {
    href: socialLinks.github,
    text: 'Find us on Github',
    icon: icons('github'),
    target: '_blank'
  },
  {
    href: socialLinks.twitter,
    text: 'Follow us on Twitter',
    icon: icons('twitter'),
    target: '_blank'
  },
  {
    href: `mailto:${socialLinks.email}`,
    text: 'Email us',
    icon: icons('email')
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
