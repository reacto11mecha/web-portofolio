import { useEffect, useRef, useState, forwardRef, memo } from "react";
import styles from "@/styles/pages/home/Header.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Typed from "typed.js";

import { useDarkMode } from "@/context/darkMode";

const cx = classNames.bind(styles);

export type imageType = "/img/hero_bg.jpg" | "/img/hero_bg-dark.jpg";
const getImage = (isDark: boolean): imageType =>
  isDark ? "/img/hero_bg-dark.jpg" : "/img/hero_bg.jpg";

const Header = forwardRef<HTMLElement>((props, ref) => {
  const [url, setUrl] = useState<imageType>("/img/hero_bg.jpg");
  const { isDarkTheme } = useDarkMode();

  const typedElement = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    setUrl(getImage(isDarkTheme as unknown as boolean));
    const type = new Typed(typedElement.current, {
      strings: [
        "reacto_mecha!",
        "reacto_mecha",
        "reacto11mecha",
        "Ezra Khairan Permana",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      type.destroy();
    };
  }, []);

  useEffect(
    () => setUrl(getImage(isDarkTheme as unknown as boolean)),
    [isDarkTheme]
  );

  return (
    <header className={cx({ header: true })} ref={ref}>
      <Image
        src={url}
        alt="Gambar background"
        layout="fill"
        objectFit="cover"
        objectPosition={"center"}
        className={cx({ backgroundImage: true })}
      />
      <div className={styles.content}>
        <h1 className={cx({ heading: true })} ref={typedElement}></h1>
      </div>
    </header>
  );
});
Header.displayName = "Header";

export default memo(Header);
