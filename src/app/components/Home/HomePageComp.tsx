"use client";
import { useState } from "react";
import styles from "./HomePageComp.module.css";

export default function HomePageComp() {
  const [menu, setMenu] = useState(false);

  function toggleSelect() {
    setMenu(!menu);
  }

  function navigateToMaps() {
    window.location.href = "/pages/Maps";
  }

  return (
    <div className={styles.main}>
      <img src="/assets/Header.jpeg" alt="Home" className={styles.imgHome} />
      <div className={styles.divBtMenu}>
        <div className={styles.divCoisaLinda}>
          <img
            src="/assets/iconUser.jpeg"
            alt="Home"
            className={styles.icon1}
          />
          <div className={styles.btMenu} onClick={toggleSelect}>
            <img
              src="/assets/iconMenu.jpeg"
              alt="Home"
              className={styles.icon1}
            />
          </div>
        </div>
        <p>DESIGN</p>
        <img src="/assets/imgIcons.jpeg" alt="Home" className={styles.icon2} />
      </div>
      {menu && (
        <div className={styles.divMenu}>
          <img src="/assets/Menu.jpeg" alt="Menu" className={styles.imgHome} />
          <div className={styles.divMaps} onClick={navigateToMaps}>
            <img
              src="/assets/mapsIcon.png"
              alt="MapsIcon"
              className={styles.iconMaps}
            />
            <p className={styles.pText}>Mapa FAE</p>
          </div>
        </div>
      )}
      <img src="/assets/Home.jpeg" alt="Home" className={styles.imgHome} />

      <div className={styles.divDesktop}>
        <h1 className={styles.h1Title}>Site indisponível para seu dispositivo</h1>
      </div>
    </div>
  );
}
