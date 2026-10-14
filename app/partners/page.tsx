import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PackageCard } from "@/components/PackageCard";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { club, facts, leaders, packages } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner packages for BeltLine Pace Run Club: Pacer $150, Mile Marker $400, and Title Partner $900.",
};

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        title="Partners"
        lede="The club is looking for 2 to 3 local partners. The three prices, what each one includes, and who to email are on this page."
      >
        <Button href={`mailto:${club.partnerEmail}`} className="max-w-full whitespace-normal text-center">
          {club.partnerEmail}
        </Button>
      </PageIntro>

      <section className="bg-concrete">
        <div className={`${frame} grid items-center gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20`}>
          <div>
            <p className="text-lg">{facts.leadersLine}</p>
            <p className="mt-4 text-lg">
              About 60 regulars run with the club now. It started last year with
              15 runners, with a goal of 200 this year.
            </p>
          </div>
          <div className="relative min-h-[280px] sm:min-h-[360px]">
            <Photo
              src="/photos/road.jpg"
              alt="A person running on an open road under a clear sky."
              className="object-[center_80%]"
            />
          </div>
        </div>
      </section>

      <section id="packages" className="bg-paper">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 className="text-4xl leading-[0.95] sm:text-6xl">Partner packages</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {packages.map((item) => (
              <PackageCard
                key={item.name}
                name={item.name}
                price={item.price}
                includes={item.includes}
              />
            ))}
          </div>
          <div className="mt-8 border border-mist bg-paper px-5 py-6">
            <h3 className="text-3xl leading-none">How to get in touch</h3>
            <p className="mt-3 text-lg">
              Email{" "}
              <a
                href={`mailto:${club.partnerEmail}`}
                className="text-trail underline decoration-2 underline-offset-4"
              >
                {club.partnerEmail}
              </a>
              . That is the only contact in the packet.
            </p>
            <div className="mt-5">
              <Button href={`mailto:${club.partnerEmail}`}>{club.partnerEmail}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-concrete" aria-labelledby="leaders-heading">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 id="leaders-heading" className="text-4xl leading-[0.95] sm:text-6xl">
            Who runs the club
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.name} className="bg-mist px-5 py-6">
                <h3 className="text-3xl leading-tight">{leader.name}</h3>
                <p className="mt-2 text-lg">{leader.role}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-lg">
            Title Partner includes a table at the Gear Swap. That run is on the
            Weekly runs page.
          </p>
          <div className="mt-5">
            <Button href="/runs#specials" variant="ghost">
              See the Gear Swap
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
