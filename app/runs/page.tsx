import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { RunRow } from "@/components/RunRow";
import { facts, specialRuns, weeklyRuns } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Weekly runs",
  description:
    "Tuesday, Thursday, Saturday, and Sunday runs for BeltLine Pace Run Club, plus special runs this fall.",
};

export default function RunsPage() {
  return (
    <>
      <PageIntro
        title="Weekly runs"
        lede="Regulars can read the day, the time, and the start without opening anything else. First timers can use the same list."
      >
        <Button href="/join">Join a Run</Button>
      </PageIntro>

      <div className="relative h-56 sm:h-80">
        <Photo
          src="/photos/crowd.jpg"
          alt="A large group of runners moving together down a road."
          sizes="100vw"
          className="object-[center_30%]"
        />
      </div>

      <section id="schedule" className="bg-concrete" aria-labelledby="week-heading">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 id="week-heading" className="text-4xl leading-[0.95] sm:text-6xl">
            This week
          </h2>
          <div className="mt-8 grid gap-3">
            {weeklyRuns.map((run) => (
              <RunRow
                key={run.day}
                when={run.day}
                time={run.time}
                title={`${run.name} · ${run.distance}`}
                meta={`Starts at ${run.start}`}
              />
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="bg-paper px-5 py-5">
              <h3 className="text-2xl leading-tight">Evening runs</h3>
              <p className="mt-3 text-lg">
                Tuesday and Thursday start at 6:30 PM. {facts.bring}
              </p>
              <p className="mt-3 text-lg">{facts.buddyNote}</p>
            </article>
            <article className="bg-paper px-5 py-5">
              <h3 className="text-2xl leading-tight">Sunday start</h3>
              <p className="mt-3 text-lg">
                Recovery Walk or Jog starts at Eastside Trailhead. {facts.coffee}.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="specials" className="bg-paper" aria-labelledby="specials-heading">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 id="specials-heading" className="text-4xl leading-[0.95] sm:text-6xl">
            Special runs this fall
          </h2>
          <p className="mt-5 max-w-3xl text-lg">
            The packet lists Fall Kickoff Long Run and Charity 5K for the Food
            Bank on Saturday, October 17, both at 8:00 AM at Bean Counter Coffee.
            The weekly Saturday long run is also 8:00 AM at Bean Counter Coffee.
            All three lines are shown as written.
          </p>
          <div className="mt-8 grid gap-3">
            {specialRuns.map((run) => (
              <RunRow
                key={`${run.date}-${run.event}`}
                when={run.date}
                time={run.time}
                title={run.event}
                meta={`Starts at ${run.start}`}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/join">Join a Run</Button>
          </div>
        </div>
      </section>
    </>
  );
}
