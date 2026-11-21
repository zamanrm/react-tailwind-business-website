import { useState } from "react";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/projects.js";

const filters = ["All", "Branding", "Digital", "Campaign"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <SectionHeading
        eyebrow="A few good things"
        title="Work made with people we believe in."
        description="A collection of collaborations, big ideas, and details we're proud of."
      />
      <div className="mt-9 flex flex-wrap gap-2" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-ink text-white"
                : "border border-ink/10 bg-white text-muted hover:border-ink/30 hover:text-ink"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-5 backdrop-blur-sm"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedProject(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <button
              type="button"
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.alt}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">
                {selectedProject.category}
              </p>
              <h2 id="project-title" className="mt-2 font-display text-3xl font-semibold">
                {selectedProject.title}
              </h2>
              <p className="mt-2 text-muted">{selectedProject.type}</p>
              <Button
                to="/contact"
                className="mt-6"
                onClick={() => setSelectedProject(null)}
              >
                Discuss a project <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
