import Link from "next/link";
import { Button } from "@/components/Button";
import { CoffeeBand } from "@/components/CoffeeBand";
import { PaceCard } from "@/components/PaceCard";
import { Photo } from "@/components/Photo";
import {
  club,
  facts,
  gear,
  packages,
  paceGroups,
  specialRuns,
  weeklyRuns,
} from "@/lib/content";
import { frame } from "@/lib/ui";

export default function HomePage() {
  return (
    <>
      <section className="bg-concrete">
        <div className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
            <h1 className="text-asphalt">
              <span className="block font-display text-lg leading-none sm:text-xl">
                {club.name}
              </span>
              <span className="mt-4 block text-5xl leading-[0.92] sm:text-7xl">
                Show up.
              </span>
              <span className="block text-5xl leading-[0.92] sm:text-7xl">
                We will pace you.
              </span>
            </h1>
            <span className="mt-6 block h-2 w-24 bg-sunrise" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{facts.about}</p>
            <p className="mt-4 max-w-xl font-display text-2xl leading-tight">
              You do not have to be fast.
            </p>
            <ul className="mt-6 max-w-xl space-y-2">
              <li className="border-l-4 border-sunrise pl-3 font-display text-xl leading-tight">
                15 runners at the start last year
              </li>
              <li className="border-l-4 border-sunrise pl-3 font-display text-xl leading-tight">
                about 60 regulars now
              </li>
              <li className="border-l-4 border-sunrise pl-3 font-display text-xl leading-tight">
                a goal of 200 this year
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/join">Join a Run</Button>
              <Button href="/runs" variant="ghost">
                See this week
              </Button>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[680px]">
            <Photo
              src="/photos/social.jpg"
              alt="Two people jogging side by side on a city path and smiling."
              priority
              className="object-[62%_center]"
            />
            <p className="absolute inset-x-0 bottom-0 bg-sunrise px-4 py-3 text-center font-display text-2xl leading-none text-asphalt">
              Free to join
            </p>
          </div>
        </div>
      </section>

      <section className="on-asphalt bg-asphalt text-concrete" aria-label="This week">
        <div className="mx-auto grid w-full max-w-[1440px] gap-px bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {weeklyRuns.map((run) => (
            <Link
              key={run.day}
              href="/runs"
              className="bg-asphalt px-4 py-6 sm:px-6 lg:px-8"
            >
              <p className="font-display text-lg text-sunrise">{run.day}</p>
              <p className="mt-2 font-display text-4xl leading-none sm:text-5xl">{run.time}</p>
              <p className="mt-3 text-lg">
                {run.name} · {run.distance}
              </p>
              <p className="text-lg">{run.start}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 className="text-4xl leading-[0.95] sm:text-6xl">Is this for you?</h2>
          <span className="mt-5 block h-2 w-24 bg-sunrise" aria-hidden="true" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="bg-mist px-5 py-6">
              <h3 className="text-3xl leading-none">Do I need to be fast?</h3>
              <p className="mt-3 text-lg">{facts.fastAnswer}</p>
            </article>
            <article className="bg-mist px-5 py-6">
              <h3 className="text-3xl leading-none">Does it cost money?</h3>
              <p className="mt-3 text-lg">{facts.costAnswer}</p>
            </article>
            <article className="bg-mist px-5 py-6">
              <h3 className="text-3xl leading-none">What should I bring?</h3>
              <p className="mt-3 text-lg">{facts.bring}</p>
            </article>
          </div>
          <p className="mt-6 text-lg">
            <Link href="/join#faq" className="text-trail underline decoration-2 underline-offset-4">
              Read the full answers
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-concrete" aria-labelledby="pace-heading">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 id="pace-heading" className="max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
            Four pace groups
          </h2>
          <p className="mt-5 max-w-3xl text-lg">{facts.paceGroupsLine}.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paceGroups.map((group, index) => (
              <PaceCard
                key={group.name}
                name={group.name}
                detail={group.detail}
                index={index}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/join#pace">Find your group</Button>
          </div>
        </div>
      </section>

      <CoffeeBand />

      <section className="bg-concrete">
        <div className={`${frame} py-16 lg:py-24`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl leading-[0.95] sm:text-6xl">Special runs this fall</h2>
            <Button href="/runs#specials" variant="ghost">
              See the list
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 lg:grid-cols-2">
            {specialRuns.map((run) => (
              <li key={`${run.date}-${run.event}`} className="bg-mist px-5 py-5">
                <p className="font-display text-2xl leading-tight">{run.event}</p>
                <p className="mt-2 text-lg">
                  {run.date} · {run.time}
                </p>
                <p className="text-lg">Starts at {run.start}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24`}>
          <div>
            <h2 className="text-4xl leading-[0.95] sm:text-6xl">Local partners</h2>
            <p className="mt-5 text-lg">
              The club wants 2 to 3 local partners. All three package prices are
              on the Partners page.
            </p>
            <div className="mt-6">
              <Button href="/partners">See partner packages</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className="bg-mist px-4 py-5">
                <h3 className="text-2xl leading-none">{item.name}</h3>
                <p className="mt-3 font-display text-4xl leading-none">{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-concrete">
        <div className={`${frame} flex flex-wrap items-end justify-between gap-6 py-16 lg:py-20`}>
          <div>
            <h2 className="text-4xl leading-[0.95] sm:text-5xl">Gear</h2>
            <p className="mt-4 text-lg">
              {gear.map((item) => `${item.name}, ${item.price}`).join(". ")}.
            </p>
          </div>
          <Button href="/gear" variant="ghost">
            See gear
          </Button>
        </div>
      </section>
    </>
  );
}
