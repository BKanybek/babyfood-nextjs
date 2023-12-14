"use client"

import React from 'react'
import styles from './search.module.css';
import { RxCross1 } from "react-icons/rx";

const Search = () => {
  return (
    <div className={styles.search}>
        <input className={styles.input} type="text" placeholder='Поиск...' />
        <div className={styles.btn}>
            <RxCross1 />
        </div>
    </div>
  )
}

export default Search
