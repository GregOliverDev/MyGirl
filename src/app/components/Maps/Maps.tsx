"use client";
import { useState, useEffect } from "react";
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
        <img src="/assets/Logo.png" alt="imgLogo" />
        <Link href="/">
          <img
            src="/assets/iconHome.png"
            alt="imgHome"
            className={styles.imgHome}
          />
        </Link>
      </div>
      <div className={styles.mainMaps}>
        <div className={styles.divMaps}>
          <div className={styles.divMapsAtual}>
            <div className={styles.imgMaps}>
              <div className={styles.homeMap}>
                <div className={styles.divItensMobile}>
                  <div className={styles.selectContainer}>
                    <label htmlFor="andarSelect" className={styles.h1Itens}>Selecione o Andar:</label>
                    <select
                      id="andarSelect"
                      value={selectedAndar}
                      onChange={handleAndarChange}
                      className={styles.select}
                    >
                      {andares.map((andar) => (
                        <option
                          key={andar}
                          value={andar}
                          className={styles.option}
                        >
                          Andar {andar}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <img
                  src="/assets/Map.png"
                  alt="imgMap"
                  className={styles.imgMap}
                />
                <div className={styles.divQrcode}>
                  <div className={styles.qrcode}>
                    <img
                      src="/assets/qrcode.png"
                      alt="imgQrcode"
                      className={styles.imgQrcode}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divLegend}>
                <ul className={styles.ulLegend}>
                  <h2 className={styles.h1Itens}>
                    Selecione um local de interesse
                  </h2>
                  {[
                    "Você",
                    "Passagem",
                    "Sala de Limpeza",
                    "Em construção",
                    "Sala Professores",
                    "Sala de Reuniões",
                    "Lanchonete",
                    "Sala Artes",
                    "Biblioteca",
                  ].map((legend, index) => (
                    <li key={index} className={styles.legendItens}>
                      <div className={styles[`divBall${index}`]}>
                        <p className={styles.pDivLegend}>{index}</p>
                      </div>
                      {legend}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <img src="/assets/footer.png" alt="imgFooter" className="imgFooter" />
      </div>
    </div>
  );
}
