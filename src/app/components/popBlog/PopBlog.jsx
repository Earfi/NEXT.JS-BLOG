import React from 'react'
import styles from './PopBlog.module.css'
import BlogItem from '../blogItem/BlogItem'

const PopBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Populars Blog</div>
      <hr style={{margin:"20px 0px"}}/>
      <div className={styles.items}>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
      </div>
    </div>
  )
}

export default PopBlog