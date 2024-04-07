import React from "react";
import styles from "./Home.module.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={styles["home"]}>
      <div className={styles["home-title"]}>
        <span className={styles["full"]}>Full</span>
        <span className={styles["stack"]}>stack</span>
        <span className={styles["developer"]}>developer</span>
      </div>
    </div>
  );
};

export default Home;
