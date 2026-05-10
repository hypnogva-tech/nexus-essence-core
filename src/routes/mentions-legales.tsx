import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Romandie Énergies" },
      { name: "description", content: "Mentions légales et informations sur l'éditeur du site Romandie Énergies." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-page py-12 md:py-16 max-w-3xl">
        <p className="eyebrow">Légal</p>
        <h1 className="mt-6">Mentions légales</h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="text-xl mb-3">Éditeur du site</h2>
            <p className="text-muted-foreground">
              Romandie Énergies — service indépendant de mise en relation entre propriétaires
              de Suisse romande et installateurs certifiés en solutions énergétiques.
            </p>
            <p className="text-muted-foreground mt-2">
              Coordonnées de contact disponibles via le formulaire de la page Contact.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Nature du service</h2>
            <p className="text-muted-foreground">
              Romandie Énergies n'est ni installateur, ni bureau d'étude technique agréé.
              Le service consiste à recueillir et qualifier les demandes de propriétaires,
              puis à les transmettre à un installateur certifié indépendant exerçant dans
              le canton concerné. Aucun devis ni contrat n'est émis par Romandie Énergies.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble des contenus (textes, photographies, mises en page) est protégé par
              le droit suisse. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              Les informations relatives aux subventions cantonales et fédérales sont fournies
              à titre indicatif et peuvent évoluer. Romandie Énergies ne garantit ni
              l'obtention d'une aide financière, ni les conditions commerciales proposées
              par les installateurs partenaires.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Droit applicable</h2>
            <p className="text-muted-foreground">
              Le présent site est régi par le droit suisse. Tout litige éventuel relève des
              tribunaux compétents du for du défendeur en Suisse.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
