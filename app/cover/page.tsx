import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { aiUse, submission, walkthrough } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Cover",
  description: "Design Derby cover page for Option A, BeltLine Pace Run Club.",
};

export default function CoverPage() {
  return (
    <>
      <PageIntro
        title="Option A"
        lede="This is the project cover for judging. The club site starts at Home. Say the option out loud before the walkthrough."
      >
        <Button href="/">Open the club site</Button>
        <Button href="/decisions" variant="ghost">
          Decision log
        </Button>
      </PageIntro>

      <section className="bg-concrete">
        <div className={`${frame} grid gap-4 py-16 lg:grid-cols-2 lg:py-20`}>
          <article className="bg-paper px-5 py-6">
            <h2 className="text-3xl leading-none">What we picked</h2>
            <dl className="mt-5 space-y-4 text-lg">
              <div>
                <dt className="font-display text-lg">Option</dt>
                <dd>A, {submission.client}</dd>
              </div>
              <div>
                <dt className="font-display text-lg">Main visitor</dt>
                <dd>{submission.mainVisitor}</dd>
              </div>
              <div>
                <dt className="font-display text-lg">Goal</dt>
                <dd>
                  {submission.goal} Primary action: {submission.primaryAction}.
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg">Also served</dt>
                <dd>
                  Regular runners use Weekly runs for times and starts. Local
                  partners use Partners for the three prices and the email.
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg">Look</dt>
                <dd>{submission.adjectives}. Big type, wide space, real photos of people running.</dd>
              </div>
            </dl>
          </article>
          <article className="bg-sunrise px-5 py-6 text-asphalt">
            <h2 className="text-3xl leading-none">Why this option</h2>
            <p className="mt-4 text-lg">
              A nervous first timer needs one obvious next step, a clear answer
              on price, and proof that a slow pace still belongs. The packet
              also disagrees with itself in ways a team can defend. That is the
              work.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Team</h2>
          <p className="mt-4 max-w-3xl text-lg">
            Team name on the cover: {submission.teamName}. No personal names were
            invented. Before you present, put your names in{" "}
            <span className="font-display">lib/content.ts</span> under submission.members.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {submission.members.map((member) => (
              <li key={member.role} className="bg-mist px-4 py-4">
                <p className="font-display text-2xl leading-tight">
                  {member.name || "Name not entered"}
                </p>
                <p className="mt-1 text-lg">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-concrete">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">AI use log</h2>
          <p className="mt-4 max-w-3xl text-lg">
            AI use is disclosed here so it is not a surprise in questions.
          </p>
          <div className="mt-6 grid gap-4">
            {aiUse.map((entry) => (
              <article key={entry.usedFor} className="bg-paper px-5 py-5">
                <h3 className="text-2xl leading-tight">{entry.tool}</h3>
                <p className="mt-2 text-lg">{entry.usedFor}</p>
                <p className="mt-2 text-lg">Where: {entry.where}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Three minute walkthrough</h2>
          <p className="mt-4 max-w-3xl text-lg">
            Split the lines across the team. Start by naming Option A.
          </p>
          <ol className="mt-6 grid gap-3">
            {walkthrough.map((beat) => (
              <li key={beat.time} className="grid gap-2 bg-mist px-5 py-4 sm:grid-cols-[6rem_8rem_1fr] sm:items-start">
                <p className="font-display text-2xl leading-none">{beat.time}</p>
                <p className="font-display text-lg">{beat.who}</p>
                <p className="text-lg">{beat.say}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/system">Design system</Button>
            <Button href="/decisions" variant="ghost">
              Decision log
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
