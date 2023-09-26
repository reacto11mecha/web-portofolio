import Icon, { type iconType } from "@/components/Icon";

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
            { text: "Tailwind CSS", icon: "tailwindcss" },
            { text: "Picnic CSS", icon: "picnic" },
            { text: "React", icon: "react" },
            { text: "Solid", icon: "solid" },
            { text: "Next.js", icon: "next" },
            { text: "Astro.js", icon: "astro" }
        ],
    },
    {
        title: "Back End",
        items: [
            { text: "Express", icon: "express" },
            { text: "Fastify", icon: "fastify" },
            { text: "MongoDB", icon: "mongo" },
            { text: "Node.js", icon: "node" },
            { text: "tRPC", icon: "trpc" },
            { text: "MySQL", icon: "mysql" }
        ],
    },
    {
        title: "Tools",
        items: [
            { text: "Git", icon: "git" },
            { text: "Github", icon: "github" },
            { text: "Neovim", icon: "neovim" },
            { text: "Visual Studio Code", icon: "visualstudiocode" },
        ],
    },
];

export const Skill = () => (
    <section id="skill" className="h-screen px-6 pt-28 sm:px-14 sm:pt-28 md:px-16">
        <h1 className="font-bold font-poppins text-5xl">Skill</h1>

        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14"
        >
            {cards.map((card) => (
                <div className="rounded border dark:bg-neutral-900 dark:border-neutral-900 p-10 flex flex-col gap-5 dark:shadow-neutral-500 shadow transition hover:shadow-lg hover:-translate-y-3" key={card.title}>
                    <h3 className="font-bold font-poppins text-2xl">{card.title}</h3>

                    <div className="flex flex-col gap-2">
                        {card.items.map((item) => (
                            <div key={item.text}>
                                <p className="font-lato text-lg flex gap-3 items-center">
                                    <Icon icon={item.icon} />{item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
)