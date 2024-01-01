"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import AuthProfile from "../authProfile/AuthProfile";
import Theme from "../theme/Theme";

const Navbar = () => {   
  return (
    <div id="navbar"
      className={styles.container}
      style={document.body.scrollTop > 80 ? { top: 0 } : { top: "100%" }}
    >
      <Link href="/"><b>Blog</b></Link>
      <div className={styles.links}>
        <Theme />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/allPost" className={styles.link}>
          Posts
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthProfile />
      </div>
    </div>
  );
};

export default Navbar;
