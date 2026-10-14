import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CoffeeBand } from "@/components/CoffeeBand";
import { PacePicker } from "@/components/PacePicker";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { facts, faqs, paceGroups } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join a Run with BeltLine Pace Run Club. Every run is free, and every run has a walk group.",
};

const steps = [
  {
    title: "Show up",
    body: "There is no fee. The packet does not list a sign-up form. Come to the start on the Weekly runs page.",
  },
  {
    title: "Pick a group",
    body: facts.paceGroupsLine + ".",
  },
  {
    title: "Go the distance on the schedule",
    body: "Tuesday is 3 miles. Thursday is 5 miles. Saturday is 6 to 10 miles. Sunday is 2 miles.",
  },
  {
    title: "End at coffee",
    body: facts.coffee + ".",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageIntro
        title="Join"
        lede="If you have never run with a group, you are the person this page is for. You do not have to be fast, and you do not have to pay."
      >
        <Button href="/runs">See this week</Button>
      </PageIntro>

      <section className="bg-concrete">
        <div className={`${frame} grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24`}>
          <div>
            <h2 className="text-4xl leading-[0.95] sm:text-6xl">What showing up looks like</h2>
            <ol className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <li key={step.title} className="bg-mist px-5 py-5">
                  <p className="font-display text-lg">0{index + 1}</p>
                  <h3 className="mt-2 text-3xl leading-none">{step.title}</h3>
                  <p className="mt-3 text-lg">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative min-h-[360px] sm:min-h-[520px]">
            <Photo
              src="/photos/pack.jpg"
              alt="A group of smiling runners moving together on a trail."
            />
          </div>
        </div>
      </section>

      <section id="pace" className="bg-paper">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 className="text-4xl leading-[0.95] sm:text-6xl">Which group is yours?</h2>
          <p className="mt-5 max-w-2xl text-lg">
            {facts.paceGroupsLine}. Walk stays first. Tempo is a group, not a test.
          </p>
          <div className="mt-8 max-w-3xl">
            <PacePicker />
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {paceGroups.map((group) => (
              <li key={group.name} className="border border-mist bg-concrete px-4 py-4">
                <p className="font-display text-2xl leading-none">{group.name}</p>
                <p className="mt-2 text-lg">{group.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="bg-concrete">
        <div className={`${frame} py-16 lg:py-24`}>
          <h2 className="text-4xl leading-[0.95] sm:text-6xl">Questions people ask</h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="bg-paper px-5 py-6">
                <h3 className="text-3xl leading-tight">{faq.q}</h3>
                <p className="mt-3 text-lg">{faq.a}</p>
              </article>
            ))}
          </div>
          <article className="mt-4 bg-sunrise px-5 py-6 text-asphalt">
            <h3 className="text-3xl leading-tight">Evening runs</h3>
            <p className="mt-3 text-lg">
              Tuesday and Thursday start at 6:30 PM. {facts.bring}
            </p>
            <p className="mt-3 text-lg">{facts.buddyNote}</p>
          </article>
          <div className="mt-8">
            <Button href="/runs">See this week</Button>
          </div>
        </div>
      </section>

      <CoffeeBand />
    </>
  );
}
