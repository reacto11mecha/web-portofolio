export type iconType =
  | "picnic"
  | "solid"
  | "fastify"
  | "express"
  | "git"
  | "twitter"
  | "telegram"
  | "linkedin"
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
  | "web";

export interface IconInterface {
  icon: iconType;
}

export default function Icon(props: IconInterface) {
  return (
    <svg className={`icon icon-${props.icon}-me`}>
      <use xlinkHref={`#symbol-defs_svg__icon-${props.icon}-me`}></use>
    </svg>
  );
}
