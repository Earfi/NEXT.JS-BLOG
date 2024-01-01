import styles from "./homepage.module.css";
import React from 'react'
import CreateBlog from "./components/createBlog/CreateBlog";
import Recommend from "./components/recommend/Recommend";
import Categories from "./components/categories/Categories";
import PopBlog from "./components/popBlog/PopBlog";

const Home = () => {
  return (
    <div className={styles.container}>
      <CreateBlog/>
      <Recommend/>
      <hr className={styles.hr}/>
      <Categories/>
      <hr className={styles.hr}/>
      <PopBlog/>
    </div>
  )
}

export default Home