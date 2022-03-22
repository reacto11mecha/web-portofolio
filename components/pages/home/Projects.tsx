import { forwardRef } from "react";
import styles from "@/styles/pages/home/Projects.module.css";

const Projects = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Projects</h1>
    <p className={styles.text}>
      Berikut ini adalah project-project yang sudah saya kerjakan.
    </p>
  </section>
));
Projects.displayName = "Projects";

export default Projects;
