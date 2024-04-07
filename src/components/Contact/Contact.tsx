import React from "react";
import styles from "./Contact.module.css";
import FormContact from "../FormContact/FormContact";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={styles["contact"]}>
      <div className={styles["contact-title"]}>
        <h1 className={styles["title"]}>Let's talk.</h1>
      </div>
      <FormContact />
    </div>
  );
};

export default Contact;
