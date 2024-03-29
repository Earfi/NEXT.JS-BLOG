import React from "react";
import styles from "./BlogItem.module.css";
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = () => {
  return (
    <Link className={styles.link} href="/posts/post">
      <div className={styles.bodyBlog}>
        <div className={styles.imageBody}>
          <Image
            className={styles.imagePreview}
            src="/lam-sian"
            height={130}
            width={280}
          />
          <p className={styles.btnPreview}>Hypercar</p>
        </div>
        <div className={styles.textBody}>
          <h1 className={styles.topic}>Lamborghini Sian</h1>
          <div className={styles.author}>
            <Image
              className={styles.imageAuthor}
              src="/profile"
              height={40}
              width={40}
            />
            <p>Earf Pichaya</p>
          </div>
          <div className={styles.date}>
            <p>22/06/2555</p>
            <p>&#9885;</p>
            <p>ถูกใจ <b className={styles.numWatch}>254</b> ครั้ง</p>
          </div>
          <hr />
          <p className={styles.content}>
            Lamborghini Sián Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
            ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ 
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
