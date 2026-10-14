import { facts, leaders } from "@/lib/content";
import { frame } from "@/lib/ui";
import { Photo } from "@/components/Photo";

export function CoffeeBand() {
  const lena = leaders.find((leader) => leader.name === "Lena Ruiz");
  return (
    <section className="bg-paper" aria-labelledby="coffee-heading">
      <div className={`${frame} grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-24`}>
        <div className="relative min-h-[320px] sm:min-h-[420px]">
          <Photo
            src="/photos/coffee.jpg"
            alt="A white cup of coffee while milk is poured in."
          />
        </div>
        <div>
          <h2 id="coffee-heading" className="text-4xl leading-[0.95] sm:text-6xl">
            Coffee is the finish
          </h2>
          <span className="mt-5 block h-2 w-24 bg-sunrise" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed">{facts.coffee}.</p>
          {lena ? (
            <p className="mt-4 text-lg leading-relaxed">
              {lena.name}, {lena.role}, is on the leadership list.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
