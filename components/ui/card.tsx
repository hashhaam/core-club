import type { ReactNode } from "react";

export type CardProps = {
  as?: "div" | "article" | "li";
  interactive?: boolean;
  children: ReactNode;
  className?: string;
};

const BASE_CLASSES =
  "rounded-cc-sm border border-hairline-strong bg-surface-2";

const INTERACTIVE_CLASSES =
  "transition-colors duration-[var(--cc-dur-fast)] ease-[var(--ease-cc)] hover:border-[rgba(185,190,198,0.5)] focus-within:border-gold";

export function Card({
  as = "div",
  interactive = false,
  children,
  className,
}: CardProps) {
  const classes = [
    BASE_CLASSES,
    interactive ? INTERACTIVE_CLASSES : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  switch (as) {
    case "article":
      return <article className={classes}>{children}</article>;
    case "li":
      return <li className={classes}>{children}</li>;
    default:
      return <div className={classes}>{children}</div>;
  }
}
