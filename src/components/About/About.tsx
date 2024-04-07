import React from "react";
import styles from "./About.module.css";
import cx from "classnames";
import Image from "next/image";
import MoiImage from "@/../public/moi_1.jpg";
type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles["about"]}>
      <div className={styles["about-text-wrapper"]}>
        <div className={cx(styles["text"], styles["title"])}>
          What about me.
        </div>
        <div className={cx(styles["text"], styles["description"])}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          deserunt impedit quo vero quibusdam iusto aut. Illo expedita iste
          aperiam maiores, explicabo, officia ut corrupti non et cumque, nostrum
          blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore aspernatur.
        </div>
      </div>
      <div className={styles["about-img"]}>
        <Image
          src={MoiImage}
          alt="seghrouchni youssef"
          style={{ width: "100vw", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default About;
