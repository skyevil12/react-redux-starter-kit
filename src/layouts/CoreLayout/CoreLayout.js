// @flow
import React from 'react'
// import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import HeaderLogo from 'components/HeaderLogo'
import HeaderNav from '../../components/HeaderNav'
// normalize with antd and add icons & animations
import 'antd/lib/style/css'
import styles from './CoreLayout.css'
import '../../styles/core.css'

export const CoreLayout = ({ children }: { children: HTMLElement}) => (
  <div className={styles['core-layout']}>
    {
      // <Header />
    }
    <div className={styles['logo']}>
      <HeaderLogo />
    </div>
    <div className={styles['side-nav']}>
      <div className={styles['side-nav__inner']}>
        <SideNav />
      </div>
    </div>
    <div className={styles['settings']}>
      <HeaderNav />
    </div>
    <div className={styles['viewport']}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
