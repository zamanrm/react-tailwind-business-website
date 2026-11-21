export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-moss">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
