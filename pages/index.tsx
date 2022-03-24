import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";

import Navbar from "@/components/pages/home/Navbar";
import Header from "@/components/pages/home/Header";
import Introduction from "@/components/pages/home/Introduction";
import Skill from "@/components/pages/home/Skill";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";

import Icon from "../assets/symbol-defs.svg";

const Home: NextPage = () => {
  const headerRef = useRef(null!);
  const introductionRef = useRef(null!);
  const skillRef = useRef(null!);
  const projectsRef = useRef(null!);
  const contactRef = useRef(null!);

  return (
    <div>
      <Head>
        <title>Ezra Khairan Permana | Portofolio</title>
        <meta
          name="description"
          content="Website Portofolio Ezra Khairan Permana"
        />

        <meta property="og:title" content="Ezra Khairan Permana | Portofolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rmecha.my.id/" />
        <meta property="og:image" content="https://www.rmecha.my.id/og-img.png" />
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
        <Introduction ref={introductionRef} />
        <Skill ref={skillRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
};

export default Home;
