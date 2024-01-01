import React from "react";
import styles from "./SinglePage.module.css";
import Image from "next/image";
import Categories from "@/app/components/categories/Categories";
import Comments from "@/app/components/comments/Comments";
import PopBlog from "@/app/components/popBlog/PopBlog";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.back}>&#10094;</p>
        <h1 className={styles.category}>Hypercar</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.author}>
          <div className={styles.profile}>
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
            <p className={styles.star}>&#9885;</p>
            <p>ถูกใจ <b className={styles.numWatch}>254</b> ครั้ง</p>
          </div>
        </div>
        <div className={styles.mainContent}>
          <h1 className={styles.topic}>Lamborghini Sian</h1>
          <Image
            className={styles.imagePreview}
            src="/lam-sian"
            height={200}
            width={400}
          />
          <p className={styles.desc}>
            Lamborghini Sián Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
            ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ได้ผลผลิตรวม 807 แรงม้า
            เข้าถึง 0-62 ไมล์/ชั่วโมงในเวลาน้อยกว่า 2.9 วินาท Lamborghini Sián
            Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
            ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ได้ผลผลิตรวม 807 แรงม้า
            เข้าถึง 0-62 ไมล์/ชั่วโมงในเวลาน้อยกว่า 2.9 วินาท Lamborghini Sián
            Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
            ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ได้ผลผลิตรวม 807 แรงม้า
            เข้าถึง 0-62 ไมล์/ชั่วโมงในเวลาน้อยกว่า 2.9 วินาท Lamborghini Sián
            Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
            ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ได้ผลผลิตรวม 807 แรงม้า
            เข้าถึง 0-62 ไมล์/ชั่วโมงในเวลาน้อยกว่า 2.9 วินาท Lamborghini Sián
            Roadster มาพร้อมเครื่องยนต์ V12 ขนาด 6.5 ลิตร
            ที่ผสานกำลังกับมอเตอร์ไฟฟ้า 48 โวลต์ ทำให้ได้ผลผลิตรวม 807 แรงม้า
            เข้าถึง 0-62 ไมล์/ชั่วโมงในเวลาน้อยกว่า 2.9 วินาท
          </p>
        </div>

        <hr style={{ margin: "20px 0px" }} />

        <div className={styles.comments}>
          <Comments />
        </div>

        <hr style={{ margin: "20px 0px" }} />
        <PopBlog />

        <hr style={{ margin: "20px 0px" }} />
        <Categories />
      </div>
    </div>
  );
};

export default SinglePage;
