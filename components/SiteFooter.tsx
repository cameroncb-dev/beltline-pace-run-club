import Link from "next/link";
import { club, facts, navItems, photoCredits } from "@/lib/content";
import { frame } from "@/lib/ui";

const record = [
  { href: "/cover", label: "Cover" },
  { href: "/system", label: "Design system" },
  { href: "/decisions", label: "Decision log" },
];

export function SiteFooter() {
  return (
    <footer className="on-asphalt mt-auto bg-asphalt text-concrete">
      <div className={`${frame} grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]`}>
        <div>
          <p className="font-display text-3xl leading-none">{club.name}</p>
          <p className="mt-4 font-display text-2xl leading-tight text-sunrise">
            {club.tagline}
          </p>
          <p className="mt-4 max-w-md text-lg">{facts.coffee}.</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-lg text-sunrise">Pages</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-lg underline decoration-sunrise/70 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-lg text-sunrise">Project record</p>
          <ul className="mt-3 space-y-2">
            {record.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-lg underline decoration-sunrise/70 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg">
            Partners:{" "}
            <a
              href={`mailto:${club.partnerEmail}`}
              className="underline decoration-sunrise/70 underline-offset-4"
            >
              {club.partnerEmail}
            </a>
          </p>
        </div>
      </div>
      <div className={`${frame} border-t border-white/15 py-6`}>
        <p className="text-base leading-relaxed text-concrete">
          Photographs from Pexels, free to use.{" "}
          {photoCredits.map((photo) => photo.id).join(", ")}. Shirt and hat
          drawings on the Gear page are original illustrations, not product photos.
        </p>
      </div>
    </footer>
  );
}
