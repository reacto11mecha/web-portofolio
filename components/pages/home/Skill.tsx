import { forwardRef } from "react";
import styles from "@/styles/pages/home/Skill.module.css";

export interface CardItem {
  text: string;
}

export interface CardInterface {
  title: string;
  items: CardItem[];
}

const cards: CardInterface[] = [
  {
    title: "Bahasa Pemrograman",
    items: [
      { text: "HTML" },
      { text: "CSS" },
      { text: "JavaScript" },
      { text: "TypeScript" },
    ],
  },
  {
    title: "Front End",
    items: [
      { text: "Bootstrap" },
      { text: "Picnic CSS" },
      { text: "React" },
      { text: "Solid" },
      { text: "Next.js" },
    ],
  },
  {
    title: "Back End",
    items: [
      { text: "Express" },
      { text: "Fastify" },
      { text: "MongoDB" },
      { text: "Node.js" },
    ],
  },
  {
    title: "Tools",
    items: [
      { text: "Linux" },
      { text: "Git" },
      { text: "Atom" },
      { text: "VS Codium" },
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
                    <p className={styles.cardItem}>{item.text}</p>
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
