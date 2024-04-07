import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        <h3 className={styles["description"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles["links-wrapper"]}>
          <div className={styles["nav-wrapper"]}>
            <h5 className={styles["nav-title"]}>Menu</h5>
            <ul className={styles["nav"]}>
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Projects</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles["socials-wrapper"]}>
            <h5 className={styles["socials-title"]}>Socials</h5>
            <ul className={styles["socials"]}>
              <li>
                <Link href={"#"}>CV</Link>
              </li>
              <li>
                <Link href={"#"}>Linkedin</Link>
              </li>
              <li>
                <Link href={"#"}>Github</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["job"]}>
        <span className={styles["job-title"]}>Full stack</span>
        <span className={styles["job-title"]}>developer</span>
      </div>
      <div className={styles["footer-bottom"]}>
        <h4 className={styles["copyrights"]}>2024 Ysegh All rights reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
