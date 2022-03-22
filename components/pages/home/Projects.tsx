import Image from "next/image";
import { forwardRef } from "react";
import styles from "@/styles/pages/home/Projects.module.css";

export interface ProjectInterface {
  repo: string;
  text: string;
  web?: string;
}

const ProjectsData: ProjectInterface[] = [
  {
    repo: "sekilas13/sekilas13-ssr",
    text: "",
    web: "https://sekilas13.vercel.app/",
  },
  {
    repo: "sekilas13/nva13",
    text: "",
  },
  {
    repo: "bellshade/Javascript",
    text: "",
  },
  {
    repo: "bellshade/bellshade-monorepo",
    text: "",
  },
  {
    repo: "reacto11mecha/auto-attendance",
    text: "",
  },
  {
    repo: "reacto11mecha/nesbaen",
    text: "",
  },
];

const Projects = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Projects</h1>
    <p className={styles.text}>
      Berikut ini adalah project-project yang sudah saya kerjakan.
    </p>

    <div className="flex one two-800">
      {ProjectsData.map((project) => (
        <div key={project.repo}>
          <article className={`card ${styles.card}`}>
            <header>
              <div className={styles.imageWrapper}>
                <Image
                  src={`https://opengraph.githubassets.com/HEAD/${project.repo}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                />
              </div>
              <h4>{project.repo}</h4>
            </header>
            <footer>
              <a
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              {project?.web && (
                <>
                  {" "}
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                </>
              )}
            </footer>
          </article>
        </div>
      ))}
    </div>
  </section>
));
Projects.displayName = "Projects";

export default Projects;
