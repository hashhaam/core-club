import type { ReactNode } from "react";

export type CardProps = {
  as?: "div" | "article" | "li";
  interactive?: boolean;
  children: ReactNode;
  className?: string;
};

const BASE_CLASSES =
  "rounded-cc-md border border-[rgba(185,190,198,0.10)] bg-surface-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

const INTERACTIVE_CLASSES =
  "transition-[transform,border-color] duration-[var(--cc-dur)] ease-[var(--ease-cc)] hover:[transform:translateY(-4px)] hover:border-[rgba(185,190,198,0.22)] motion-reduce:hover:[transform:translateY(0)]";

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
