import React from "react";
import styles from "./Recommend.module.css";
import Image from "next/image";
import CategoriesPopular from "../categoriesPopular/categoriesPopular";
import Link from "next/link";
import RecommendBlog from "../recommendBlog/RecommendBlog";

const Recommend = () => {
  return (
    <div className={`${styles.container} ${styles.hypercar}`}>
      <div className={styles.recommendBlog}>
        <RecommendBlog/>
      </div>
      <div className={styles.categoriesPop}>
        <h1 className={styles.topicCate}>Categories Popular</h1>
        <div className={styles.categories}>
          <Link href="/blog" className={`${styles.category} ${styles.red}`}>
            Hypercar
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.blue}`}>
            Supercar
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.green}`}>
            Motogp
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.orange}`}>
            Travel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
