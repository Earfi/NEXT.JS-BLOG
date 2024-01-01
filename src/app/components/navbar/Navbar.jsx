"use client"
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import AuthProfile from '../authProfile/AuthProfile'
import Theme from '../theme/Theme'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Blog</Link>
      <div className={styles.links}>
        <Theme/>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/' className={styles.link}>Posts</Link>
        <Link href='/' className={styles.link}>About</Link>
        <AuthProfile/>
      </div>
    </div>
  )
}

export default Navbar