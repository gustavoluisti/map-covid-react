import React from "react";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>Mapa</div>
      <div className={styles.chartContainer}>Gráfico</div>
      <div className={styles.rankingContainer}>Ranking</div>
      <div className={styles.playerContainer}>Player</div>
    </div>
  );
}
