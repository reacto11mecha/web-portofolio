import type { AppProps } from "next/app";

import "picnic";
import "@fontsource/lato";
import "@fontsource/poppins";
import "@/styles/globals.css";

import DarkModeProvider from "@/context/darkMode";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
