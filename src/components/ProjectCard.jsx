export default function ProjectCard({ project, onClick }) {
  return (
    <button
      type="button"
      className="group block w-full text-left"
      onClick={onClick}
      aria-label={`View ${project.title} project`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/10">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-ink opacity-0 transition group-hover:opacity-100">
          ↗
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.type}</p>
        </div>
        <span className="pt-1 text-xs font-semibold uppercase tracking-wider text-moss">
          {project.category}
        </span>
      </div>
    </button>
  );
}
