import { useEffect, useState } from "react";
import { BsSunFill, BsMoon } from "react-icons/bs"

const lists = [
    {
        name: "Tentang Saya",
        id: "introduction",
    },
    {
        name: "Skill",
        id: "skill",
    },
    {
        name: "Projects",
        id: "projects",
    },
    {
        name: "Hubungi Saya",
        id: "contacts",
    },
];

export const Navbar = () => {
    const [isDarkMode, setDarkMode] = useState(false);
    const [isListVisible, setListVisible] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        setDarkMode(
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        );

        const sectionSiapaKami = document.querySelector("#hero")!;

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    setIsTransparent(entry.isIntersecting);

                    if (entry.isIntersecting) setListVisible(false);
                }),
            options
        );

        observer.observe(sectionSiapaKami);

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDarkMode;

        setDarkMode(nextDark);

        if (nextDark) {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    };


    return (
        <nav
            className={`flex fixed top-0 flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg ${isTransparent ? "" : "bg-white dark:bg-neutral-950 dark:border-neutral-900 border-b border-solid"
                } z-10`}
        >
            <div className="h-[inherit]">
                <button
                    className="ml-2 h-[inherit] flex items-center tracking-wide dark:text-slate-50 font-play font-semibold text-xl gap-2"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/48118327?v=4&s=100"
                        className="rounded-xl"
                        alt="Foto Profil"
                        width={30.19}
                        height={30.19}
                    />
                    rmecha
                </button>
            </div>

            <button
                className="text-xl h-6 w-6 cursor-pointer md:hidden block lg:transform lg:-translate-y-1"
                onClick={() => {
                    setListVisible(!isListVisible);
                }}
            >
                &#8801;
            </button>

            <div
                className={`${isListVisible ? "" : "hidden"
                    } w-full md:flex md:items-center md:w-auto`}
            >
                <ul className={`pt-4 text-base ${isTransparent ? "text-gray-900 dark:text-slate-300" : "text-gray-500"} md:flex md:justify-between md:pt-0`}>
                    <a className="md:p-4 py-2 block hover:text-black dark:hover:text-white" href="/blog">
                        Blog
                    </a>

                    {lists.map((list) => (
                        <li key={list.id}>
                            <button
                                onClick={() => {
                                    const element = document.querySelector(`#${list.id}`);

                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });

                                        if (isListVisible) setListVisible(false);
                                    }
                                }}
                                className="md:p-4 py-2 block hover:text-black dark:hover:text-white"
                            >
                                {list.name}
                            </button>
                        </li>
                    ))}

                    <button className="md:p-4 py-2 block hover:text-black dark:hover:text-white" onClick={toggleTheme}>
                        {isDarkMode ? <BsMoon /> : <BsSunFill />}
                    </button>
                </ul>
            </div>
        </nav>
    );
};
