const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ManifestoSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) return;
    setStatus("submitting");
    setError("");
    try {
      await db.entities.BlueprintSubscriber.create({ email: value, source: "manifesto" });
      setStatus("success");
    } catch {
      setStatus("error");
      setError("That did not go through. Try again in a moment.");
    }
  };

  return (
    <section id="manifesto" className="bg-foreground text-background">
      <div className="shell py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-background/55">
              05 / The Manifesto
            </span>
            <p className="mt-8 font-heading text-[clamp(1.6rem,3.4vw,2.9rem)] font-medium uppercase leading-[1.02] tracking-[-0.03em]">
              We are not interested in packaging that is <span className="text-background/40">less bad</span>. We are
              interested in packaging that <span className="text-primary">comes back</span>.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/70">
              Reusable is not a material, it is a system: a durable container, a deposit, a route home, a wash, a
              refill. Tideturn exists to build that loop properly instead of selling another recyclable box that
              nobody recycles.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">
              The ocean does not need another pledge. It needs fewer things in it.
            </p>
          </div>

          <div className="lg:pt-16">
            <div className="border border-background/20 p-6 sm:p-8">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-[-0.01em]">
                Receive the blueprint
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-background/65">
                Return-system trials, wash-cycle results and the occasional failure, sent as they happen. No launch
                spam.
              </p>

              {status === "success" ? (
                <p className="mt-6 border border-primary/50 px-4 py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  You are on the list. The next field note is yours.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <label htmlFor="blueprint-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="blueprint-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@studio.com"
                    className="w-full border border-background/25 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/35 focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-between gap-3 bg-primary px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending" : "Receive the blueprint"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  {status === "error" && (
                    <p role="alert" className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
            <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-background/45">
              Field notes only · unsubscribe any time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}