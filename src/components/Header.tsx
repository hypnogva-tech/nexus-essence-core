import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/services", label: "Services" },
    { to: "/subventions", label: "Subventions" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl tracking-tight text-ink">Romandie</span>
          <span className="font-serif text-xl tracking-tight text-muted-foreground italic">Énergies</span>
          <span className="ml-1 inline-block w-1.5 h-1.5 bg-swiss rounded-sm" aria-hidden />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground hover:text-ink transition-colors"
              activeProps={{ className: "text-sm text-ink font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/" hash="estimation" className="btn-primary text-sm py-2.5 px-4">
            Étude gratuite
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <span className="block w-5 h-px bg-ink mb-1.5" />
          <span className="block w-5 h-px bg-ink mb-1.5" />
          <span className="block w-5 h-px bg-ink" />
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
                className="py-3 text-sm text-foreground border-b border-border/50"
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
              Étude gratuite
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
