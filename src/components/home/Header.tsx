import { useEffect, useRef, } from "react";
import Typed from "typed.js";

export const Header = () => {
    const typedElement = useRef<HTMLHeadingElement>(null!);

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
        <header id="hero" className="h-screen bg-cover bg-header dark:bg-header-dark flex justify-center items-center">
            <h1 className="select-none text-4xl" ref={typedElement}></h1>
        </header>
    );
};