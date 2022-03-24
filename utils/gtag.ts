import { minify } from "terser";

export default async function gtagScriptInitializer(): Promise<string> {
  const code = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname
    });
  `;

  if (process.env.NODE_ENV === "development") return code;
  else return minify(code).then(({ code }) => code as unknown as string);
}
