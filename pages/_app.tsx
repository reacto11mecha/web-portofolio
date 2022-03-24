import type { AppProps, NextWebVitalsMetric } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "picnic";
import "@fontsource/lato";
import "@fontsource/poppins";
import "@/styles/globals.css";

import DarkModeProvider from "@/context/darkMode";

declare global {
  interface Window {
    gtag: any;
  }
}

const ga = {
  pageview: (url: string) =>
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    }),
  event: ({ action, params }: { action: any; params: any }) =>
    window.gtag("event", action, params),
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => ga.pageview(url);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  window.gtag("event", name, {
    event_category: label === "web-vital" ? "Web Vitals" : "Next.js metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
}

export default MyApp;
