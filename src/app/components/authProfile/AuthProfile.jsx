import React, { useState } from 'react'
import styles from './AuthProfile.module.css'
import Link from 'next/link';

const AuthProfile = () => {
    const [open,setOpen] = useState(false);

    const status = "unauthenticated";

  return (
    <>
        {status === "unauthenticated" ? (
            <Link href="/login" className={styles.links}>Login</Link>
        ):
        (
            <Link href="/login" className={styles.links}>Login Complete</Link>
        )}
        <div className={styles.burger} onClick={e => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        {open && (
            <div className={styles.openMenu}>
                <Link href='/' className={styles.link}>Theme</Link>
                <Link href='/' className={styles.link}>Homepage</Link>
                <Link href='/' className={styles.link}>Posts</Link>
                <Link href='/' className={styles.link}>About</Link>
                <Link href='/login' className={styles.link}>Login</Link>
            </div>
        )}
    </>
  )
}

export default AuthProfile