"use client";

import React, { useRef, useState } from "react";
import styles from "./ListProject.module.css";
import ItemProject from "../RowProject/RowProject";
import ListFilter from "../ListFilter/ListFilter";
import Link from "next/link";

type Props = {};

const ListProject = ({}: Props) => {
  const containerRef = useRef(null);

  const [filters, setFilters] = useState<string[]>([]);

  const setFiltersHandler = (filter: string) => {
    setFilters((previousState) => {
      const filterExist = filters.some((x) => x === filter);
      if (filterExist) {
        return previousState.filter((x) => x !== filter);
      }
      return [...previousState, filter];
    });
  };

  const filteredProjects = projects.filter((project) => {
    if (filters.length === 0) {
      return true;
    }
    return filters.every((filter) => project.tags.includes(filter));
  });

  return (
    <div className={styles["list-project"]}>
      <ListFilter setFilters={setFiltersHandler} activeFilters={filters} />
      <div className={styles["list-wrapper"]} ref={containerRef}>
        {filteredProjects.map((project: Project, i: number) => (
          <ItemProject
            key={`${i}-${project.title}`}
            title={project.title}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
      <div className={styles["show-more-wrapper"]}>
        <Link href={"#"} className={styles["show-more-btn"]}>
          voir plus
        </Link>
      </div>
    </div>
  );
};

export default ListProject;

const projects: Project[] = [
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Typescript", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Drupal", "Typescript"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Drupal", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["React", "Drupal", "Typescript", "ThreeJS"],
  },
  {
    title: "Praesent porttitor nulla",
    github: "#",
    link: "#",
    tags: ["Drupal", "Typescript", "ThreeJS"],
  },
];

export interface Project {
  title: string;
  github: string;
  link: string;
  tags: string[];
}
