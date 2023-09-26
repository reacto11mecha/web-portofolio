export type iconType =
    | "mysql"
    | "tailwindcss"
    | "astro"
    | "neovim"
    | "prisma"
    | "trpc"
    | "css"
    | "express"
    | "fastify"
    | "git"
    | "github"
    | "html"
    | "instagram"
    | "javascript"
    | "linkedin"
    | "mongo"
    | "next"
    | "node"
    | "picnic"
    | "react"
    | "solid"
    | "telegram"
    | "typescript"
    | "visualstudiocode"
    | "web"

export interface IconInterface {
    icon: iconType;
    style?: React.CSSProperties;
}

export default function Icon(props: IconInterface) {
    return (
        <svg className={`icon icon-${props.icon}-me`} {...props}>
            <use xlinkHref={`#icon-${props.icon}-me`}></use>
        </svg>
    );
}