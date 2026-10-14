import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-12 items-center justify-center px-5 font-display text-lg leading-none transition-[filter,background-color] hover:brightness-95 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3";

export const buttonClass = {
  primary: `${base} bg-sunrise text-asphalt focus-visible:outline-asphalt`,
  secondary: `${base} bg-asphalt text-concrete focus-visible:outline-sunrise`,
  ghost: `${base} border border-asphalt bg-paper text-asphalt focus-visible:outline-asphalt`,
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonClass;
  className?: string;
}) {
  const classes = `${buttonClass[variant]} ${className}`.trim();
  const external = href.startsWith("mailto:") || href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
