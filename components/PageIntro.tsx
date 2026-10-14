import type { ReactNode } from "react";
import { club } from "@/lib/content";
import { frame } from "@/lib/ui";

export function PageIntro({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-mist bg-paper">
      <div className={`${frame} py-14 lg:py-20`}>
        <h1 className="max-w-4xl text-5xl leading-[0.95] text-asphalt sm:text-7xl">
          <span className="mb-4 block font-display text-lg leading-none sm:text-xl">
            {club.name}
          </span>
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{lede}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}
