import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { contentChecklist, decisions } from "@/lib/content";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Decision log",
  description:
    "Conflicts in the BeltLine Pace Run Club packet, what the team decided, and why.",
};

export default function DecisionsPage() {
  return (
    <>
      <PageIntro
        title="Decision log"
        lede="Each item is a conflict, a gap, or a question in the packet. The public pages keep the content-pack facts. They do not quietly adopt a conflicting email."
      >
        <Button href="/cover">Cover</Button>
        <Button href="/runs" variant="ghost">
          Check the schedule
        </Button>
      </PageIntro>

      <section className="bg-concrete">
        <div className={`${frame} grid gap-4 py-16 lg:py-20`}>
          {decisions.map((item) => (
            <article key={item.id} id={`decision-${item.id}`} className="bg-paper px-5 py-6">
              <p className="font-display text-lg">Conflict {item.id}</p>
              <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">{item.title}</h2>
              <h3 className="mt-5 text-xl leading-tight">What did not line up</h3>
              <p className="mt-2 text-lg">{item.conflict}</p>
              <h3 className="mt-5 text-xl leading-tight">What we decided</h3>
              <p className="mt-2 text-lg">{item.decision}</p>
              <h3 className="mt-5 text-xl leading-tight">Why</h3>
              <p className="mt-2 text-lg">{item.why}</p>
              <p className="mt-4 text-lg">Where it shows: {item.where}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${frame} py-16 lg:py-20`}>
          <h2 className="text-4xl leading-none sm:text-5xl">Content checklist</h2>
          <p className="mt-4 max-w-3xl text-lg">
            A researcher can use this list while clicking the site. If a fact is
            missing, it is a miss. If a fact was changed, it is a miss.
          </p>
          <ul className="mt-6 grid gap-3">
            {contentChecklist.map((row) => (
              <li key={row.fact} className="grid gap-1 bg-mist px-5 py-4 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
                <p className="text-lg">{row.fact}</p>
                <p className="font-display text-lg">{row.where}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
