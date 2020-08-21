import React from 'react'
import Link from 'next/link'
import { ContentContainer, Icon, SmartLink } from '@newhighsco/chipset'
import { config } from '../../../site.config'

import styles from './Header.module.scss'
import LogoSvg from '../../images/logo-full.svg'

const Header = () => (
  <>
    <ContentContainer
      id="top"
      as="header"
      role="banner"
      gutter
      theme={{ content: styles.content, gutter: styles.gutter }}
    >
      <Link href="/" passHref>
        <SmartLink>
          <Icon alt={config.name} theme={{ wrapper: styles.logo }}>
            <LogoSvg />
          </Icon>
        </SmartLink>
      </Link>
    </ContentContainer>
  </>
)

Header.propTypes = {}

export default Header
export { Header }
