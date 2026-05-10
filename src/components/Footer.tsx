import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg text-foreground">Romandie</span>
            <span className="font-serif text-lg italic text-muted-foreground">Énergies</span>
            <span className="inline-block w-1.5 h-1.5 bg-swiss rounded-sm ml-1" aria-hidden />
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Service de mise en relation entre propriétaires de Suisse romande et installateurs
            certifiés en solutions énergétiques (solaire, pompes à chaleur, isolation, mobilité électrique).
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Romandie Énergies n'est pas un installateur. Nous qualifions votre projet et le transmettons
            à des professionnels indépendants de votre canton.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary text-foreground">Services</Link></li>
            <li><Link to="/subventions" className="hover:text-primary text-foreground">Subventions</Link></li>
            <li><Link to="/contact" className="hover:text-primary text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Légal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/mentions-legales" className="hover:text-primary text-foreground">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="hover:text-primary text-foreground">Confidentialité (LPD)</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Romandie Énergies — Suisse romande
          </p>
          <p className="text-xs text-muted-foreground">
            Site indépendant, sans affiliation à une marque ou un canton.
          </p>
        </div>
      </div>
    </footer>
  );
}
