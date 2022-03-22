import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";

import Navbar from "@/components/pages/home/Navbar";
import Header from "@/components/pages/home/Header";
import Introduction from "@/components/pages/home/Introduction";
import Skill from "@/components/pages/home/Skill";

const Home: NextPage = () => {
  const headerRef = useRef(null!);
  const introductionRef = useRef(null!);
  const skillRef = useRef(null!);

  return (
    <div>
      <Head>
        <title>Ezra Khairan Permana | Portofolio</title>
        <meta
          name="description"
          content="Website Portofolio Ezra Khairan Permana"
        />
      </Head>
      <Navbar headerRef={headerRef} introductionRef={introductionRef} skillRef={skillRef} />
      <main>
        <Header ref={headerRef} />
        <Introduction ref={introductionRef} />
        <Skill ref={skillRef} />
      </main>
    </div>
  );
};

export default Home;
