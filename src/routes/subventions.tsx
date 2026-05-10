import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/subventions")({
  head: () => ({
    meta: [
      { title: "Subventions énergétiques en Suisse romande | Romandie Énergies" },
      {
        name: "description",
        content:
          "Programmes cantonaux de soutien à la transition énergétique : Vaud, Genève, Valais, Fribourg, Neuchâtel, Jura. Sources officielles.",
      },
      { property: "og:title", content: "Subventions cantonales — Romandie Énergies" },
      {
        property: "og:description",
        content: "Programme Bâtiments, ProKilowatt, Pronovo : ce qui existe en Suisse romande.",
      },
    ],
  }),
  component: SubventionsPage,
});

const cantons = [
  {
    nom: "Vaud",
    programmes: ["Programme Bâtiments VD", "Subvention solaire communale (selon commune)"],
    source: "vd.ch / Programme Bâtiments",
  },
  {
    nom: "Genève",
    programmes: ["GEnergie", "Subvention SIG-éco21", "Pronovo (rétribution unique)"],
    source: "ge.ch / SIG",
  },
  {
    nom: "Valais",
    programmes: ["Programme Bâtiments VS", "Aide cantonale photovoltaïque"],
    source: "vs.ch / Service de l'énergie",
  },
  {
    nom: "Fribourg",
    programmes: ["Programme Bâtiments FR", "ProKilowatt"],
    source: "fr.ch / SdE",
  },
  {
    nom: "Neuchâtel",
    programmes: ["Programme Bâtiments NE", "Aide ponctuelle communale"],
    source: "ne.ch",
  },
  {
    nom: "Jura",
    programmes: ["Programme Bâtiments JU", "Aide cantonale énergies renouvelables"],
    source: "jura.ch",
  },
];

function SubventionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container-page pt-12 pb-12 md:pt-16">
          <p className="eyebrow">Programmes cantonaux</p>
          <h1 className="mt-6 max-w-3xl">
            Soutiens publics
            <span className="italic text-muted-foreground"> à la transition énergétique.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Chaque canton romand applique sa propre politique de soutien, en complément
            des programmes fédéraux (Programme Bâtiments, Pronovo, ProKilowatt). Les
            montants et conditions évoluent régulièrement : nous vérifions ce qui est
            applicable à votre situation lors de l'étude.
          </p>
        </section>

        <section className="container-page">
          <ul className="grid gap-px bg-border border border-border rounded-sm overflow-hidden md:grid-cols-2">
            {cantons.map((c) => (
              <li key={c.nom} className="bg-background p-8">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl">{c.nom}</h2>
                  <span className="text-xs text-muted-foreground italic">Source : {c.source}</span>
                </div>
                <ul className="mt-5 space-y-2">
                  {c.programmes.map((p) => (
                    <li key={p} className="text-sm text-foreground flex gap-3">
                      <span className="mt-2 w-1 h-1 bg-swiss rounded-full shrink-0" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-muted-foreground italic max-w-2xl leading-relaxed">
            Information donnée à titre indicatif. Les programmes mentionnés existent au
            moment de la rédaction. Les montants, plafonds et critères sont définis par
            les autorités compétentes et peuvent être modifiés sans préavis. Romandie
            Énergies ne garantit aucune subvention.
          </p>
        </section>

        <section className="container-page py-20 text-center">
          <h2>Vérifions ensemble ce qui s'applique à votre projet.</h2>
          <Link to="/" hash="estimation" className="btn-primary mt-8">
            Demander une étude
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
