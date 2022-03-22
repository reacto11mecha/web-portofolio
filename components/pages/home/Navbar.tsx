import { useState, useEffect, useMemo, memo } from "react";
import type { MutableRefObject } from "react";

import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/styles/pages/home/Navbar.module.css";

const cx = classNames.bind(styles);

const FotoProfil = memo(function Pfp() {
  return (
    <Image
      className={`logo ${styles.imageProfile}`}
      src="https://avatars.githubusercontent.com/u/48118327?v=4"
      alt="Foto Profil"
      width={30.19}
      height={30.19}
    />
  );
});

type refType = MutableRefObject<HTMLElement>;

export interface NavbarInterface {
  headerRef: refType;
  introductionRef: refType;
  skillRef: refType;
  projectsRef: refType;
}

export interface NavigationInterface {
  text: string;
  ref: refType;
}

export default function Navbar(props: NavbarInterface) {
  const [transparan, setTransparan] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(false);
  //   const { isDark, themeToggler } = useContext(DarkModeContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio <= 0.85) setTransparan(false);
            else setTransparan(true);
          }
        }),
      { threshold: [1, 0.89, 0.86, 0.85, 0.8, 0.75, 0.7, 0.5, 0.25, 0] }
    );

    observer.observe(props.headerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigation = useMemo<NavigationInterface[]>(
    () => [
      {
        text: "Tentang Saya",
        ref: props.introductionRef,
      },
      {
        text: "Skill",
        ref: props.skillRef,
      },
      {
        text: "Projects",
        ref: props.projectsRef,
      },
    ],
    []
  );

  return (
    <nav className={cx({ transparan })}>
      <a
        href="#"
        className="brand"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FotoProfil />
        <span className={styles.spanNama}>Ezra Khairan Permana</span>
      </a>
      <input
        id="bmenub"
        type="checkbox"
        className="show"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label htmlFor="bmenub" className="burger pseudo button">
        &#8801;
      </label>

      <div className={`menu ${styles.menu}`}>
        {navigation.map((nav) => (
          <a
            key={nav.text}
            className={`pseudo button icon-picture  ${cx({
              transparentDarker: transparan,
              regular: transparan,
            })}`}
            onClick={() => {
              nav.ref.current.scrollIntoView({
                behavior: "smooth",
              });

              if (checked) setChecked(false);
            }}
          >
            {nav.text}
          </a>
        ))}

        <a
          className={`pseudo button icon-picture ${cx({
            transparentDarker: transparan,
            regular: transparan,
          })}`}
        >
          Hubungi Saya
        </a>

        <label className={styles.switch}>
          <input
            type="checkbox"
            // checked={isDark}
            // onChange={themeToggler}
            className={styles.checkboxInput}
          />
          <span className={cx({ slider: true, sliderRound: true })}></span>
        </label>
      </div>
    </nav>
  );
}
