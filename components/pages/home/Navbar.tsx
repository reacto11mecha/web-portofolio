import Image from "next/image";
import { useState, memo } from "react";
import classNames from "classnames/bind";
import styles from "@/styles/pages/home/Navbar.module.css";

const cx = classNames.bind(styles);

const FotoProfil = memo(function Pfp() {
  return (
    <Image
      className={`logo ${styles.imageProfile}`}
      src="https://avatars.githubusercontent.com/u/48118327?v=4&s=31"
      alt="Foto Profil"
      width={30.19}
      height={30.19}
    />
  );
});

export default function Navbar() {
  const [transparan, setTransparan] = useState(false);
  //   const { isDark, themeToggler } = useContext(DarkModeContext);

  return (
    <nav className={cx({ transparan })}>
      <a href="#" className="brand">
        <FotoProfil />
        <span className={styles.spanNama}>Ezra Khairan Permana</span>
      </a>
      <input id="bmenub" type="checkbox" className="show" />
      <label htmlFor="bmenub" className="burger pseudo button">
        &#8801;
      </label>
      <div className="menu">
        <a href="#" className="pseudo button icon-picture">
          Botan 1
        </a>
        <a href="#" className="pseudo button icon-picture">
          Botan 2
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
