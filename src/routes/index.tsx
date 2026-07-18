import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/nor-hero.jpg";
import methodImg from "@/assets/nor-method.jpg";
import experienceImg from "@/assets/nor-experience.jpg";
import detailImg from "@/assets/nor-detail.jpg";

export const Route = createFileRoute("/")({
  component: NorLanding,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function NorLanding() {
  return (
    <div className="bg-nor-cream text-nor-green min-h-screen selection:bg-nor-green selection:text-nor-cream">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 flex items-center justify-between text-nor-cream">
          <div className="font-display text-2xl tracking-[0.24em]">NOR</div>
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em] font-medium">
            <a href="#metodo" className="hover:opacity-70 transition">Método</a>
            <a href="#experiencia" className="hover:opacity-70 transition">Experiência</a>
            <a href="#filosofia" className="hover:opacity-70 transition">Filosofia</a>
            <a href="#contato" className="hover:opacity-70 transition">Contato</a>
          </nav>
          <a
            href="#contato"
            className="text-[11px] uppercase tracking-[0.28em] font-medium border border-nor-cream/40 px-5 py-3 hover:bg-nor-cream hover:text-nor-green transition-colors"
          >
            Agendar visita
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interior da NOR Academia Boutique"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1808}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nor-green/70 via-nor-green/40 to-nor-green/85" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 pt-40 pb-24 md:pt-52 md:pb-32 min-h-screen flex flex-col justify-end text-nor-cream">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="eyebrow text-nor-beige mb-8">
              Academia Boutique · Atendimento por hora marcada
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[13vw] md:text-[7.5vw] leading-[0.95] tracking-[-0.02em]"
            >
              Mais que treino.
              <br />
              <span className="italic font-light">Construção</span> de resultados.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-nor-cream/85 font-light"
            >
              Uma experiência personalizada de treinamento, criada para quem entende
              que evolução exige método, atenção individual e um ambiente à altura.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors"
              >
                Reserve sua avaliação
                <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
              </a>
              <a
                href="#metodo"
                className="text-[11px] uppercase tracking-[0.28em] font-medium text-nor-cream/80 hover:text-nor-cream border-b border-nor-cream/30 pb-1"
              >
                Conheça o método
              </a>
            </motion.div>
          </motion.div>

          <div className="mt-24 flex items-end justify-between text-[11px] uppercase tracking-[0.28em] text-nor-cream/60">
            <span>Est. 2024</span>
            <span className="hidden md:inline">Vagas limitadas por horário</span>
            <span>NOR · 01</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-nor-green/60">— Manifesto</div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-8"
          >
            <p className="font-display text-3xl md:text-5xl leading-[1.15] tracking-[-0.01em] text-nor-green">
              A NOR não é um lugar onde se treina.
              É um lugar onde cada aluno é <span className="italic">conhecido pelo nome</span>,
              acompanhado passo a passo, e conduzido a resultados que permanecem.
            </p>
            <div className="hairline mt-16 mb-10" />
            <div className="grid sm:grid-cols-3 gap-8 text-sm text-nor-green/75 font-light leading-relaxed">
              <div>
                <div className="eyebrow text-nor-green mb-3">01 · Exclusividade</div>
                Turmas reduzidas e horários controlados para garantir presença integral.
              </div>
              <div>
                <div className="eyebrow text-nor-green mb-3">02 · Método</div>
                Planejamento periodizado por especialistas, revisado semana a semana.
              </div>
              <div>
                <div className="eyebrow text-nor-green mb-3">03 · Atendimento</div>
                Acompanhamento humanizado. Você nunca treina sozinho.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÉTODO — split image / text */}
      <section id="metodo" className="bg-nor-green text-nor-cream">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="md:col-span-6"
            >
              <img
                src={methodImg}
                alt="Detalhe do método NOR"
                loading="lazy"
                width={1200}
                height={1408}
                className="w-full h-[520px] md:h-[640px] object-cover"
              />
            </motion.div>
            <div className="md:col-span-6 md:pl-8">
              <div className="eyebrow text-nor-beige mb-6">— O Método NOR</div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.01em]">
                Cada movimento
                <br />
                <span className="italic font-light">tem intenção.</span>
              </h2>
              <p className="mt-8 text-nor-cream/75 font-light leading-relaxed max-w-md">
                Do primeiro dia à sua evolução mais avançada, seu treino é projetado
                com precisão. Nada é aleatório. Nada é genérico.
              </p>

              <ol className="mt-12 space-y-8 max-w-lg">
                {[
                  { n: "I.", t: "Avaliação sensorial", d: "Escutamos objetivos, histórico e rotina antes de qualquer prescrição." },
                  { n: "II.", t: "Protocolo personalizado", d: "Um plano assinado, com progressão semanal e revisão constante." },
                  { n: "III.", t: "Acompanhamento próximo", d: "Um professor de referência conduz cada etapa da sua jornada." },
                  { n: "IV.", t: "Evolução mensurável", d: "Marcos claros, ajustes finos, resultados que se mantêm." },
                ].map((s) => (
                  <li key={s.n} className="grid grid-cols-[auto,1fr] gap-6 border-t border-nor-cream/15 pt-6">
                    <span className="font-display text-2xl text-nor-beige">{s.n}</span>
                    <div>
                      <div className="font-display text-xl">{s.t}</div>
                      <p className="mt-2 text-sm text-nor-cream/70 font-light leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="filosofia" className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-5">
            <div className="eyebrow text-nor-green/60 mb-6">— Valores</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.01em]">
              Uma filosofia
              <br />
              <span className="italic font-light">construída sobre sete pilares.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 text-nor-green/70 font-light leading-relaxed">
            Não seguimos tendências. Cultivamos princípios que sustentam a
            longevidade do corpo, da mente e da relação com o treino.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-nor-green/15">
          {[
            { n: "01", t: "Exclusividade", d: "Poucos alunos por horário. Atenção integral, sempre." },
            { n: "02", t: "Saúde", d: "O corpo antes do estético. A base antes da estrutura." },
            { n: "03", t: "Performance", d: "Ganhos reais, sustentáveis, mensuráveis." },
            { n: "04", t: "Método", d: "Ciência aplicada à individualidade de cada aluno." },
            { n: "05", t: "Evolução", d: "Progresso planejado. Sem atalhos, sem rupturas." },
            { n: "06", t: "Atendimento", d: "Uma equipe que conhece você pelo nome e pela história." },
            { n: "07", t: "Comunidade", d: "Um círculo silencioso de pessoas em busca de excelência." },
            { n: "—", t: "NOR", d: "A soma de tudo isso. Uma marca que respeita o seu tempo." },
          ].map((v) => (
            <div key={v.n} className="bg-nor-cream p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
              <span className="eyebrow text-nor-green/50">{v.n}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mt-8">{v.t}</h3>
                <p className="mt-3 text-sm font-light text-nor-green/70 leading-relaxed">{v.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIA — editorial split */}
      <section id="experiencia" className="bg-nor-beige">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 md:pr-12 order-2 md:order-1">
            <div className="eyebrow text-nor-green/60 mb-6">— A Experiência</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.01em] text-nor-green">
              Um ambiente
              <br />
              projetado para
              <br />
              <span className="italic font-light">quem escolhe menos.</span>
            </h2>
            <p className="mt-8 max-w-md text-nor-green/75 font-light leading-relaxed">
              Menos ruído. Menos gente. Menos improviso. Mais atenção, mais
              precisão, mais cuidado com cada detalhe da sua rotina.
            </p>
            <div className="hairline my-12" />
            <dl className="grid grid-cols-2 gap-8">
              {[
                { k: "12", l: "Alunos por horário" },
                { k: "1:4", l: "Proporção professor/aluno" },
                { k: "24m", l: "Sessão personalizada mínima" },
                { k: "07", l: "Pilares do método" },
              ].map((d) => (
                <div key={d.l}>
                  <div className="font-display text-5xl text-nor-green">{d.k}</div>
                  <div className="eyebrow mt-2 text-nor-green/60">{d.l}</div>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 grid grid-cols-2 gap-4">
            <img
              src={experienceImg}
              alt="Aluna em treino personalizado"
              loading="lazy"
              width={1200}
              height={1504}
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
            <img
              src={detailImg}
              alt="Detalhe de equipamento boutique"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full h-[420px] md:h-[560px] object-cover mt-12"
            />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36">
        <div className="eyebrow text-nor-green/60 mb-16">— Vozes NOR</div>
        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              q: "É a primeira vez em anos que o treino se encaixa em quem eu sou, e não o contrário. A NOR entende ritmo.",
              a: "Camila R.",
              r: "Aluna há 8 meses",
            },
            {
              q: "O acompanhamento é minucioso. Você sente que existe um plano, e que alguém está olhando por ele todos os dias.",
              a: "Rafael M.",
              r: "Aluno há 1 ano",
            },
          ].map((t) => (
            <motion.figure
              key={t.a}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="border-t border-nor-green/20 pt-8"
            >
              <blockquote className="font-display italic text-2xl md:text-3xl leading-[1.3] text-nor-green">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-sm">
                <span className="w-10 h-10 rounded-full bg-nor-green text-nor-cream inline-flex items-center justify-center font-display">
                  {t.a[0]}
                </span>
                <div>
                  <div className="font-medium">{t.a}</div>
                  <div className="text-nor-green/60 text-xs uppercase tracking-[0.2em] mt-1">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-nor-green text-nor-cream">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="eyebrow text-nor-beige mb-6">— Vagas limitadas</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em]">
              A NOR abre
              <br />
              <span className="italic font-light">poucas portas</span>
              <br />
              por mês.
            </h2>
            <p className="mt-8 max-w-lg text-nor-cream/75 font-light leading-relaxed">
              Reserve uma avaliação sem compromisso. Conheça o espaço, converse
              com nossa equipe e descubra se a NOR é o próximo passo da sua jornada.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-5 space-y-6"
          >
            <div>
              <label className="eyebrow text-nor-beige">Nome</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40"
                placeholder="Como podemos te chamar"
              />
            </div>
            <div>
              <label className="eyebrow text-nor-beige">Contato</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40"
                placeholder="WhatsApp ou e-mail"
              />
            </div>
            <div>
              <label className="eyebrow text-nor-beige">Horário de preferência</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40"
                placeholder="Manhã, tarde ou noite"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors mt-6"
            >
              Solicitar convite
              <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-nor-green text-nor-cream border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-3xl tracking-[0.24em]">NOR</div>
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-nor-cream/50">
              Academia Boutique
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs uppercase tracking-[0.24em] text-nor-cream/70">
            <div>
              <div className="text-nor-beige mb-2">Endereço</div>
              Sob consulta
            </div>
            <div>
              <div className="text-nor-beige mb-2">Contato</div>
              contato@nor.club
            </div>
            <div>
              <div className="text-nor-beige mb-2">Horário</div>
              Seg–Sáb · 06h–22h
            </div>
          </div>
        </div>
        <div className="border-t border-nor-cream/10">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 text-[11px] uppercase tracking-[0.28em] text-nor-cream/50 flex justify-between">
            <span>© {new Date().getFullYear()} NOR Academia Boutique</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
