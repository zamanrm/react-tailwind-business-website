const icons = {
  strategy: "↗",
  brand: "✳",
  digital: "⌘",
};

export default function ServiceCard({ number, title, description, type }) {
  return (
    <article className="group rounded-2xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8">
      <div className="mb-12 flex items-start justify-between">
        <span className="text-xs font-semibold tracking-widest text-muted">
          {number}
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-xl text-moss transition group-hover:bg-lime">
          {icons[type]}
        </span>
      </div>
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
      <div className="mt-7 h-px bg-ink/10 transition group-hover:bg-moss" />
      <span className="mt-5 inline-block text-sm font-semibold text-moss">
        Thoughtful by design
      </span>
    </article>
  );
}
