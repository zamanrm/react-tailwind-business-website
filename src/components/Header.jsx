import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-moss ${
      isActive ? "text-moss" : "text-ink/75"
    }`;

  return (
    <header className="relative z-40 border-b border-ink/5 bg-paper/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Nexa Studio home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-lime">
            N.
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            nexa<span className="font-normal text-muted">studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/contact" className="hidden min-h-11 px-5 md:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Button>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-xl md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="absolute inset-x-0 top-full border-t border-ink/10 bg-paper px-5 py-5 shadow-card md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? "bg-white text-moss" : "text-ink/75"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-3" onClick={() => setMenuOpen(false)}>
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
