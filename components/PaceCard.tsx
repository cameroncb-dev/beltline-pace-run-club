export function PaceCard({
  name,
  detail,
  index,
}: {
  name: string;
  detail: string;
  index: number;
}) {
  return (
    <article className="bg-mist px-5 py-6">
      <p className="font-display text-lg text-asphalt">0{index + 1}</p>
      <h3 className="mt-3 font-display text-4xl leading-none">{name}</h3>
      <p className="mt-3 text-lg">{detail}</p>
    </article>
  );
}
