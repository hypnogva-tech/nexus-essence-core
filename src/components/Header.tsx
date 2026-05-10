import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/services", label: "Avantages" },
    { to: "/subventions", label: "Subventions" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </span>
          <span className="font-serif text-lg tracking-tight text-foreground">
            Romandie<span className="italic text-primary">Énergies</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/" hash="estimation" className="btn-primary text-sm py-2.5 px-4">
            Estimation gratuite
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground border-b border-border/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="estimation"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Estimation gratuite
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
