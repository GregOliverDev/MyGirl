"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Maps.module.css";
import Link from "next/link";

export default function MapsComp() {
  const [selectedAndar, setSelectedAndar] = useState<string>("1");

  const andares = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

  const handleAndarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const andar = event.target.value;
    setSelectedAndar(andar);
    const andarSelect = document.getElementById("AndarSelect");
    if (andarSelect) {
      andarSelect.textContent = `Andar ${andar}`;
    }
  };

  useEffect(() => {
    const andarSelect = document.getElementById("AndarSelect");
    if (andarSelect) {
      andarSelect.textContent = `Andar ${selectedAndar}`;
    }
  }, [selectedAndar]);

  return (
    <div className={styles.main}>
      <div className={styles.divHeader}>
        <Link href="/">
          <img
            src="/assets/iconHome.png"
            alt="imgHome"
            className={styles.imgHome}
          />
        </Link>
      </div>
      <div className={styles.mainMaps}>
        <div className={styles.imgMaps}>
          <div className={styles.selectContainer}>
            <label htmlFor="andarSelect" className={styles.h1Itens}>
              Selecione o Andar:
            </label>
            <select
              id="andarSelect"
              value={selectedAndar}
              onChange={handleAndarChange}
              className={styles.select}
            >
              {andares.map((andar) => (
                <option key={andar} value={andar} className={styles.option}>
                  Andar {andar}
                </option>
              ))}
            </select>
          </div>
          <div>
            <img src={`/assets/Andares/Andar${selectedAndar}.png`} alt="Andar" className={styles.imgMapa} />
          </div>
          <div className={styles.divLegend}>
            <p className={styles.h1Legend}>Legenda</p>
            <div className={styles.divItem}>
              <div className={styles.divBall1}>
              </div>
              <p>Banheiro</p>
            </div>
            <div className={styles.divItem}>
              <div className={styles.divBall2}>
              </div>
              <p>Salas de Aula</p>
            </div>
            <div className={styles.divItem}>
              <div className={styles.divBall3}>
              </div>
              <p>Elevador</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
