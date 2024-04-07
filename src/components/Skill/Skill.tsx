"use client";

import React from "react";
import styles from "./Skill.module.css";
import cx from "classnames";
import { motion } from "framer-motion";

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
        {skills.map((skill, i) => (
          <motion.span
            drag
            key={`${skill}-${i}`}
            className={cx(styles[skill], styles["skill-item"])}
          >
            {skill}
          </motion.span>
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
