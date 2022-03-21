import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "@/components/pages/home/Navbar";
import Header from "@/components/pages/home/Header";
import Introduction from "@/components/pages/home/Introduction";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ezra Khairan Permana | Portofolio</title>
        <meta
          name="description"
          content="Website Portofolio Ezra Khairan Permana"
        />
      </Head>
      <Navbar />
      <main>
        <Header />
        <Introduction />
      </main>
    </div>
  );
};

export default Home;
