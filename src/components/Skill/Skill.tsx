import React from "react";
import styles from "./Skill.module.css";
import cx from "classnames";

type Props = {};

const Skill = (props: Props) => {
  return (
    <div className={styles["skill"]}>
      <div className={styles["skill-title"]}>
        <span>Front.</span>
        <span>Back.</span>
        <span>Design.</span>
      </div>
      <div className={styles["skills-wrapper"]}>
        {skills.map((skill) => (
          <span className={cx(styles[skill], styles["skill-item"])}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;

const skills = [
  "react",
  "typescript",
  "javascript",
  "html",
  "css",
  "bootstrap",
  "threejs",
  "drupal",
  "nextjs",
  "php",
  "wordpress",
];
