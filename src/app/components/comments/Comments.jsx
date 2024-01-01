import React from "react";
import styles from "./Comments.module.css";
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.topicComment}>Comments</h1>
      <div className={styles.commentBox}>
        <Image
          className={styles.imageAuthor}
          src="/profile"
          height={40}
          width={40}
        />
        <input type="text" placeholder="Comments..." />
      </div>

      <div>
        <div className={styles.comment}>
          <div className={styles.authorComment}>
            <Image
              className={styles.imageAuthor}
              src="/profile"
              height={40}
              width={40}
            />
            <p>
              <b>Earfi Pichaya</b>
            </p>
          </div>
          <p className={styles.commentDesc}>อยากได้บ้าง</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.authorComment}>
            <Image
              className={styles.imageAuthor}
              src="/profile"
              height={40}
              width={40}
            />
            <p>
              <b>Earfi Pichaya</b>
            </p>
          </div>
          <p className={styles.commentDesc}>อยากได้บ้าง</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.authorComment}>
            <Image
              className={styles.imageAuthor}
              src="/profile"
              height={40}
              width={40}
            />
            <p>
              <b>Earfi Pichaya</b>
            </p>
          </div>
          <p className={styles.commentDesc}>อยากได้บ้าง</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
