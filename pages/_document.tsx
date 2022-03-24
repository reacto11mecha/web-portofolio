import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { minify } from "terser";

function setInitialColorMode() {
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedPreferenceMode === "string";

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    // Check the current preference
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }

    return "light";
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty("--initial-color-mode", currentColorMode);

  if (currentColorMode === "dark")
    document.documentElement.setAttribute("data-theme", "dark");
}

const themeInitializerScript = async (): Promise<string> => {
  const code = setInitialColorMode.toString();
  const runner = `(function() {
    ${code}
    setInitialColorMode();
  })()
  `;

  if (process.env.NODE_ENV === "development") return runner;
  else return minify(runner).then(({ code }) => code as unknown as string);
};

interface Props {
  themeScript: string;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const themeScript = await themeInitializerScript();

    return { ...initialProps, themeScript };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.themeScript,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
