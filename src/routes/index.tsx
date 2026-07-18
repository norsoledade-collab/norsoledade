import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground-800 font-body bg-background-100">
      <nav className="relative z-10 w-full mx-auto max-w-6xl px-5 md:px-8 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-foreground-50 font-semibold tracking-tight">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-500" />
          Verdant
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground-500">
          <a href="#produto" className="hover:text-foreground-50 transition">Produto</a>
          <a href="#recursos" className="hover:text-foreground-50 transition">Recursos</a>
          <a href="#sobre" className="hover:text-foreground-50 transition">Sobre</a>
        </div>
        <a
          href="#cta"
          className="text-sm rounded-full bg-accent-500 text-accent-50 px-4 py-2 font-medium hover:bg-accent-400 transition"
        >
          Começar
        </a>
      </nav>

      <section className="relative z-10 mx-auto max-w-4xl w-full text-center pt-20 pb-16 px-5 md:px-8">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent-500 mb-6">
          Uma nova experiência
        </span>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground-50 leading-[1.05]">
          Construído com <span className="text-accent-500">calma</span>,
          <br /> feito para durar.
        </h1>
        <p className="mt-6 text-base md:text-lg text-foreground-400 max-w-2xl mx-auto">
          Uma paleta profunda em verde, tipografia Inter e composição centrada.
          Um ponto de partida elegante para o que você quiser criar em seguida.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            id="cta"
            href="#recursos"
            className="rounded-full bg-accent-500 text-accent-50 px-6 py-3 text-sm font-medium hover:bg-accent-400 transition"
          >
            Explorar recursos
          </a>
          <a
            href="#sobre"
            className="rounded-full border border-foreground-800/30 text-foreground-100 px-6 py-3 text-sm font-medium hover:bg-background-200 transition"
          >
            Saiba mais
          </a>
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl w-full px-5 md:px-8 pb-24 grid gap-6 md:grid-cols-3">
        {[
          { t: "Design tranquilo", d: "Tons profundos em verde para um ambiente focado." },
          { t: "Tipografia clara", d: "Inter em todos os pesos, para leitura confortável." },
          { t: "Composição centrada", d: "Layout equilibrado, com respiração e hierarquia." },
        ].map((f) => (
          <div key={f.t} className="rounded-2xl bg-background-200 border border-foreground-800/10 p-6">
            <div className="w-8 h-8 rounded-lg bg-accent-500/20 border border-accent-500/30 mb-4" />
            <h3 className="text-foreground-50 font-semibold text-lg">{f.t}</h3>
            <p className="text-foreground-400 text-sm mt-2">{f.d}</p>
          </div>
        ))}
      </section>

      <footer id="sobre" className="border-t border-foreground-800/10">
        <div className="mx-auto max-w-6xl w-full px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground-500">
          <span>© {new Date().getFullYear()} Verdant. Todos os direitos reservados.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground-50 transition">Privacidade</a>
            <a href="#" className="hover:text-foreground-50 transition">Termos</a>
            <a href="#" className="hover:text-foreground-50 transition">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
