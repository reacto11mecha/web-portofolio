import { forwardRef } from "react";
import Icon from "@/components/Icon";
import type { iconType } from "@/components/Icon";
import styles from "@/styles/pages/home/Skill.module.css";

export interface CardItem {
  text: string;
  icon: iconType;
}

export interface CardInterface {
  title: string;
  items: CardItem[];
}

const cards: CardInterface[] = [
  {
    title: "Bahasa Pemrograman",
    items: [
      { text: "HTML", icon: "html" },
      { text: "CSS", icon: "css" },
      { text: "JavaScript", icon: "javascript" },
      { text: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Front End",
    items: [
      { text: "Bootstrap", icon: "bootstrap" },
      { text: "Picnic CSS", icon: "picnic" },
      { text: "React", icon: "react" },
      { text: "Solid", icon: "solid" },
      { text: "Next.js", icon: "next" },
    ],
  },
  {
    title: "Back End",
    items: [
      { text: "Express", icon: "express" },
      { text: "Fastify", icon: "fastify" },
      { text: "MongoDB", icon: "mongo" },
      { text: "Node.js", icon: "node" },
    ],
  },
  {
    title: "Tools",
    items: [
      { text: "Linux", icon: "mxlinux" },
      { text: "Git", icon: "git" },
      { text: "Atom", icon: "atom" },
      { text: "Visual Studio Code", icon: "visualstudiocode" },
    ],
  },
];

const Skill = forwardRef<HTMLElement>((props, ref) => (
  <section className={styles.container} ref={ref}>
    <h1 className={styles.heading}>Skill</h1>
    <div className="flex one two-700 four-1200">
      {cards.map((card) => (
        <div key={card.title}>
          <article className={`card ${styles.card}`}>
            <header>
              <h3 className={styles.cardHeading}>{card.title}</h3>

              <div className={`flex one ${styles.cardItemList}`}>
                {card.items.map((item) => (
                  <div key={item.text}>
                    <p className={styles.cardItem}>
                      <Icon icon={item.icon} style={{ width: "1em" }} />{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </header>
          </article>
        </div>
      ))}
    </div>
  </section>
));
Skill.displayName = "Skill";

export default Skill;
