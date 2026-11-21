import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { projects, services } from "../data/projects.js";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-semibold text-moss">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Independent creative studio · Brooklyn & everywhere
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Make your
            <br />
            next move
            <span className="text-moss"> matter.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            We help ambitious businesses find their focus, build their brand, and
            show up with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Button>
            <Button to="/gallery" variant="outline">
              Explore our work
            </Button>
          </div>
          <div className="mt-11 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden="true">
              {["photo-1534528741775-53994a69daeb", "photo-1500648767791-00dcc994a43e", "photo-1531123897727-8f129e1688ce"].map((image) => (
                <img
                  key={image}
                  src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=100&h=100&q=80`}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-paper object-cover"
                />
              ))}
            </div>
            <p className="text-xs leading-5 text-muted">
              Good people. Big ideas.
              <br />
              <span className="font-semibold text-ink">One thoughtful team.</span>
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=90"
            alt="Welcoming, light-filled studio with collaborative workspaces"
            className="aspect-[1.13/1] w-full rounded-[2rem] object-cover"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-lime px-5 py-4 sm:-left-7 sm:px-7 sm:py-5">
            <p className="font-display text-3xl font-semibold">12+</p>
            <p className="mt-1 text-xs font-semibold text-ink/70">years making good things</p>
          </div>
          <div className="absolute right-4 top-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-white text-center text-xs font-bold leading-tight text-moss sm:right-7 sm:top-7 sm:h-20 sm:w-20">
            GOOD
            <br />
            ENERGY
            <br />
            ONLY
          </div>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 text-sm font-semibold tracking-wide text-ink/40 sm:px-8 lg:justify-between lg:px-12">
          <span>COMMON GROUND</span>
          <span>FORM & FIELD</span>
          <span>GOODWELL</span>
          <span>OPEN HOUSE</span>
          <span>MADE / WELL</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A good idea deserves a good team."
            description="From first thought to final detail, we bring the right people and the right questions to every project."
          />
          <Button to="/services" variant="outline" className="shrink-0">
            All services <span aria-hidden="true">↗</span>
          </Button>
        </div>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="A few things we put into the world."
            />
            <Button to="/gallery" variant="outline" className="shrink-0">
              View all projects <span aria-hidden="true">↗</span>
            </Button>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="rounded-[2rem] bg-moss px-7 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Good things start somewhere
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Ready to make a little noise?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Tell us what you&apos;re working on. We&apos;d love to hear where you
              want to go next.
            </p>
          </div>
          <Button to="/contact" variant="light" className="mt-8 shrink-0 lg:mt-0">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </section>
    </>
  );
}
