export function RunRow({
  when,
  time,
  title,
  meta,
}: {
  when: string;
  time: string;
  title: string;
  meta: string;
}) {
  return (
    <article className="grid gap-2 border-l-8 border-sunrise bg-mist px-4 py-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,1.4fr)] sm:items-center sm:gap-4 sm:px-5">
      <h3 className="font-display text-2xl leading-none sm:text-3xl">{when}</h3>
      <p className="font-display text-3xl leading-none sm:text-4xl">{time}</p>
      <div>
        <p className="font-display text-2xl leading-tight">{title}</p>
        <p className="mt-1 text-lg">{meta}</p>
      </div>
    </article>
  );
}
