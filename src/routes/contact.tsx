import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MultiStepForm } from "@/components/MultiStepForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Romandie Énergies" },
      {
        name: "description",
        content:
          "Demandez votre étude énergétique en Suisse romande. Trois étapes, sans engagement, transmission à un installateur certifié de votre canton.",
      },
      { property: "og:title", content: "Contact — Romandie Énergies" },
      {
        property: "og:description",
        content: "Étude indépendante, mise en relation avec un installateur certifié.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-page py-12 md:py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6">Décrivez votre projet.</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Trois étapes courtes (deux minutes). Vos informations ne sont transmises
            qu'à un installateur certifié de votre canton, et uniquement dans le cadre
            de cette demande.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Zone de service</dt>
              <dd className="mt-1">Suisse romande — VD, GE, VS, FR, NE, JU</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Langue</dt>
              <dd className="mt-1">Français</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Délai de réponse</dt>
              <dd className="mt-1">Jours ouvrables suivants</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Engagement</dt>
              <dd className="mt-1">Aucun. Étude et mise en relation gratuites.</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <MultiStepForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
