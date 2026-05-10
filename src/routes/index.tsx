import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MultiStepForm } from "@/components/MultiStepForm";
import heroImg from "@/assets/hero-maison-romande.jpg";
import installateurImg from "@/assets/installateur.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Romandie Énergies — Étude énergétique pour propriétaires romands" },
      {
        name: "description",
        content:
          "Étude indépendante pour votre projet solaire, pompe à chaleur, isolation ou borne de recharge en Suisse romande. Mise en relation avec des installateurs certifiés.",
      },
      { property: "og:title", content: "Romandie Énergies — Transition énergétique en Suisse romande" },
      {
        property: "og:description",
        content:
          "Une étude, une mise en relation avec un installateur certifié de votre canton. Sans engagement.",
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
        <TrustStrip />
        <Services />
        <Process />
        <CantonsSubventions />
        <Temoignages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 reveal">
          <p className="eyebrow">Suisse romande · Étude indépendante</p>
          <h1 className="mt-6">
            Une transition énergétique
            <span className="italic text-muted-foreground"> conduite avec méthode.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Romandie Énergies accompagne les propriétaires romands dans leurs projets solaires,
            de pompe à chaleur, d'isolation et de mobilité électrique. Nous qualifions votre
            projet et le confions à un installateur certifié de votre canton.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" hash="estimation" className="btn-primary">
              Demander une étude
            </Link>
            <Link to="/services" className="btn-ghost">Nos domaines</Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat label="Cantons couverts" value="Romandie" />
            <Stat label="Réponse" value="Jours ouvrables" />
            <Stat label="Engagement" value="Aucun" />
          </dl>
        </div>

        <div className="lg:col-span-6 reveal reveal-delay-1">
          <div className="relative">
            <img
              src={heroImg}
              alt="Maison familiale suisse romande équipée de panneaux solaires en toiture, paysage de vignobles vaudois en arrière-plan"
              width={1920}
              height={1080}
              className="w-full h-[420px] md:h-[520px] object-cover rounded-sm"
              fetchPriority="high"
            />
            <div className="absolute -bottom-px left-0 right-0 h-px bg-swiss/60" aria-hidden />
          </div>
          <p className="mt-3 text-xs text-muted-foreground italic">
            Maison contemporaine en bois et pierre, intégration photovoltaïque, canton de Vaud.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-serif text-lg text-ink">{value}</dd>
    </div>
  );
}

