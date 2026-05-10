import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MultiStepForm } from "@/components/MultiStepForm";
import heroImg from "@/assets/hero-alpine.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Romandie Énergies — Étude solaire et énergétique en Suisse romande" },
      {
        name: "description",
        content:
          "Étude indépendante pour votre projet solaire, pompe à chaleur, isolation ou borne de recharge. Mise en relation avec un installateur certifié de votre canton.",
      },
      { property: "og:title", content: "Romandie Énergies — Transition énergétique en Suisse romande" },
      {
        property: "og:description",
        content:
          "Une étude, une mise en relation avec un installateur certifié romand. Sans engagement.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Avantages />
        <Process />
        <CantonsSubventions />
        <Temoignages />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background alpine image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Toiture de chalet suisse équipée de panneaux solaires intégrés, panorama des Alpes au coucher du soleil"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,22,40,0.55) 0%, rgba(15,22,40,0.7) 60%, rgba(15,22,40,0.95) 100%)",
          }}
        />
      </div>

      <div className="container-page pt-16 pb-24 md:pt-24 md:pb-32 grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
        <div className="lg:col-span-6 reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden />
            Subventions cantonales en vigueur
          </span>

          <h1 className="mt-6">
            Votre transition énergétique,
            <span className="block italic text-primary">étudiée sérieusement.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Romandie Énergies accompagne les propriétaires romands dans leurs projets solaires,
            de pompe à chaleur, d'isolation et de mobilité électrique. Une étude indépendante,
            puis la mise en relation avec un installateur certifié de votre canton.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#estimation" className="btn-primary">
              Vérifier mon éligibilité
            </a>
            <Link to="/services" className="btn-ghost">En savoir plus</Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground">
            <TrustItem>Installateurs locaux certifiés</TrustItem>
            <TrustItem>Étude indépendante</TrustItem>
            <TrustItem>Conforme LPD</TrustItem>
          </ul>
        </div>

        <div className="lg:col-span-6 reveal reveal-delay-1">
          <div className="rounded-xl border border-border bg-card/95 backdrop-blur-md p-6 md:p-8 shadow-2xl shadow-black/40">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl">Estimation gratuite</h2>
              <p className="mt-2 text-xs text-muted-foreground">
                3 étapes · sans engagement · réponse en jours ouvrables
              </p>
            </div>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M5 12l5 5L20 7" />
      </svg>
      {children}
    </li>
  );
}

