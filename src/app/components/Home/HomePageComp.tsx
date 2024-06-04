"use client";
import styles from "./HomePageComp.module.css";
import { Button } from "@mui/material";
import NextLink from "next/link";

export default function HomePageComp() {
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
        <img
          src="/assets/HomeMobile1.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile1.2.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile1.3.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile2.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile3.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile4.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile5.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile6.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
        <img
          src="/assets/HomeMobile7.png"
          alt="imgHomePage"
          className={styles.imgHome}
        />
      </div>
    </div>
  );
}
