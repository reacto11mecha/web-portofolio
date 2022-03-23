import { forwardRef } from "react";
import Icon from "@/components/Icon";
import type { iconType } from "@/components/Icon";
import styles from "@/styles/pages/home/Contact.module.css";

export interface socialMediaInterface {
  text: string;
  href: string;
  icon: iconType;
  style: string;
}

const socialMedia: socialMediaInterface[] = [
  {
    text: "Github",
    href: "https://github.com/reacto11mecha",
    icon: "github",
    style: styles.github,
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/reacto_mecha/",
    icon: "instagram",
    style: styles.instagram,
  },
  {
    text: "LinkedIn",
    href: "https://id.linkedin.com/in/ezra-khairan-permana-90a340206",
    icon: "linkedin",
    style: styles.linkedin,
  },
  {
    text: "Telegram",
    href: "https://t.me/reacto_mecha",
    icon: "telegram",
    style: styles.telegram,
  },
  {
    text: "Twitter",
    href: "https://twitter.com/reacto_mecha",
    icon: "twitter",
    style: styles.twitter,
  },
];

const Contact = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Hubungi Saya</h1>
    <p className={styles.text}>
      Anda bisa menghubungi saya melalui daftar sosial media dibawah ini.
    </p>
    <div
      className={`flex one two-600 three-700 five-900 grow ${styles.projectContainer}`}
    >
      {socialMedia.map((social) => (
        <div key={social.text}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            className={`button ${styles.anchorDefault} ${social.style}`}
          >
            <Icon icon={social.icon} /> {social.text}
          </a>
        </div>
      ))}
    </div>
  </section>
));
Contact.displayName = "Contact";

export default Contact;
