import Image from "next/image";

export function Photo({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 720px, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
