import config from '@config'
import { ReactComponent as LogoSvg } from '@images/logo-full.svg'
import { ContentContainer, Icon, SmartLink } from '@newhighsco/chipset'
import Link from 'next/link'
import React from 'react'

import styles from './Header.module.scss'

const { name } = config

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
          <Icon alt={name} theme={{ root: styles.logo }}>
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
