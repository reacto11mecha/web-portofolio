import Image from "next/image";
import { forwardRef } from "react";
import Icon from "@/components/Icon";
import styles from "@/styles/pages/home/Projects.module.css";

export interface ProjectInterface {
  repo: string;
  text: string;
  web?: string;
}

const ProjectsData: ProjectInterface[] = [
  {
    repo: "sekilas13/sekilas13-ssr",
    text: "Website landing page untuk organisasi Karya Ilmiah Remaja SMP Negeri 13 Kota Bekasi.",
    web: "https://sekilas13.vercel.app/",
  },
  {
    repo: "sekilas13/nva13",
    text: "Aplikasi voting untuk memilih ketua baru berbasis web menggunakan Node js.",
  },
  {
    repo: "bellshade/Javascript",
    text: "Repositori untuk belajar bahasa pemrograman Javascript berbahasa Indonesia.",
  },
  {
    repo: "bellshade/bellshade-monorepo",
    text: "Repositori monorepo yang menaungi package-package yang digunakan untuk Organisasi Bellshade.",
  },
  {
    repo: "reacto11mecha/auto-attendance",
    text: "Bot absensi masuk dan keluar yang berjalan otomatis menggunakan puppeteer.",
  },
  {
    repo: "reacto11mecha/nesbaen",
    text: "Bot Whatsapp yang digunakan untuk keperluan absensi guru dan siswa.",
  },
];

const Projects = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Projects</h1>
    <p className={styles.text}>
      Berikut ini adalah project-project yang saya kerjakan.
    </p>

    <div className={`flex one two-800 ${styles.projectContainer}`}>
      {ProjectsData.map((project) => (
        <div key={project.repo}>
          <article className={`card ${styles.card}`}>
            <header>
              <div className={styles.imageWrapper}>
                <Image
                  src={`https://opengraph.githubassets.com/HEAD/${project.repo}`}
                  layout="fill"
                  alt={`Gambar open graph github dari repositor https://github.com/${project.repo}`}
                />
              </div>
              <h4 className={styles.repoName}>{project.repo}</h4>
              <p className={styles.repoText}>{project.text}</p>
            </header>
            <footer className={styles.projectFooter}>
              <a
                className={styles.projectAnchor}
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon="github" />
              </a>

              {project?.web && (
                <>
                  {"  "}
                  <a
                    href={project.web}
                    className={styles.projectAnchor}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon icon="web" />
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
