import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BASE_CLASSES =
  "t-button inline-flex min-h-[44px] items-center justify-center rounded-cc-sm border px-[30px] py-[14px] transition-[background-color,border-color,color,box-shadow] duration-[var(--cc-dur-fast)] ease-[var(--ease-cc)]";

const VARIANT_CLASSES = {
  primary:
    "border-[rgba(200,162,74,0.55)] bg-[rgba(200,162,74,0.12)] text-gold-lift shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-gold hover:bg-gold hover:text-core-black hover:shadow-[0_0_32px_rgba(200,162,74,0.25)]",
  secondary:
    "border-[rgba(244,246,248,0.20)] bg-[rgba(244,246,248,0.06)] text-core-white hover:border-[rgba(244,246,248,0.34)] hover:bg-[rgba(244,246,248,0.12)]",
  ghost:
    "border-[rgba(185,190,198,0.26)] bg-transparent text-titanium hover:border-[rgba(185,190,198,0.50)] hover:text-core-white",
} as const;

const DISABLED_CLASSES = "pointer-events-none cursor-not-allowed opacity-50";
const ENABLED_CLASSES = "cursor-pointer";

export function Button({
  variant = "primary",
  href,
  children,
  className,
  disabled = false,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    disabled ? DISABLED_CLASSES : ENABLED_CLASSES,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const external = href.startsWith("http");

    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...buttonProps}
      type={type}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
