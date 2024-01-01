import React from "react";
import styles from "./RecommendBlog.module.css";
import Image from "next/image";
import CategoriesPopular from "../categoriesPopular/categoriesPopular";
import Link from "next/link";

const RecommendBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/posts/post">
          <div className={styles.blog}>
            <h1 className={styles.textRecommend}>Blog แนะนำ</h1>

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
                  <p>ถูกใจ &#9885; 254 ครั้ง</p>
                </div>
                <hr />
                <p className={styles.content}>
                  Lamborghini Sián Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
                  ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ได้ผลผลิตรวม 807
                  แรงม้า เข้าถึง 0-62 ไมล์/ชั่วโมงในเวลาน้อยกว่า 2.9 วินาท
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecommendBlog;
