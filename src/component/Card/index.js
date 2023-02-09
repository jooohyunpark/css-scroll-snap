import React from "react";
import styles from "./index.module.scss";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div id="left-1">1</div>
          <div id="left-2">2</div>
          <div id="left-3">3</div>
        </div>

        <div className={styles.right}>
          <div id="right-1">1</div>
          <div id="right-2">2</div>
          <div id="right-3">3</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
