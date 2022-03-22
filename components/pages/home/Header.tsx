import { useEffect, useRef, useMemo, forwardRef, memo } from "react";
import styles from "@/styles/pages/home/Header.module.css";
import classNames from "classnames/bind";
import Typed from "typed.js";

// import heroLight from "/img/hero_bg.jpg?webp";
// import heroDark from "/img/hero_bg-dark.jpg?webp";

const cx = classNames.bind(styles);

const Header = forwardRef<HTMLElement>((props, ref) => {
  //   const { isDark } = useContext(DarkModeContext);
  const typedElement = useRef<HTMLHeadingElement>(null!);

  //   const url = useMemo(() => (isDark ? heroDark : heroLight), [isDark]);
  const url = useMemo(() => "/img/hero_bg.jpg", []);

  useEffect(() => {
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

  return (
    <header
      className={cx({ header: true })}
      style={{
        transition: "all 0.50s linear",
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
      }}
      ref={ref}
    >
      <div className={styles.content}>
        <h1 ref={typedElement}></h1>
      </div>
    </header>
  );
});
Header.displayName = "Header";

export default memo(Header);
