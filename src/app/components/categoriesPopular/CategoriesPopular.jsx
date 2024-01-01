import React from 'react'
import styles from './CategoriesPopular.module.css'

const CategoriesPopular = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.topicCate}>Categories Popular</h1>
        <div className={styles.categories}>
          <Link href="/" className={`${styles.category} ${styles.red}`}>
            Hypercar
          </Link>
          <Link href="/" className={`${styles.category} ${styles.blue}`}>
            Supercar
          </Link>
          <Link href="/" className={`${styles.category} ${styles.green}`}>
            Motogp
          </Link>
          <Link href="/" className={`${styles.category} ${styles.orange}`}>
            Travel
          </Link>
        </div>
    </div>
  )
}

export default CategoriesPopular