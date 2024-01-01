import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.links}>
        <Link target='_blank' href='/'><Image src='/facebook.png' width={20} height={20}/></Link>
        <Link target='_blank' href='/'><Image src='/instagram.png' width={20} height={20}/></Link>
        <Link target='_blank' href='/'><Image src='/tiktok.png' width={20} height={20} className={styles.tiktok} /></Link>
        <Link target='_blank' href='/'><Image src='/youtube.png' width={20} height={20}/></Link>
      </div>
    </div>
  )
}

export default Footer