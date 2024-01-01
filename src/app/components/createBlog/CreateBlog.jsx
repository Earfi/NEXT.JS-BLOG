import React from 'react'
import styles from './CreateBlog.module.css'

const CreateBlog = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder='CREATE YOUR BLOG ...' />
    </div>
  )
}

export default CreateBlog