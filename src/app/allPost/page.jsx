import React from "react";
import styles from "./AllPage.module.css";
import BlogItem from "../components/blogItem/BlogItem";
import PopBlog from "../components/popBlog/PopBlog";
import Categories from "../components/categories/Categories";

const AllPostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.allPost}>
        <div className={styles.post}>
          <h1>HyperCar</h1>
          <div className={styles.items}>
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
        
        <div className={styles.post}>
          <h1>Supercar</h1>
          <div className={styles.items}>
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
        
        <div className={styles.post}>
          <h1>Motogp</h1>
          <div className={styles.items}>
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
        
        <div className={styles.post}>
          <h1>Food</h1>
          <div className={styles.items}>
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>

      <hr style={{ margin: "20px 0px" }} />
      <PopBlog />

      <hr style={{ margin: "20px 0px" }} />
      <Categories />
    </div>
  );
};

export default AllPostPage;