function TrustStrip() {
  const items = [
    "Installateurs locaux certifiés",
    "Indépendant",
    "Conforme LPD",
    "Sans engagement",
  ];
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container-page py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="w-1 h-1 bg-swiss rounded-full" aria-hidden />
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { titre: "Solaire photovoltaïque", desc: "Étude de toiture, dimensionnement, intégration et raccordement." },
    { titre: "Pompe à chaleur", desc: "Remplacement chauffage fossile, air-eau, géothermie." },
    { titre: "Isolation & rénovation", desc: "Enveloppe thermique, fenêtres, programme cantonal." },
    { titre: "Borne de recharge", desc: "Installation 11–22 kW, gestion solaire couplée." },
  ];

  return (
    <section className="py-20 md:py-28 container-page" id="services">
      <div className="max-w-2xl">
        <p className="eyebrow">Domaines d'intervention</p>
        <h2 className="mt-5">Quatre métiers, une seule étude.</h2>
        <p className="mt-4 text-muted-foreground">
          Vous décrivez votre projet une fois. Nous identifions l'installateur certifié
          le plus pertinent pour votre canton et votre type de bien.
        </p>
      </div>

      <div className="mt-12 grid gap-px bg-border md:grid-cols-2 border border-border rounded-sm overflow-hidden">
        {services.map((s, i) => (
          <article key={s.titre} className="bg-background p-8 md:p-10">
            <p className="text-xs text-muted-foreground tracking-widest">0{i + 1}</p>
            <h3 className="mt-3">{s.titre}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "I", t: "Vous décrivez votre projet", d: "Trois étapes courtes : votre bien, votre projet, vos coordonnées." },
    { n: "II", t: "Nous qualifions la demande", d: "Un conseiller vérifie l'éligibilité et les programmes cantonaux applicables." },
    { n: "III", t: "Mise en relation locale", d: "Un installateur certifié de votre canton vous recontacte avec un devis." },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Méthode</p>
          <h2 className="mt-5">Un parcours en trois temps.</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Romandie Énergies n'installe pas. Notre rôle est de qualifier votre projet
            et de vous orienter vers un professionnel local sérieux.
          </p>
        </div>
        <ol className="lg:col-span-7 space-y-px bg-border border border-border rounded-sm overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-7 md:p-8 grid grid-cols-[auto,1fr] gap-6 items-start">
              <span className="font-serif text-2xl text-swiss">{s.n}</span>
              <div>
                <h3>{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CantonsSubventions() {
  const cantons = ["Vaud", "Genève", "Valais", "Fribourg", "Neuchâtel", "Jura"];
  return (
    <section className="py-20 md:py-28 container-page">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow">Subventions cantonales</p>
          <h2 className="mt-5">Programmes de soutien en Romandie.</h2>
          <p className="mt-5 text-muted-foreground">
            Chaque canton dispose de son propre programme d'aide à la transition énergétique
            (Programme Bâtiments, ProKilowatt, Pronovo). L'éligibilité, les montants et les
            critères évoluent — nous vérifions ce qui s'applique à votre situation lors de l'étude.
          </p>
          <Link to="/subventions" className="btn-ghost mt-7">
            Détails par canton
          </Link>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {cantons.map((c) => (
              <li key={c} className="bg-background p-6 text-center">
                <p className="font-serif text-lg text-ink">{c}</p>
                <p className="text-xs text-muted-foreground mt-1">Programme actif</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
            Sources : portails officiels cantonaux, Pronovo, OFEN. Données vérifiées au moment
            de l'étude personnalisée.
          </p>
        </div>
      </div>
    </section>
  );
}

function Temoignages() {
  const items = [
    {
      t: "« Le suivi a été clair. L'installateur recommandé a tenu ses délais et son devis. »",
      a: "Marc R.", l: "Montreux, VD",
    },
    {
      t: "« Étude honnête : on nous a expliqué ce qui était pertinent et ce qui ne l'était pas. »",
      a: "Sophie M.", l: "Sierre, VS",
    },
    {
      t: "« Bon interlocuteur unique pour un projet qui touchait plusieurs corps de métier. »",
      a: "Jean-François B.", l: "Carouge, GE",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="eyebrow">Retours clients</p>
          <h2 className="mt-5">Ce que nous entendons sur le terrain.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <figure key={i.a} className="bg-background border border-border p-7 rounded-sm">
              <blockquote className="font-serif text-base text-ink leading-snug">
                {i.t}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground">
                {i.a} · <span className="italic">{i.l}</span>
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

function FAQ() {
  const items = [
    {
      q: "Romandie Énergies est-il un installateur ?",
      a: "Non. Nous sommes un service indépendant qui qualifie votre projet et vous met en relation avec un installateur certifié de votre canton.",
    },
    {
      q: "Le service est-il payant ?",
      a: "L'étude initiale et la mise en relation sont gratuites. Le devis de l'installateur reste sans engagement.",
    },
    {
      q: "Quelles données collectez-vous ?",
      a: "Uniquement les éléments nécessaires à la qualification (canton, type de bien, projet) et au contact (prénom, nom, email, téléphone). Conformément à la LPD.",
    },
    {
      q: "Quels cantons couvrez-vous ?",
      a: "Vaud, Genève, Valais, Fribourg, Neuchâtel, Jura, ainsi que le Jura bernois.",
    },
  ];
  return (
    <section className="py-20 md:py-28 container-page">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-5">Avant de nous contacter.</h2>
        </div>
        <dl className="lg:col-span-8 divide-y divide-border border-y border-border">
          {items.map((it) => (
            <div key={it.q} className="py-6">
              <dt className="font-serif text-lg text-ink">{it.q}</dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-ink text-ivory">
      <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow text-ivory/70 [&::before]:bg-swiss">Demande d'étude</p>
          <h2 className="mt-5 text-ivory">
            Décrivez votre projet.
            <span className="block italic text-ivory/60">Nous vous répondons.</span>
          </h2>
          <p className="mt-5 text-ivory/70 max-w-md">
            Trois étapes courtes. Aucune obligation. Vos informations sont transmises
            uniquement à un installateur certifié de votre canton.
          </p>
          <div className="mt-8">
            <img
              src={installateurImg}
              alt="Installateur professionnel au travail sur une toiture en Suisse"
              width={1080}
              height={1920}
              loading="lazy"
              className="w-full max-w-sm h-72 object-cover rounded-sm grayscale opacity-90"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <MultiStepForm />
        </div>
      </div>
    </section>
  );
}
