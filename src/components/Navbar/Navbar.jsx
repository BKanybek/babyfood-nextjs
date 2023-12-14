import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../../../public/icons/logoMain.png";
import Cart from "../../../public/icons/cart.png";
import User from "../../../public/icons/user1.png";
import Favorite from "../../../public/icons/favorite.png";
import Search from "../Search/Search";
import Link from "next/link";
import NavMenu from "../NavMenu/NavMenu";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image className={styles.logo} src={Logo} alt="logo" />
        </div>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.icons}>
          <Link href="/cart">
            <Image src={Cart} alt="img" />
          </Link>
          <Link href="/favorite">
            <Image src={Favorite} alt="img" />
          </Link>
          <Link href="/login">
            <Image src={User} alt="img" />
          </Link>
        </div>
      </div>
      <NavMenu />
    </>
  );
};

export default Navbar;
