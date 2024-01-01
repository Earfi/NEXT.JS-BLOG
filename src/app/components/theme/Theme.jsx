"use client"
import React, { useContext } from 'react'
import styles from './Theme.module.css'
import { ThemeContext } from '@/context/ThemeContext';

const Theme = () => {
    const {theme,toggle} = useContext(ThemeContext);
  return (
    <div onClick={toggle} className={styles.container} >
        <p className={styles.text}  >{theme === "dark" ? "Light":"Dark"}</p>
    </div>
  )
}

export default Theme