import React from "react";
import styles from "./Project.module.css";
import ListProject from "../ListProject/ListProject";

type Props = {};

const Project = ({}: Props) => {
  return (
    <div className={styles["project"]}>
      <div className={styles["project-title"]}>
        <h1 className={styles["title"]}>Projects</h1>
      </div>
      <ListProject />
    </div>
  );
};

export default Project;
