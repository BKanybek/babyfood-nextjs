import React from "react";
import styles from "./navMenu.module.css";
import Link from "next/link";

const NavMenu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.categoryList}>
        <li className={styles.category}>
          <Link href="/" className={styles.title}>Главное</Link>
        </li>
        <li className={styles.category}>
          <Link href="/" className={styles.title}>Категории</Link>
        </li>
        <li className={styles.category}>
          <Link href="/" className={styles.title}>Продукты</Link>
        </li>
        <li className={styles.category}>
          <Link href="/" className={styles.title}>Контакты</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
