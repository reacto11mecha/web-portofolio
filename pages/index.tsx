import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRef } from "react";

import { getTime } from "@/utils/time";

import Navbar from "@/components/pages/home/Navbar";
import Header from "@/components/pages/home/Header";
import Introduction from "@/components/pages/home/Introduction";
import Skill from "@/components/pages/home/Skill";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";

import { useDarkMode } from "@/context/darkMode";

import Icon from "../assets/symbol-defs.svg";

export interface propsInterface {
  time: number;
}

const Home: NextPage<propsInterface> = ({ time }) => {
  const headerRef = useRef(null!);
  const introductionRef = useRef(null!);
  const skillRef = useRef(null!);
  const projectsRef = useRef(null!);
  const contactRef = useRef(null!);

  const { isDarkTheme } = useDarkMode();

  return (
    <div>
      <Head>
        <title>Ezra Khairan Permana | Portofolio</title>
        <meta
          name="description"
          content="Website Portofolio Ezra Khairan Permana"
        />
        <meta
          name="theme-color"
          content={isDarkTheme || false ? "#0d0d0d" : "#fff"}
        />

        <meta property="og:title" content="Ezra Khairan Permana | Portofolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rmecha.my.id/" />
        <meta
          property="og:image"
          content="https://www.rmecha.my.id/og-img.png"
        />
      </Head>
      <Icon />
      <Navbar
        headerRef={headerRef}
        introductionRef={introductionRef}
        skillRef={skillRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <main>
        <Header ref={headerRef} />
        <Introduction time={time} ref={introductionRef} />
        <Skill ref={skillRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const time = getTime();

  return {
    props: {
      time,
    },
    // Satu minggu
    revalidate: 7 * 24 * 3600,
  };
};
