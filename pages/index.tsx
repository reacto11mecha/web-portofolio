import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";

import Navbar from "@/components/pages/home/Navbar";
import Header from "@/components/pages/home/Header";
import Introduction from "@/components/pages/home/Introduction";

const Home: NextPage = () => {
  const introductionRef = useRef(null!);

  return (
    <div>
      <Head>
        <title>Ezra Khairan Permana | Portofolio</title>
        <meta
          name="description"
          content="Website Portofolio Ezra Khairan Permana"
        />
      </Head>
      <Navbar introductionRef={introductionRef} />
      <main>
        <Header />
        <Introduction ref={introductionRef} />
      </main>
    </div>
  );
};

export default Home;
