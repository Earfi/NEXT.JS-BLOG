"use client"
import React from 'react'
import styles from './Blog.module.css'
import CreateBlog from '../components/createBlog/CreateBlog'
import RecommendBlog from '../components/recommendBlog/RecommendBlog'
import BlogItem from '../components/blogItem/BlogItem'
import Categories from '../components/categories/Categories'   

const blogPage = () => { 
    const handleGoBack = () => { 
    }
    
    
  return (
    <div className={styles.container}>
        <CreateBlog/>
        <div className={styles.topic}>
            <p onClick={handleGoBack} className={styles.back}>&#10094;</p>
            <h1>Hypercar</h1>
        </div>
        <div className={styles.popBlog}>
            <RecommendBlog/>    
        </div>
        <hr style={{margin:"20px 0px"}}/>
        <div className={styles.items}>
            <BlogItem className={styles.item}/>
            <BlogItem className={styles.item}/>
            <BlogItem className={styles.item}/>
            <BlogItem className={styles.item}/>
        </div>
        <hr style={{margin:"20px 0px"}}/>
        <Categories/>
    </div>
  )
}

export default blogPage