"use client";
import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import Image from "next/image";

const LoginPage = () => {

  const [mode,setMode] = useState("login")

  const handleMode = () => {
    mode === "login" ? setMode("signUp") : setMode("login");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.imgContent}>
            <div className={styles.image}></div>
            <div className={styles.text}>
              <p>Welcome To My first Project</p>
              <p>Try Login</p>
            </div>
          </div>
          
          {mode === "login" ? (
            <div className={styles.form} style={mode === "login" ? { right: "0%" } : { right: "100%" }}>
              <h1>Blog</h1>
              <div className={styles.input}>
                <label>USERNAME</label>
                <input type="text" placeholder="username..." />
              </div>
              <div className={styles.input}>
                <label>PASSWORD</label>
                <input type="text" placeholder="password..." />
              </div>
              <button className={styles.btn}>LOGIN</button>
              <div className={styles.loginOther}>
                <div className={styles.loginLink}>
                  <Image src="/google.png" width={24} height={24}></Image>
                  <p>Sign in with Google</p>
                </div>
                <div className={styles.loginLink}>
                  <Image src="/facebook.png" width={24} height={24}></Image>
                  <p>Sign in with Facebook</p>
                </div>
                <div className={styles.loginLink}>
                  <Image src="/github.png" width={24} height={24}></Image>
                  <p>Sign in with Github</p>
                </div>
              </div>
              <hr />
              <p className={styles.goSignUp}>
                Dont't have an account ? <span onClick={handleMode}>Sign Up</span>
              </p>
            </div>
          )
          :
          (
            <div className={styles.form} style={mode === "signUp" ? { right: "0%" } : { right: "100%" }}>
              <h1>Blog</h1>
              <div className={styles.input}>
                <label>USERNAME</label>
                <input type="text" placeholder="username..." />
              </div>
              <div className={styles.input}>
                <label>PASSWORD</label>
                <input type="text" placeholder="password..." />
              </div>
              <div className={styles.input}>
                <label>CONFIRM PASSWORD</label>
                <input type="text" placeholder="confirm password..." />
              </div>
              <button className={styles.btn}>SIGN UP</button>
              <hr className={styles.hr}/>
              <p className={styles.goSignUp}>
                <span onClick={handleMode}>Sign In</span>
              </p>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
