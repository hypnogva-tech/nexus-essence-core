import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  canton: string;
  typeBien: string;
  projet: string;
  proprietaire: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  consent: boolean;
}

const initial: FormData = {
  canton: "",
  typeBien: "",
  projet: "",
  proprietaire: "",
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  consent: false,
};

export function MultiStepForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const canNext =
    (step === 1 && data.canton && data.typeBien && data.proprietaire) ||
    (step === 2 && data.projet) ||
    step === 3;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.consent) return;
    // Lead transmission — branchement backend ultérieur
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="text-2xl mb-3">Demande reçue</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Merci. Un conseiller vous recontactera durant les jours ouvrables suivants pour échanger sur votre projet.
          Aucun engagement de votre part.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} id="estimation">
      <div className="flex items-center justify-between mb-6">
        <p className="eyebrow">Étape {step} sur 3</p>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-1 w-8 rounded-full transition-colors ${
                n <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5 reveal">
          <h3 className="text-xl">Votre situation</h3>
          <div>
            <label className="field-label block mb-2">Canton</label>
            <select
              className="input-base"
              value={data.canton}
              onChange={(e) => update("canton", e.target.value)}
              required
            >
              <option value="">Sélectionner…</option>
              {["Vaud", "Genève", "Valais", "Fribourg", "Neuchâtel", "Jura", "Berne (Jura bernois)"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label block mb-2">Type de bien</label>
            <select
              className="input-base"
              value={data.typeBien}
              onChange={(e) => update("typeBien", e.target.value)}
              required
            >
              <option value="">Sélectionner…</option>
              {["Maison individuelle", "Villa", "Chalet", "PPE", "Immeuble locatif", "Bâtiment agricole"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label block mb-2">Statut</label>
            <div className="grid grid-cols-2 gap-2">
              {["Propriétaire", "En cours d'achat"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => update("proprietaire", opt)}
                  className={`px-4 py-3 text-sm border rounded transition-colors ${
                    data.proprietaire === opt
                      ? "border-ink bg-ink text-ivory"
                      : "border-border hover:border-ink/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5 reveal">
          <h3 className="text-xl">Votre projet</h3>
          <p className="text-sm text-muted-foreground">Quel type d'étude souhaitez-vous ?</p>
          <div className="grid gap-2">
            {[
              "Solaire photovoltaïque",
              "Pompe à chaleur",
              "Isolation / rénovation",
              "Borne de recharge",
              "Étude globale (plusieurs sujets)",
            ].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => update("projet", opt)}
                className={`text-left px-4 py-3 text-sm border rounded transition-colors ${
                  data.projet === opt
                    ? "border-ink bg-secondary"
                    : "border-border hover:border-ink/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5 reveal">
          <h3 className="text-xl">Vos coordonnées</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label block mb-2">Prénom</label>
              <input
                className="input-base"
                value={data.prenom}
                onChange={(e) => update("prenom", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="field-label block mb-2">Nom</label>
              <input
                className="input-base"
                value={data.nom}
                onChange={(e) => update("nom", e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="field-label block mb-2">Email</label>
            <input
              type="email"
              className="input-base"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="field-label block mb-2">Téléphone (idéalement +41)</label>
            <input
              type="tel"
              className="input-base"
              value={data.telephone}
              onChange={(e) => update("telephone", e.target.value)}
              placeholder="+41 79 000 00 00"
              required
            />
          </div>
          <label className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 accent-ink"
              checked={data.consent}
              onChange={(e) => update("consent", e.target.checked)}
            />
            <span>
              J'accepte que mes informations soient transmises à un installateur partenaire
              certifié de mon canton dans le cadre de cette demande, conformément à la
              Loi fédérale sur la protection des données (LPD).
            </span>
          </label>
        </div>
      )}

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
          className={`text-sm text-muted-foreground hover:text-ink transition-colors ${
            step === 1 ? "invisible" : ""
          }`}
        >
          ← Retour
        </button>

        {step < 3 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => Math.min(3, s + 1) as Step)}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continuer
          </button>
        ) : (
          <button
            type="submit"
            disabled={!data.consent}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Envoyer ma demande
          </button>
        )}
      </div>
    </form>
  );
}
