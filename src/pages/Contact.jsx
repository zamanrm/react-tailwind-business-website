import { useState } from "react";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Your next move starts here"
            title="Tell us what you're thinking."
            description="A big idea, a tiny question, a half-formed thought—we're here for all of it."
          />
          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Email us
              </p>
              <a
                href="mailto:hello@nexastudio.co"
                className="mt-2 inline-block font-display text-lg font-semibold transition hover:text-moss"
              >
                hello@nexastudio.co
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Find us
              </p>
              <p className="mt-2 font-medium">Brooklyn, New York</p>
              <p className="mt-1 text-sm text-muted">Working with good people, everywhere.</p>
            </div>
            <div className="rounded-2xl bg-lime/50 p-5">
              <p className="font-semibold">Not sure what you need yet?</p>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                That&apos;s a great place to start. Send us a note and we&apos;ll
                figure it out together.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-9"
        >
          <h2 className="font-display text-2xl font-semibold">Start a conversation</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Fill in a few details and we&apos;ll be in touch soon.
          </p>

          {submitted && (
            <div
              className="mt-6 rounded-xl border border-moss/20 bg-moss/5 px-4 py-3 text-sm text-moss"
              role="status"
            >
              Thanks for reaching out! Your message is ready for our team.
            </div>
          )}

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Your name
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Smith"
                className="form-field"
              />
            </label>
            <label className="block text-sm font-medium">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jane@company.com"
                className="form-field"
              />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              What can we help with?
              <select name="service" required defaultValue="" className="form-field">
                <option value="" disabled>
                  Choose a service
                </option>
                <option>Brand strategy</option>
                <option>Visual identity</option>
                <option>Website and digital</option>
                <option>Campaign and content</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              A little about your project
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell us what's on your mind..."
                className="form-field resize-y"
              />
            </label>
            <div className="sm:col-span-2">
              <Button type="submit">
                Send your message <span aria-hidden="true">↗</span>
              </Button>
              <p className="mt-3 text-xs text-muted">
                This demo form is frontend-only and does not send data to a server.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
