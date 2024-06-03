"use client";
import styles from "./Maps.module.css";
import Link from "next/link";

export default function MapsComp() {
  function alterAndar(andar: string) {
    return async () => {
      let andarSelect = document.getElementById("AndarSelect");

      if (andarSelect !== null) {
        if (andar == "1") {
          andarSelect.textContent = "Andar 1";
        } else if (andar == "2") {
          andarSelect.textContent = "Andar 2";
        } else if (andar == "3") {
          andarSelect.textContent = "Andar 3";
        } else if (andar == "4") {
          andarSelect.textContent = "Andar 4";
        } else if (andar == "5") {
          andarSelect.textContent = "Andar 5";
        } else if (andar == "6") {
          andarSelect.textContent = "Andar 6";
        } else if (andar == "7") {
          andarSelect.textContent = "Andar 7";
        } else if (andar == "8") {
          andarSelect.textContent = "Andar 8";
        } else if (andar == "9") {
          andarSelect.textContent = "Andar 9";
        } else if (andar == "10") {
          andarSelect.textContent = "Andar 10";
        }
      }
    };
  }

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
          <div className={styles.divMenu}>
            <div className={styles.divItens}>
              <h2 className={styles.h2Itens} onClick={alterAndar("1")}>
                Andar 1
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("2")}>
                Andar 2
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("3")}>
                Andar 3
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("4")}>
                Andar 4
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("5")}>
                Andar 5
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("6")}>
                Andar 6
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("7")}>
                Andar 7
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("8")}>
                Andar 8
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("9")}>
                Andar 9
              </h2>
              <h2 className={styles.h2Itens} onClick={alterAndar("10")}>
                Andar 10
              </h2>
            </div>
          </div>
          <div className={styles.divMapsAtual}>
            <div className={styles.imgMaps}>
              <div className={styles.homeMap}>
                <h1 className={styles.h1Itens} id="AndarSelect">
                  Andar 1
                </h1>
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
                  <li className={styles.legendItens}>
                    <div className={styles.divBall0}>
                      <p className={styles.pDivLegend}></p>
                    </div>
                    Você
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall1}>
                      <p className={styles.pDivLegend}>1</p>
                    </div>
                    Passagem
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall2}>
                      <p className={styles.pDivLegend}>2</p>
                    </div>
                    Sala de Limpeza
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall3}>
                      <p className={styles.pDivLegend}>3</p>
                    </div>
                    Em construção
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall4}>
                      <p className={styles.pDivLegend}>4</p>
                    </div>
                    Sala Professores
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall5}>
                      <p className={styles.pDivLegend}>5</p>
                    </div>
                    Sala de Reuniões
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall6}>
                      <p className={styles.pDivLegend}>6</p>
                    </div>
                    Lanchonete
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall7}>
                      <p className={styles.pDivLegend}>7</p>
                    </div>
                    Sala Artes
                  </li>
                  <li className={styles.legendItens}>
                    <div className={styles.divBall8}>
                      <p className={styles.pDivLegend}>8</p>
                    </div>
                    Biblioteca
                  </li>
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
