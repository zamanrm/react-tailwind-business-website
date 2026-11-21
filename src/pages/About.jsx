import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const values = [
  {
    number: "01",
    title: "Curiosity first",
    text: "We ask good questions before we reach for easy answers. That's where the interesting work begins.",
  },
  {
    number: "02",
    title: "People over process",
    text: "The best work comes from trust, clear communication, and treating every partnership like it matters.",
  },
  {
    number: "03",
    title: "Make it matter",
    text: "We care about the details, but never lose sight of the bigger picture or the people we're here to help.",
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-moss">
          A little about us
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            We believe good work can change what&apos;s next.
          </h1>
          <p className="max-w-lg pb-2 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Nexa is an independent creative studio for people building a more
            thoughtful kind of business. We bring clarity to the big picture and
            care to every detail.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90"
          alt="Our team’s bright, collaborative studio"
          className="mt-12 aspect-[16/8] w-full rounded-[2rem] object-cover"
        />
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <SectionHeading
            eyebrow="Why Nexa"
            title="Small enough to care. Connected enough to do more."
          />
          <div className="space-y-7 text-base leading-8 text-muted">
            <p>
              We started Nexa with a simple idea: businesses do their best work
              when they know what they stand for and have the confidence to show
              it. Our job is to help make that happen.
            </p>
            <p>
              We&apos;re a close-knit team of strategists, designers, and digital
              makers. For every project, we bring together the right mix of
              experience and a genuinely collaborative spirit.
            </p>
            <p>
              No off-the-shelf answers. No disappearing acts. Just thoughtful
              partners, honest conversations, and work built to last.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <SectionHeading
          eyebrow="What matters to us"
          title="Good work has good people behind it."
          description="The principles we bring to every partnership, big or small."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.number} className="rounded-2xl bg-white p-7 sm:p-8">
              <span className="text-xs font-bold tracking-widest text-moss">
                {value.number}
              </span>
              <h2 className="mt-8 font-display text-2xl font-semibold">
                {value.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="flex flex-col gap-6 rounded-[2rem] bg-lime p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              Good work starts with a hello
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Let&apos;s get to know each other.
            </h2>
          </div>
          <Button to="/contact">
            Meet your next creative partner <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </section>
    </>
  );
}
