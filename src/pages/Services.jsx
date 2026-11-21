import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/projects.js";

const process = [
  ["01", "Listen", "We start with a conversation and a lot of good questions."],
  ["02", "Get clear", "Together, we find the real opportunity behind the brief."],
  ["03", "Make it", "We bring the idea to life with craft, curiosity, and care."],
  ["04", "Move forward", "You leave with tools and confidence to make your next move."],
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-moss">
              What we bring to the table
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
              Clear thinking. Considered making.
            </h1>
          </div>
          <p className="max-w-lg pb-2 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            We connect the dots between what your business needs to say and how
            the world experiences it.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="How we work"
            title="Good work is a journey, not a handoff."
            description="A clear, collaborative process gets us to the right answer—together."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <article key={number} className="border-t border-ink/15 pt-5">
                <span className="text-xs font-bold tracking-widest text-moss">
                  {number}
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="rounded-[2rem] bg-moss px-7 py-12 text-white sm:px-12 sm:py-16">
          <SectionHeading
            eyebrow="Have something in mind?"
            title="Let's make the right thing happen."
            description="Tell us what you’re looking to do. We’ll help you figure out where to start."
          />
          <Button to="/contact" variant="light" className="mt-8">
            Tell us about it <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </section>
    </>
  );
}
