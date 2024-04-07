import React from "react";
import styles from "./RowProject.module.css";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "@/../public/Logo--github.svg";
import RedirectIcon from "@/../public/Arrow--up-right.svg";

type Props = {
  title: string;
  github: string;
  link: string;
};

const RowProject: React.FC<Props> = ({ title, github, link }: Props) => {
  return (
    <div className={styles["row-project"]}>
      <h4 className={styles["row-project-title"]}>{title}</h4>
      <div className={styles["wrapper-links"]}>
        <Link href={github}>
          <Image src={GithubIcon} width={30} height={30} alt="github" />
        </Link>
        <Link href={link}>
          <Image src={RedirectIcon} width={30} height={30} alt="redirect to" />
        </Link>
      </div>
    </div>
  );
};

export default RowProject;
