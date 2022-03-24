import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from "react";

export type darkModeStateType = boolean | undefined;
export interface contextInterface {
  isDarkTheme: darkModeStateType;
  setDarkMode: (theme: boolean) => void;
  toggleTheme: () => void;
}

export const DarkModeContext = createContext<contextInterface>(null!);

export interface propsType {
  children: React.ReactNode;
}
export default function Provider(props: propsType) {
  const [isDarkTheme, setDarkTheme] = useState<darkModeStateType>(undefined);

  const setDarkMode = useCallback((theme: boolean) => setDarkTheme(theme), []);
  const toggleTheme = useCallback(() => setDarkTheme((prev) => !prev), []);

  useEffect(() => {
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        // Set dark mode
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set light mode
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  const providerValue = useMemo(
    () => ({ isDarkTheme, setDarkMode, toggleTheme }),
    [isDarkTheme, setDarkMode, toggleTheme]
  );

  return <DarkModeContext.Provider value={providerValue} {...props} />;
}

export const useDarkMode = () => useContext(DarkModeContext);
