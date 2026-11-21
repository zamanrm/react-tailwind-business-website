import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-xl font-bold">
              nexa<span className="font-normal text-white/50">studio</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Independent thinking for businesses ready to make their next move.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Explore</h2>
            <nav className="mt-4 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/60 transition hover:text-lime"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Say hello</h2>
            <a
              href="mailto:hello@nexastudio.co"
              className="mt-4 inline-block text-sm text-white/60 transition hover:text-lime"
            >
              hello@nexastudio.co
            </a>
            <p className="mt-3 text-sm text-white/60">Brooklyn, New York · Working worldwide</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexa Studio. All rights reserved.</p>
          <p>Good ideas, made real.</p>
        </div>
      </div>
    </footer>
  );
}
