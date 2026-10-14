import type { Metadata } from "next";
import { Button, buttonClass } from "@/components/Button";
import { BrandEditor } from "@/components/BrandEditor";
import { PaceCard } from "@/components/PaceCard";
import { PackageCard } from "@/components/PackageCard";
import { PageIntro } from "@/components/PageIntro";
import { RunRow } from "@/components/RunRow";
import { navItems, packages, paceGroups, palette, weeklyRuns } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Colors, type, and shared components for BeltLine Pace Run Club.",
};

export default function SystemPage() {
  const sampleRun = weeklyRuns[0];
  const samplePackage = packages[0];
  return (
    <>
      <PageIntro
        title="Design system"
        lede="One set of colors, three text styles, and shared components. Change the source and every page follows."
      >
        <Button href="/cover">Back to cover</Button>
      </PageIntro>

      <section className="bg-concrete">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Color</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {palette.map((color) => (
              <article key={color.hex} className="bg-paper px-5 py-5">
                <div
                  className="h-16 border border-mist"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="mt-4 text-3xl leading-none">{color.name}</h3>
                <p className="mt-2 font-display text-2xl leading-none">{color.hex}</p>
                <p className="mt-3 text-lg">{color.use}</p>
                <p className="mt-2 text-lg">{color.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Type</h2>
          <p className="mt-4 max-w-3xl text-lg">
            Oswald Bold for headings. Open Sans Regular for body. No other fonts.
            Body copy stays at 18px. Nothing on the site is under 16px.
          </p>
          <div className="mt-8 grid gap-4">
            <article className="bg-concrete px-5 py-6">
              <p className="font-display text-lg">Heading</p>
              <p className="mt-2 font-display text-5xl leading-[0.95] sm:text-6xl">
                Show up. We will pace you.
              </p>
            </article>
            <article className="bg-concrete px-5 py-6">
              <p className="font-display text-lg">Subheading</p>
              <p className="mt-2 font-display text-3xl leading-tight">
                Four pace groups
              </p>
            </article>
            <article className="bg-concrete px-5 py-6">
              <p className="font-display text-lg">Body</p>
              <p className="mt-2 text-lg">
                BeltLine Pace Run Club is a free, volunteer run club in Atlanta.
                It meets near the BeltLine in Old Fourth Ward, and every run ends
                with coffee.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-concrete">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Components</h2>
          <div className="mt-8 grid gap-6">
            <article className="bg-paper px-5 py-6">
              <h3 className="text-3xl leading-none">Navigation bar</h3>
              <p className="mt-3 text-lg">
                The bar at the top of this page is the shared component. Join a
                Run stays visible when the menu is closed, including on a phone.
              </p>
              <ul className="mt-4 flex flex-wrap gap-4">
                {navItems.map((item) => (
                  <li key={item.href} className="font-display text-lg">
                    {item.label}
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-paper px-5 py-6">
              <h3 className="text-3xl leading-none">Button</h3>
              <p className="mt-3 text-lg">
                Primary is Sunrise Yellow with Asphalt text. That pair is 9.54 to
                1. The packet asked for white text, which is 1.54 to 1, so it was
                logged and not used.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className={buttonClass.primary}>Join a Run</span>
                <span className={buttonClass.secondary}>See this week</span>
                <span className={buttonClass.ghost}>Partners</span>
              </div>
            </article>
            <article>
              <h3 className="text-3xl leading-none">Run row</h3>
              <div className="mt-4">
                <RunRow
                  when={sampleRun.day}
                  time={sampleRun.time}
                  title={`${sampleRun.name} · ${sampleRun.distance}`}
                  meta={`Starts at ${sampleRun.start}`}
                />
              </div>
            </article>
            <article>
              <h3 className="mb-4 text-3xl leading-none">Pace card</h3>
              <PaceCard
                name={paceGroups[0].name}
                detail={paceGroups[0].detail}
                index={0}
              />
            </article>
            <article>
              <h3 className="mb-4 text-3xl leading-none">Package card</h3>
              <div className="max-w-sm">
                <PackageCard
                  name={samplePackage.name}
                  price={samplePackage.price}
                  includes={samplePackage.includes}
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Client update path</h2>
          <p className="mt-4 max-w-3xl text-lg">
            Facts live in lib/content.ts. The button classes live in
            components/Button.tsx. Colors live in app/globals.css as variables.
            Set clientUpdate.active when the mid-build note arrives, and write
            the message there. Do not invent an update before it shows up.
          </p>
          <div className="mt-8">
            <BrandEditor />
          </div>
        </div>
      </section>
    </>
  );
}
