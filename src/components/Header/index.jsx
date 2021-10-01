import React from 'react'
import Link from 'next/link'
import { ContentContainer, Icon, SmartLink } from '@newhighsco/chipset'
import config from '@config'

import styles from './Header.module.scss'
import { ReactComponent as LogoSvg } from '@images/logo-full.svg'

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
