import React from "react";
import styles from "./Chart.module.css";
import LineChart from "./LineChart";

export default function Chart() {
  return (
    <>
      <h4 className={styles.title}>Curva de crescimento da Covid-19</h4>
      <div className={styles.radio}>
        <input
          type="radio"
          name="serie"
          className={styles.confirmed}
          checked={true}
        />
        <label>Casos confirmados</label>
        <input
          type="radio"
          name="serie"
          className={styles.deaths}
          checked={false}
        />
        <label htmlFor="deaths">Mortes confirmadas</label>
        <LineChart />
      </div>
    </>
  );
}
