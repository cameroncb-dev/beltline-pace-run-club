import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { HatMark, ShirtMark } from "@/components/GearMarks";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { gear } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Gear",
  description: "Club shirt, $25. Club hat, $18. Every run is free.",
};

const marks = [ShirtMark, HatMark];

export default function GearPage() {
  return (
    <>
      <PageIntro
        title="Gear"
        lede="Two club items have prices in the packet. The runs themselves are free."
      >
        <Button href="/join">Join a Run</Button>
      </PageIntro>

      <section className="bg-concrete">
        <div className={`${frame} py-16 lg:py-24`}>
          <div className="grid gap-4 lg:grid-cols-2">
            {gear.map((item, index) => {
              const Mark = marks[index];
              return (
                <article key={item.name} className="bg-paper px-5 py-8">
                  <Mark />
                  <p className="text-base">
                    Illustration. The packet did not include a product photo.
                  </p>
                  <h2 className="mt-6 text-4xl leading-none sm:text-5xl">{item.name}</h2>
                  <p className="mt-4 font-display text-7xl leading-none">{item.price}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 grid items-center gap-8 bg-mist px-5 py-6 lg:grid-cols-[1fr_280px]">
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl">Where to get it</h2>
              <p className="mt-3 text-lg">
                The packet lists Club shirt, $25 and Club hat, $18. It does not
                say where to buy them. Ask a volunteer leader at a run.
              </p>
              <div className="mt-5">
                <Button href="/runs">See this week</Button>
              </div>
            </div>
            <div className="relative min-h-[220px]">
              <Photo
                src="/photos/shoes.jpg"
                alt="A runner tying a light-colored shoe before heading out."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
