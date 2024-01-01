import React from 'react'
import styles from './Categories.module.css'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Categories</div>
      <div className={styles.categories}>
          <Link href="/blog" className={`${styles.category} ${styles.red}`}>Hypercar</Link>
          <Link href="/blog" className={`${styles.category} ${styles.blue}`}>Supercar</Link>
          <Link href="/blog" className={`${styles.category} ${styles.green}`}>Motogp</Link>
          <Link href="/blog" className={`${styles.category} ${styles.orange}`}>Travel</Link>
        </div>
    </div>
  )
}

export default Categories