function Avantages() {
  const items = [
    {
      t: "Subventions cantonales",
      d: "Chaque canton romand dispose de son programme de soutien (Programme Bâtiments, Pronovo, ProKilowatt). Nous vérifions ce qui s'applique à votre situation.",
      tag: "Selon votre canton",
    },
    {
      t: "Déductions fiscales",
      d: "Une partie de l'investissement énergétique reste déductible de l'impôt fédéral direct et cantonal, selon les règles en vigueur.",
      tag: "Cadre fédéral",
    },
    {
      t: "Économies d'énergie",
      d: "Réduction durable de la facture d'électricité ou de chauffage selon le type de projet retenu et la performance de l'installation.",
      tag: "Sur la durée",
    },
    {
      t: "Valorisation du bien",
      d: "Une rénovation énergétique documentée (CECB, étude technique) renforce la valeur perçue du bâtiment lors d'une vente ou d'une location.",
      tag: "Patrimoine",
    },
    {
      t: "Indépendance énergétique",
      d: "Production locale, autoconsommation, couplage borne de recharge ou pompe à chaleur : moins d'exposition aux variations de prix.",
      tag: "Autonomie",
    },
    {
      t: "Installateurs certifiés",
      d: "Notre réseau partenaire est composé de professionnels romands certifiés (Swissolar, GSP, AFPAC) avec service après-vente local.",
      tag: "Réseau romand",
    },
  ];

  return (
    <section className="py-20 md:py-28 container-page" id="services">
      <div className="max-w-2xl">
        <p className="eyebrow">Pourquoi engager une étude</p>
        <h2 className="mt-5">
          Un projet bien préparé,
          <span className="italic text-primary"> vaut mieux qu'un devis pressé.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nous prenons le temps de qualifier votre situation avant toute mise en relation.
          L'objectif : éviter les sur-dimensionnements, les promesses irréalistes et les mauvaises surprises.
        </p>
      </div>

      <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border rounded-lg overflow-hidden">
        {items.map((s, i) => (
          <article key={s.t} className="bg-card p-7 md:p-8 group hover:bg-secondary transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground tracking-widest">0{i + 1}</span>
              <span className="text-[10px] uppercase tracking-widest text-primary/80">{s.tag}</span>
            </div>
            <h3 className="mt-4">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Estimation en ligne", d: "Trois étapes courtes : votre bien, votre projet, vos coordonnées. Gratuit, sans engagement." },
    { n: "02", t: "Appel conseil", d: "Un conseiller vous recontacte durant les jours ouvrables suivants pour qualifier le projet et l'éligibilité aux subventions." },
    { n: "03", t: "Devis personnalisé", d: "Un installateur certifié de votre canton établit une offre détaillée, calcul des aides inclus." },
    { n: "04", t: "Installation", d: "Travaux réalisés par le partenaire local, suivis de la mise en service et des démarches administratives." },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Processus</p>
          <h2 className="mt-5">De la demande à l'installation.</h2>
          <p className="mt-4 text-muted-foreground">
            Romandie Énergies n'installe pas. Notre rôle est de qualifier votre projet
            et de vous orienter vers un professionnel local sérieux.
          </p>
        </div>

        <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border rounded-lg overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-card p-7 md:p-8">
              <span className="font-serif text-3xl text-primary">{s.n}</span>
              <h3 className="mt-4">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CantonsSubventions() {
  const cantons = [
    { c: "Vaud", n: "VD" },
    { c: "Genève", n: "GE" },
    { c: "Valais", n: "VS" },
    { c: "Fribourg", n: "FR" },
    { c: "Neuchâtel", n: "NE" },
    { c: "Jura", n: "JU" },
  ];
  return (
    <section className="py-20 md:py-28 container-page">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow">Subventions par canton</p>
          <h2 className="mt-5">
            Votre canton soutient
            <span className="italic text-primary"> votre transition.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Chaque canton romand finance une partie de l'investissement énergétique :
            Programme Bâtiments cantonal, primes Pronovo pour le solaire,
            aides à la pompe à chaleur ou à l'isolation. Les montants et critères
            évoluent — nous vérifions l'éligibilité réelle lors de l'étude.
          </p>
          <Link to="/subventions" className="btn-ghost mt-7">
            Détails par canton
          </Link>
          <p className="mt-5 text-xs text-muted-foreground italic leading-relaxed max-w-md">
            Sources : portails officiels cantonaux, Pronovo, OFEN. Nous ne garantissons pas
            l'obtention d'une aide ; chaque dossier reste soumis aux conditions et budgets
            cantonaux en vigueur.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {cantons.map((c) => (
              <li key={c.c} className="bg-card p-6 text-center">
                <p className="text-xs uppercase tracking-widest text-primary">{c.n}</p>
                <p className="mt-2 font-serif text-xl text-foreground">{c.c}</p>
                <p className="text-xs text-muted-foreground mt-1">Programme actif</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-primary">Programmes nationaux</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground">Pronovo</span> verse une rétribution unique
              pour le photovoltaïque. Le <span className="text-foreground">Programme Bâtiments</span>
              {" "}cofinance l'enveloppe thermique et le remplacement du chauffage fossile.
              Ces dispositifs sont cumulables sous conditions avec les aides cantonales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Temoignages() {
  const items = [
    {
      t: "« Le suivi a été clair. L'installateur recommandé a tenu ses délais et son devis. »",
      a: "Marc R.", l: "Montreux, VD", y: "Projet réalisé en 2024",
    },
    {
      t: "« Étude honnête : on nous a expliqué ce qui était pertinent et ce qui ne l'était pas. »",
      a: "Sophie M.", l: "Sierre, VS", y: "Pompe à chaleur",
    },
    {
      t: "« Bon interlocuteur unique pour un projet qui touchait plusieurs corps de métier. »",
      a: "Jean-François B.", l: "Carouge, GE", y: "Étude globale",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Retours clients</p>
          <h2 className="mt-5">Ce que nous entendons sur le terrain.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <figure key={i.a} className="bg-card border border-border p-7 rounded-lg flex flex-col">
              <div className="flex gap-0.5 text-primary mb-4">
                {[1,2,3,4,5].map(n => (
                  <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-serif text-base text-foreground leading-snug flex-1">
                {i.t}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground">
                <span className="text-foreground">{i.a}</span> · <span className="italic">{i.l}</span>
                <span className="block mt-1 text-[10px] uppercase tracking-widest text-primary/70">{i.y}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground italic">
          Témoignages anonymisés à la demande des clients.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 container-page">
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-10 md:p-16 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at top, oklch(0.74 0.17 60 / 0.4), transparent 60%)",
          }}
        />
        <p className="eyebrow justify-center">Prêt à passer à l'action</p>
        <h2 className="mt-5 max-w-2xl mx-auto">
          Demandez votre estimation
          <span className="italic text-primary"> en deux minutes.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Découvrez le potentiel énergétique de votre bien et les dispositifs d'aide
          actifs dans votre canton. Aucun engagement, aucun frais.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#estimation" className="btn-primary">
            Obtenir mon estimation gratuite
          </a>
          <Link to="/contact" className="btn-ghost">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Quelles subventions puis-je obtenir en Suisse romande ?",
      a: "Cela dépend de votre canton, du type de projet et de la nature du bâtiment. Programme Bâtiments cantonal, rétribution unique Pronovo pour le solaire, primes ProKilowatt pour l'efficacité électrique : nous vérifions l'éligibilité réelle au moment de l'étude.",
    },
    {
      q: "Combien de temps dure le processus ?",
      a: "Le formulaire prend environ 2 minutes. Le rappel par un conseiller intervient durant les jours ouvrables suivants. Le devis du partenaire local est généralement remis sous 1 à 2 semaines selon la complexité du projet.",
    },
    {
      q: "Romandie Énergies est-il un installateur ?",
      a: "Non. Nous sommes un service indépendant qui qualifie votre projet et vous met en relation avec un installateur certifié de votre canton.",
    },
    {
      q: "Quelles données collectez-vous ?",
      a: "Uniquement les éléments nécessaires à la qualification (canton, type de bien, projet) et au contact (prénom, nom, email, téléphone). Conformément à la Loi fédérale sur la protection des données (LPD).",
    },
  ];
  return (
    <section className="py-20 md:py-28 container-page" id="faq">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-5">Avant de nous contacter.</h2>
        </div>
        <dl className="lg:col-span-8 divide-y divide-border border-y border-border">
          {items.map((it) => (
            <details key={it.q} className="py-6 group">
              <summary className="cursor-pointer list-none font-serif text-lg text-foreground flex justify-between items-start gap-6">
                <span>{it.q}</span>
                <span className="text-primary text-2xl leading-none mt-1 transition-transform group-open:rotate-45">+</span>
              </summary>
              <dd className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
