"use client"
import React, { useContext } from 'react'
import styles from './Theme.module.css'
import { ThemeContext } from '@/context/ThemeContext';

const Theme = () => {
    const {theme,toggle} = useContext(ThemeContext);
  return (
    <div onClick={toggle} className={styles.container} style={theme === "dark" ? {backgroundColor: "#0f172a"} : {backgroundColor: "white"}}>
        <p className={styles.text} style={theme === "dark" ? {color: "white"} : {color: "black"}}>{theme === "dark" ? "Light":"Dark"}</p>
    </div>
  )
}

export default Theme