import React from 'react'
import { ContentContainer, Icon, List, SmartLink } from '@newhighsco/chipset'
import icons from '../../images/icons'
import { config, socialLinks } from '../../../site.config'

import theme from './theme.module.scss'
import styles from './styles.module.scss'

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
  { href: `mailto:${config.email}`, text: 'Email us', icon: icons('email') }
]

const Footer = () => (
  <ContentContainer
    as="footer"
    role="contentinfo"
    fullWidth
    gutter
    theme={theme}
  >
    {links.length && (
      <List inline>
        {links.map(({ href, text, icon: IconSvg, target }, i) => {
          return (
            <li key={i}>
              <SmartLink
                className={styles.link}
                href={href}
                title={text}
                target={target}
              >
                <Icon theme={{ wrapper: styles.icon }} alt={text}>
                  <IconSvg />
                </Icon>
              </SmartLink>
            </li>
          )
        })}
      </List>
    )}
  </ContentContainer>
)

export default Footer
export { Footer }
