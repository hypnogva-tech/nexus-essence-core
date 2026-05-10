import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité (LPD) — Romandie Énergies" },
      {
        name: "description",
        content:
          "Traitement des données personnelles conforme à la Loi fédérale sur la protection des données (LPD).",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ConfPage,
});

function ConfPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-page py-12 md:py-16 max-w-3xl">
        <p className="eyebrow">Confidentialité</p>
        <h1 className="mt-6">Protection des données (LPD)</h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="text-xl mb-3">Données collectées</h2>
            <p className="text-muted-foreground">
              Dans le cadre du formulaire d'étude, les données suivantes sont collectées :
              canton, type de bien, statut (propriétaire ou en cours d'achat), nature du
              projet énergétique, prénom, nom, adresse e-mail et numéro de téléphone.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Finalité du traitement</h2>
            <p className="text-muted-foreground">
              Les données ne sont utilisées que pour qualifier votre demande et la
              transmettre à un installateur certifié indépendant exerçant dans votre canton.
              Aucune utilisation publicitaire tierce, aucune revente.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Base légale</h2>
            <p className="text-muted-foreground">
              Loi fédérale sur la protection des données (nLPD, en vigueur depuis le
              1er septembre 2023). Le traitement repose sur votre consentement explicite,
              donné via la case à cocher du formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Durée de conservation</h2>
            <p className="text-muted-foreground">
              Les données sont conservées le temps nécessaire au suivi de votre demande,
              puis archivées de manière sécurisée pour une durée maximale de 24 mois,
              avant suppression.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Vos droits</h2>
            <p className="text-muted-foreground">
              Vous pouvez à tout moment demander l'accès, la rectification ou la suppression
              de vos données, ainsi que retirer votre consentement. Une demande peut être
              adressée via le formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-3">Cookies</h2>
            <p className="text-muted-foreground">
              Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des cookies
              strictement nécessaires au bon fonctionnement peuvent être déposés.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
