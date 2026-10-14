import { Button } from "@/components/Button";
import { club } from "@/lib/content";
import { frame } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="bg-concrete">
      <div className={`${frame} py-20 lg:py-28`}>
        <p className="font-display text-lg">{club.name}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
          That page is not on the course.
        </h1>
        <p className="mt-6 max-w-xl text-lg">
          The club site has Home, Weekly runs, Join, Partners, and Gear.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/join" variant="ghost">
            Join a Run
          </Button>
        </div>
      </div>
    </section>
  );
}
