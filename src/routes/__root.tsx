import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_NAME = "Romandie Énergies";
const SITE_DESC =
  "Mise en relation avec des installateurs certifiés en Suisse romande : solaire, pompes à chaleur, isolation, bornes de recharge.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">Erreur 404</p>
        <h1 className="mt-4">Page introuvable</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Revenir à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1>Une erreur est survenue</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Veuillez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">
            Réessayer
          </button>
          <a href="/" className="btn-ghost">Accueil</a>
        </div>
      </div>
    </div>
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESC,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Vaud" },
    { "@type": "AdministrativeArea", name: "Genève" },
    { "@type": "AdministrativeArea", name: "Valais" },
    { "@type": "AdministrativeArea", name: "Fribourg" },
    { "@type": "AdministrativeArea", name: "Neuchâtel" },
    { "@type": "AdministrativeArea", name: "Jura" },
  ],
  inLanguage: "fr-CH",
  serviceType: [
    "Énergie solaire photovoltaïque",
    "Pompe à chaleur",
    "Isolation thermique",
    "Borne de recharge véhicule électrique",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — Étude énergétique pour propriétaires romands` },
      { name: "description", content: SITE_DESC },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow" },
      { httpEquiv: "content-language", content: "fr-CH" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "fr_CH" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_DESC },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter+Tight:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CH">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
