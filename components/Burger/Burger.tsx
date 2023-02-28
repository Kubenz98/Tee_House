import React from "react";
import styles from "./Burger.module.css";

interface BurgerProps {
  navState: boolean;
  navHandler: () => void;
}

const Burger = ({ navState, navHandler }: BurgerProps) => {
  return (
    <div
      className={
        navState
          ? `${styles.hamburger} ${styles["hamburger--active"]}`
          : styles.hamburger
      }
    >
      <div className={styles["hamburger__bars"]} onClick={navHandler}>
        <span className={styles["hamburger__bars-bar"]}></span>
        <span className={styles["hamburger__bars-bar"]}></span>
        <span className={styles["hamburger__bars-bar"]}></span>
      </div>
    </div>
  );
};

export default Burger;
