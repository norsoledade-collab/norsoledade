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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function NorLanding() {
  return (
    <div className="bg-nor-green text-nor-cream min-h-screen selection:bg-nor-cream selection:text-nor-green font-body">
      {/* NAV — minimal, centered like Unique */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-nor-green/70 border-b border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-[0.32em] text-nor-cream">
            NOR
          </a>
          <nav className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.28em] text-nor-cream/80">
            <a href="#programas" className="hover:text-nor-cream transition">Programas</a>
            <a href="#unidades" className="hover:text-nor-cream transition">Unidades</a>
            <a href="#especialistas" className="hover:text-nor-cream transition">Especialistas</a>
            <a href="#experiencia" className="hover:text-nor-cream transition">Experiência</a>
            <a href="#contato" className="hover:text-nor-cream transition">Contato</a>
          </nav>
          <a
            href="#contato"
            className="text-[11px] uppercase tracking-[0.28em] border border-nor-cream/40 px-4 py-2 hover:bg-nor-cream hover:text-nor-green transition-colors"
          >
            Agende sua visita
          </a>
        </div>
      </header>

      {/* HERO — full bleed cinematic */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interior da NOR Academia Boutique"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nor-green/40 via-nor-green/20 to-nor-green/95" />
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="eyebrow text-nor-beige mb-8">
              Academia Boutique · Soledade
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[12vw] md:text-[6.5vw] leading-[0.95] tracking-[-0.02em] text-nor-cream"
            >
              Cada treino é <span className="italic font-light">único.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-base md:text-lg text-nor-cream/85 font-light max-w-xl mx-auto"
            >
              O refúgio perfeito para construir a melhor versão de você.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-14">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 border border-nor-cream/70 text-nor-cream px-8 py-4 text-[11px] uppercase tracking-[0.32em] hover:bg-nor-cream hover:text-nor-green transition-colors"
              >
                Conheça a NOR
                <span className="inline-block w-6 h-px bg-current transition-all group-hover:w-12" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <div className="eyebrow text-nor-cream/50 flex items-center gap-3">
            <span className="w-px h-8 bg-nor-cream/40 animate-pulse" />
            Role para explorar
          </div>
        </div>
      </section>

      {/* INTRO — statement */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-28 md:py-40 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="eyebrow text-nor-beige mb-8">— NOR Academia Boutique</div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.2] tracking-[-0.01em] max-w-4xl mx-auto text-nor-cream">
            Somos uma academia boutique feita para quem entende que
            <span className="italic font-light"> evolução exige método</span>,
            atenção individual e um ambiente à altura do seu tempo.
          </h2>
          <div className="hairline max-w-24 mx-auto mt-14 opacity-40" />
        </motion.div>
      </section>

      {/* PROGRAMAS — 3 cards com foto (padrão Unique) */}
      <section id="programas" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-36">
        <div className="text-center mb-16">
          <div className="eyebrow text-nor-beige mb-6">— Nossos Programas</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-nor-cream">
            Liderados por <span className="italic font-light">especialistas.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-nor-cream/75 font-light">
            Modalidades pensadas para cada objetivo, cada corpo e cada etapa da vida.
            Uma experiência personalizada, do primeiro treino ao seu melhor resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: methodImg,
              tag: "Musculação",
              t: "NOR Personal",
              d: "Treinamento personalizado com acompanhamento próximo em grupos de até 5 alunos. Sessões planejadas conforme seus objetivos, com avaliações periódicas e ajustes constantes para um processo seguro, eficiente e consistente.",
            },
            {
              img: experienceImg,
              tag: "Funcional",
              t: "NOR Cross",
              d: "Metodologia que combina força, condicionamento, mobilidade e resistência em sessões dinâmicas. Cada treino é adaptado ao seu nível, elevando capacidade física e qualidade de movimento.",
            },
            {
              img: detailImg,
              tag: "Clube de Corrida",
              t: "NOR Run",
              d: "Mais do que correr: uma experiência de comunidade e evolução. Treinos orientados para desenvolver performance e compartilhar a jornada com quem tem o mesmo propósito.",
            },
          ].map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-nor-green-light/20 border border-nor-cream/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-nor-green via-nor-green/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="eyebrow text-nor-beige mb-3">{p.tag}</div>
                <h3 className="font-display text-3xl md:text-4xl text-nor-cream">{p.t}</h3>
                <p className="mt-3 text-sm text-nor-cream/75 font-light leading-relaxed max-w-xs">
                  {p.d}
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-nor-cream/90 hover:text-nor-cream"
                >
                  Saiba mais
                  <span className="inline-block w-6 h-px bg-current transition-all group-hover:w-10" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MÉTODO — sensory editorial grid */}
      <section id="especialistas" className="border-y border-nor-cream/10 bg-nor-green">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-28 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Brand & vision column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-10%" }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-nor-beige/60" />
                <span className="eyebrow text-nor-beige">Método NOR</span>
              </div>
              <h2 className="font-display italic font-light text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.88] tracking-tight text-nor-cream">
                Uma
                <br />
                abordagem
                <br />
                única
              </h2>
            </div>

            <p className="max-w-md text-lg md:text-xl font-light leading-relaxed text-nor-cream/80">
              Onde a precisão técnica encontra o cuidado artesanal. Uma
              experiência desenhada para quem exige o extraordinário.
            </p>

            <div className="relative w-full aspect-[3/4] overflow-hidden border border-nor-cream/10 group">
              <img
                src={methodImg}
                alt="Detalhe NOR"
                loading="lazy"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nor-green/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Pillars column */}
          <div className="lg:col-span-7 divide-y divide-nor-cream/15">
            {[
              { n: "I", t: "Professor acompanha todo o treino", d: "Presença ativa do início ao fim, corrigindo, motivando e garantindo sua segurança em cada movimento." },
              { n: "II", t: "Até 5 alunos por professor", d: "Grupos reduzidos que permitem atenção individualizada e correção personalizada para cada aluno." },
              { n: "III", t: "Planejamento individual", d: "Cada treino é planejado de acordo com seus objetivos, histórico e momento atual." },
              { n: "IV", t: "Nutrição inteligente", d: "Plano nutricional inteligente integrado ao seu programa de treinos para potencializar seus resultados." },
              { n: "V", t: "Bioimpedância mensal", d: "Avaliação mensal completa para acompanhar sua evolução com dados reais e mensuráveis." },
              { n: "VI", t: "Ajustes constantes", d: "Seu programa evolui com você. Revisões e adaptações periódicas para manter você sempre progredindo." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10%" }}
                className="group py-10 md:py-14 flex flex-col md:flex-row gap-4 md:gap-14 transition-all duration-500 ease-out hover:pl-3"
              >
                <span className="font-display italic font-light text-4xl md:text-5xl leading-none text-nor-beige/70 md:w-16 shrink-0">
                  {s.n}
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight tracking-tight text-nor-cream">
                    {s.t}
                  </h3>
                  <p className="max-w-lg text-nor-cream/70 font-light text-[15px] leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA — dados */}
      <section id="experiencia" className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="eyebrow text-nor-beige mb-6">— A Experiência</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-nor-cream">
              Um ambiente
              <br />
              <span className="italic font-light">para quem escolhe menos.</span>
            </h2>
            <p className="mt-8 max-w-md text-nor-cream/75 font-light leading-relaxed">
              Menos ruído. Menos gente. Menos improviso. Mais atenção, mais
              precisão, mais cuidado com cada detalhe da sua rotina.
            </p>
            <div className="hairline my-12 opacity-40" />
            <dl className="grid grid-cols-2 gap-10">
              {[
                { k: "12", l: "Alunos por horário" },
                { k: "1:4", l: "Proporção professor/aluno" },
                { k: "24m", l: "Sessão personalizada" },
                { k: "07", l: "Pilares do método" },
              ].map((d) => (
                <div key={d.l}>
                  <div className="font-display text-5xl md:text-6xl text-nor-cream">{d.k}</div>
                  <div className="eyebrow mt-3 text-nor-cream/60">{d.l}</div>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            <img
              src={experienceImg}
              alt="Treino personalizado"
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
            <img
              src={detailImg}
              alt="Detalhe boutique"
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover mt-16"
            />
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section id="unidades" className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="text-center mb-16">
            <div className="eyebrow text-nor-beige mb-6">— Nossas Unidades</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-nor-cream">
              Cada unidade é <span className="italic font-light">única.</span>
              <br />
              Encontre a sua.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                img: heroImg,
                tag: "Matriz",
                t: "NOR Sudoeste",
                d: "Nossa flagship. Ambiente boutique com vista aberta, luz natural e o time completo de especialistas.",
              },
              {
                img: experienceImg,
                tag: "Em breve",
                t: "NOR Asa Sul",
                d: "Uma nova casa, projetada com o mesmo cuidado. Vagas limitadas para os fundadores da unidade.",
              },
            ].map((u) => (
              <article key={u.t} className="group relative overflow-hidden">
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={u.img}
                    alt={u.t}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-nor-green/95 via-nor-green/30 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="eyebrow text-nor-beige mb-3">{u.tag}</div>
                  <h3 className="font-display text-3xl md:text-5xl text-nor-cream">{u.t}</h3>
                  <p className="mt-4 max-w-md text-sm text-nor-cream/80 font-light leading-relaxed">
                    {u.d}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href="#contato"
                      className="text-[11px] uppercase tracking-[0.28em] border border-nor-cream/50 px-5 py-3 hover:bg-nor-cream hover:text-nor-green transition-colors"
                    >
                      Ver planos
                    </a>
                    <a
                      href="#contato"
                      className="text-[11px] uppercase tracking-[0.28em] text-nor-cream/80 border-b border-nor-cream/30 pb-1 hover:text-nor-cream"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="eyebrow text-nor-beige mb-16 text-center">— Vozes NOR</div>
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
                className="border-t border-nor-cream/20 pt-8"
              >
                <blockquote className="font-display italic text-2xl md:text-3xl leading-[1.3] text-nor-cream">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 text-sm">
                  <span className="w-10 h-10 rounded-full bg-nor-cream text-nor-green inline-flex items-center justify-center font-display">
                    {t.a[0]}
                  </span>
                  <div>
                    <div className="font-medium text-nor-cream">{t.a}</div>
                    <div className="text-nor-cream/60 text-xs uppercase tracking-[0.2em] mt-1">{t.r}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="eyebrow text-nor-beige mb-6">— Vagas limitadas</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-nor-cream">
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

          <form onSubmit={(e) => e.preventDefault()} className="md:col-span-5 space-y-6">
            <div>
              <label className="eyebrow text-nor-beige">Nome</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40 text-nor-cream"
                placeholder="Como podemos te chamar"
              />
            </div>
            <div>
              <label className="eyebrow text-nor-beige">Contato</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40 text-nor-cream"
                placeholder="WhatsApp ou e-mail"
              />
            </div>
            <div>
              <label className="eyebrow text-nor-beige">Horário de preferência</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40 text-nor-cream"
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
      <footer className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-3xl tracking-[0.32em] text-nor-cream">NOR</div>
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-nor-cream/50">
              Academia Boutique
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs uppercase tracking-[0.24em] text-nor-cream/70">
            <div>
              <div className="text-nor-beige mb-2">Endereço</div>
              Sudoeste · Brasília
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
          <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 text-[11px] uppercase tracking-[0.28em] text-nor-cream/50 flex justify-between">
            <span>© {new Date().getFullYear()} NOR Academia Boutique</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
