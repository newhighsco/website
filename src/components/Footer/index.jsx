import React from 'react'
import { ContentContainer, Icon, List, SmartLink } from '@newhighsco/chipset'
import { config, socialLinks } from '../../../site.config'

import theme from './theme.module.scss'
import styles from './styles.module.scss'
import EmailSvg from '../../images/icons/email.svg'
import FacebookSvg from '../../images/icons/facebook.svg'
import TwitterSvg from '../../images/icons/twitter.svg'

const links = [
  {
    href: socialLinks.facebook,
    text: 'Find us on Facebook',
    icon: FacebookSvg,
    target: '_blank'
  },
  {
    href: socialLinks.twitter,
    text: 'Follow us on Twitter',
    icon: TwitterSvg,
    target: '_blank'
  },
  { href: `mailto:${config.email}`, text: 'Email us', icon: EmailSvg }
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

Footer.propTypes = {}

export default Footer
export { Footer }
