import React from "react";
import styles from "./MainPage.module.css";
import Mapbox from "./components/Map/Mapbox";
import Chart from "./components/Chart/Chart";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <Mapbox />
      </div>
      <div className={styles.chartContainer}>
        <Chart />
      </div>
      <div className={styles.rankingContainer}>Ranking</div>
      <div className={styles.playerContainer}>Player</div>
    </div>
  );
}
