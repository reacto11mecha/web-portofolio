export type iconType =
    | "express"
    | "picnic"
    | "solid"
    | "fastify"
    | "git"
    | "instagram"
    | "github"
    | "visualstudiocode"
    | "atom"
    | "mxlinux"
    | "mongo"
    | "node"
    | "next"
    | "react"
    | "bootstrap"
    | "typescript"
    | "javascript"
    | "css"
    | "html"
    | "web"
    | "telegram"
    | "twitter"
    | "linkedin"

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
            { text: "MX Linux", icon: "mxlinux" },
            { text: "Git", icon: "git" },
            { text: "Atom", icon: "atom" },
            { text: "Visual Studio Code", icon: "visualstudiocode" },
        ],
    },
];

export const Skill = () => (
    <section id="skill" className="h-screen px-6 sm:px-14 sm:pt-28 md:px-16">
        <h1 className="font-bold text-5xl">Skill</h1>

        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14"
        >
            {cards.map((card) => (
                <div className="rounded border p-10 flex flex-col gap-5" key={card.title}>
                    <h3 className="font-bold text-2xl">{card.title}</h3>

                    <div className="flex flex-col gap-1">
                        {card.items.map((item) => (
                            <div key={item.text} >
                                <p className="text-lg">
                                    <svg className={`icon icon-${item.icon}-me`}>
                                        <use xlinkHref={`#icon-${item.icon}-me`}></use>
                                    </svg>{" "}{item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
)