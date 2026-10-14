import { clientUpdate } from "@/lib/content";

export function UpdateBanner() {
  if (!clientUpdate.active || !clientUpdate.message) return null;
  return (
    <div className="bg-sunrise px-4 py-3 text-center text-lg text-asphalt">
      <p className="mx-auto max-w-4xl">{clientUpdate.message}</p>
    </div>
  );
}
