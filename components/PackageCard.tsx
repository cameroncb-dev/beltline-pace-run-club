export function PackageCard({
  name,
  price,
  includes,
}: {
  name: string;
  price: string;
  includes: string;
}) {
  return (
    <article className="flex flex-col bg-mist px-5 py-6">
      <h3 className="font-display text-3xl leading-none">{name}</h3>
      <p className="mt-4 font-display text-6xl leading-none">{price}</p>
      <p className="mt-4 text-lg">{includes}</p>
    </article>
  );
}
