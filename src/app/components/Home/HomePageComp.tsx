"use client";
import styles from "./HomePageComp.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import NextLink from "next/link";
import { useState } from "react";

export default function HomePageComp() {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.main}>
      <div className={styles.btMaps}>
        <Button
          className={styles.btDefault}
          href="/pages/Maps"
          component={NextLink}
        >
          Maps
        </Button>
      </div>
      <div className={styles.imgDesktop}>
        <img
          src="/assets/HomeDesktop1.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeDesktop2.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeDesktop3.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeDesktop4.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeDesktop5.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
      </div>
      <div className={styles.imgMobile}>
        <div className={styles.divMenu}>
          <button className={styles.btMenu} onClick={handleMenuToggle}></button>
        </div>
        <img
          src="/assets/Home.jpg"
          alt="imgHomePage"
          className={styles.imgHome}
        />
      </div>
      {menu && (
        <div className={styles.imgMenu}>
          <img
            src="/assets/Menu.jpeg"
            alt="MenuPage"
            className={styles.imgHome}
          />
          <div className={styles.divBack} onClick={handleMenuToggle}>

          </div>
          <div className={styles.divBtHome} onClick={handleMenuToggle}>

          </div>
          <Link href="/pages/Maps">
          <div className={styles.divBtMaps} >
            <img src="/assets/pin.png" alt="img" />
            <p className={styles.pMaps}>Maps</p>
          </div>
          </Link>
        </div>
      )}
    </div>
  );
}
