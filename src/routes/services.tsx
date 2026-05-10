import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import solaireImg from "@/assets/hero-maison-romande.jpg";
import pacImg from "@/assets/pac.jpg";
import isolationImg from "@/assets/isolation.jpg";
import borneImg from "@/assets/borne.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Solaire, PAC, isolation, bornes | Romandie Énergies" },
      {
        name: "description",
        content:
          "Quatre domaines couverts : photovoltaïque, pompe à chaleur, isolation thermique, borne de recharge. Étude indépendante en Suisse romande.",
      },
      { property: "og:title", content: "Services énergétiques en Suisse romande" },
      {
        property: "og:description",
        content: "Solaire, pompe à chaleur, isolation, borne de recharge — un seul interlocuteur.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    titre: "Solaire photovoltaïque",
    image: solaireImg,
    desc:
      "Étude de toiture (orientation, inclinaison, ombrages), dimensionnement adapté à votre consommation, choix du matériel et coordination du raccordement avec votre gestionnaire de réseau.",
    points: ["Audit de toiture", "Dimensionnement", "Raccordement Pronovo"],
  },
  {
    titre: "Pompe à chaleur",
    image: pacImg,
    desc:
      "Remplacement de chauffage au mazout ou au gaz par une pompe à chaleur air-eau ou géothermique. Vérification de l'éligibilité au Programme Bâtiments cantonal.",
    points: ["Air-eau / géothermie", "Bilan thermique", "Programme Bâtiments"],
  },
  {
    titre: "Isolation & rénovation",
    image: isolationImg,
    desc:
      "Enveloppe thermique, fenêtres, toiture. L'isolation est souvent le préalable à toute installation énergétique performante.",
    points: ["Façade et toiture", "Fenêtres", "Subventions cantonales"],
  },
  {
    titre: "Borne de recharge",
    image: borneImg,
    desc:
      "Installation domestique 11 ou 22 kW, gestion intelligente, couplage possible avec une production solaire.",
    points: ["11–22 kW", "Pilotage solaire", "Conformité OIBT"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container-page pt-12 pb-12 md:pt-16">
          <p className="eyebrow">Nos domaines</p>
          <h1 className="mt-6 max-w-3xl">
            Quatre métiers complémentaires
            <span className="italic text-muted-foreground"> au service d'un même bâtiment.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Romandie Énergies coordonne l'étude initiale puis vous met en relation avec
            l'installateur certifié le plus adapté à votre canton et à votre projet.
          </p>
        </section>

        <section className="container-page space-y-px bg-border border border-border rounded-sm overflow-hidden">
          {services.map((s, i) => (
            <article key={s.titre} className="bg-background grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={s.image}
                  alt={s.titre + " — illustration en contexte suisse"}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-72 object-cover rounded-sm"
                />
              </div>
              <div className="md:col-span-7">
                <p className="text-xs text-muted-foreground tracking-widest">0{i + 1}</p>
                <h2 className="mt-3 text-3xl">{s.titre}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="text-xs px-3 py-1.5 border border-border rounded-full text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="container-page py-20 text-center">
          <h2>Un seul formulaire pour vos projets.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Que vous hésitiez entre plusieurs solutions ou souhaitiez un projet global,
            l'étude initiale reste la même.
          </p>
          <Link to="/" hash="estimation" className="btn-primary mt-8">
            Demander une étude
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
