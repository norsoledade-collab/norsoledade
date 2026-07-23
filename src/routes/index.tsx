import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/nor-hero.jpg";
import methodImg from "@/assets/nor-method.jpg";
import experienceImg from "@/assets/nor-interior.jpg.asset.json";
import norLogo from "@/assets/nor-logo.jpeg.asset.json";
import heroVideo from "@/assets/nor-hero.mp4";
import personalImg from "@/assets/nor-personal.jpg.asset.json";
import crossImg from "@/assets/nor-cross.jpg.asset.json";
import runImg from "@/assets/nor-run.jpg.asset.json";
import introVideo from "@/assets/nor-intro.mp4";
import footerLogo from "@/assets/nor-footer-logo-transparent.png.asset.json";

export const Route = createFileRoute("/")({
  component: NorLanding,
});

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function NorLanding() {
  return (
    <div className="bg-nor-green text-nor-cream min-h-screen selection:bg-nor-cream selection:text-nor-green font-body overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-nor-green/70 border-b border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" aria-label="NOR" className="flex items-center">
            <img src={norLogo.url} alt="NOR" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em] text-nor-cream/80">
            <a href="#metodo" className="hover:text-nor-cream transition">Método</a>
            <a href="#jornada" className="hover:text-nor-cream transition">Jornada</a>
            <a href="#programas" className="hover:text-nor-cream transition">Programas</a>
            <a href="#faq" className="hover:text-nor-cream transition">FAQ</a>
            <a href="#contato" className="hover:text-nor-cream transition">Contato</a>
          </nav>
          <a
            href="#contato"
            className="text-[11px] uppercase tracking-[0.28em] border border-nor-cream/40 px-4 py-2 hover:bg-nor-cream hover:text-nor-green transition-colors"
          >
            Aula experimental
          </a>
        </div>
      </header>

      {/* SEÇÃO 1 — HERO */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        <video
          src={heroVideo}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Interior da NOR Academia Boutique"
          className="absolute inset-0 w-full h-full object-cover object-center scale-125"
          style={{ filter: "saturate(1.25) contrast(1.12) brightness(0.95) sepia(0.18) hue-rotate(-8deg)" }}
        />
        <div className="absolute inset-0 bg-[#3a1e00] mix-blend-color opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-nor-green/70 via-nor-green/30 to-nor-green/20" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 min-h-screen flex flex-col items-center justify-start pt-[38vh] md:justify-center md:pt-0 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
            className="max-w-5xl [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]"
          >
            <motion.div variants={fadeUp} className="eyebrow text-nor-cream mb-6 text-[10px] sm:text-xs">
              A única Academia Boutique de Soledade
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[1.75rem] sm:text-5xl md:text-[5vw] leading-[1.05] tracking-[-0.02em] text-white"
            >
              Você não precisa apenas de um lugar para treinar.
              <br />
              <span className="italic font-light">Precisa de um método que acompanhe sua evolução.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-nor-cream/90 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Na NOR, você não recebe uma ficha genérica para depois se virar sozinho. Planejamento individual, professor presente durante toda a sessão, nutrição integrada, avaliações mensais e ajustes constantes. Até 5 alunos por professor.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="#contato"
                className="inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors"
              >
                Quero conhecer o Método NOR
                <span className="inline-block w-6 h-px bg-nor-green" />
              </a>
              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-nor-cream/70">
                Aula experimental · Estrutura, atendimento e metodologia
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#dor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-nor-cream/70 hover:text-nor-cream transition-colors"
          aria-label="Role para explorar"
        >
          <span className="eyebrow text-[10px]">Role para explorar</span>
          <span className="block w-px h-10 bg-nor-cream/50 animate-pulse" />
        </motion.a>
      </section>

      {/* SEÇÃO 2 — IDENTIFICAÇÃO COM A DOR */}
      <section id="dor" className="mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-36 pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto">
            <div className="eyebrow text-nor-beige mb-6">— Identificação</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] tracking-[-0.01em] text-nor-cream text-left">
              Você já começou uma academia e <span className="italic font-light">desistiu depois de algumas semanas?</span>
            </h2>
          </div>
          <div className="mt-10 md:mt-14 space-y-5 text-sm md:text-base text-nor-cream/80 font-light leading-relaxed text-left">
            <p>Muitas pessoas acreditam que não conseguem manter uma rotina de treinos por falta de disciplina. Mas, em muitos casos, o verdadeiro problema está na ausência de acompanhamento.</p>
            <p>Você recebe uma ficha pronta, aprende alguns exercícios e depois precisa continuar sozinho.</p>
            <ul className="space-y-2 pt-4 border-l border-nor-cream/20 pl-6">
              <li>Ninguém percebe quando sua execução está errada.</li>
              <li>Ninguém acompanha sua frequência.</li>
              <li>Ninguém verifica se o treino ainda faz sentido.</li>
              <li>Ninguém mostra, com dados, se você realmente está evoluindo.</li>
            </ul>
            <p>Com o tempo, surgem a insegurança, a falta de motivação e a sensação de que todo o esforço não está trazendo resultado.</p>
            <p className="pt-4 font-display text-xl md:text-2xl italic text-nor-cream leading-snug">
              Talvez não tenha faltado vontade. Talvez tenha faltado método, atenção e acompanhamento.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 3 — CONSEQUÊNCIAS */}
      <section className="border-y border-nor-cream/10 bg-nor-green">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-24 text-left">
            <div className="eyebrow text-nor-beige mb-6">— Consequências</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
              O que acontece quando você treina <span className="italic font-light">sem direção?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {[
              { t: "Treinos genéricos", d: "O mesmo planejamento é utilizado para pessoas com objetivos, históricos e limitações completamente diferentes." },
              { t: "Execuções incorretas", d: "Sem um professor próximo, pequenos erros podem comprometer o exercício, diminuir sua eficiência e aumentar o risco de lesões." },
              { t: "Falta de constância", d: "Quando ninguém acompanha sua rotina e seus resultados, torna-se muito mais fácil perder a motivação e desistir." },
              { t: "Resultados invisíveis", d: "Sem avaliações periódicas, você não sabe com clareza o que evoluiu e o que ainda precisa ser ajustado." },
              { t: "Meses no mesmo treino", d: "O corpo evolui, mas o planejamento continua igual. Isso reduz o estímulo e pode fazer você estagnar." },
            ].map((c) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-15%" }}
                className="border-t border-nor-cream/15 pt-6"
              >
                <h3 className="font-display text-lg md:text-2xl text-nor-cream leading-snug">{c.t}</h3>
                <p className="mt-3 text-sm text-nor-cream/70 font-light leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — SOLUÇÃO / INTRO VIDEO */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-36 pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto">
            <div className="eyebrow text-nor-beige mb-6">— A solução</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] tracking-[-0.01em] text-nor-cream text-left">
              Foi para mudar essa experiência que a NOR criou uma <span className="italic font-light">forma diferente de treinar.</span>
            </h2>
          </div>
          <div className="mt-10 md:mt-14 space-y-5 text-sm md:text-base text-nor-cream/80 font-light leading-relaxed text-left">
            <p>A NOR é uma Academia Boutique em Soledade, estruturada para atender poucos alunos por vez e acompanhar cada pessoa de forma próxima.</p>
            <p>Aqui, você não é apenas mais um aluno dentro da academia. Sua jornada começa com uma avaliação, passa por um planejamento individual e continua com acompanhamento durante cada sessão, mensuração dos resultados e ajustes periódicos.</p>
            <p className="pt-4 font-display text-xl md:text-2xl italic text-nor-cream leading-snug">
              Não entregamos apenas acesso aos equipamentos. Entregamos um processo completo de acompanhamento.
            </p>
            <p className="eyebrow text-nor-beige pt-2">Método · Atenção individual · Evolução constante</p>
          </div>
        </motion.div>
      </section>

      {/* VÍDEO INSTITUCIONAL */}
      <section className="w-full pb-24 md:pb-36">
        <div className="relative w-screen h-[85vh] md:h-[90vh] overflow-hidden">
          <video
            src={introVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover scale-125"
            style={{ filter: "saturate(1.25) contrast(1.12) brightness(0.95) sepia(0.18) hue-rotate(-8deg)" }}
          />
          <div className="absolute inset-0 bg-[#3a1e00] mix-blend-color opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-nor-green/40 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* SEÇÃO 5 — SEIS PILARES */}
      <section id="metodo" className="border-y border-nor-cream/10 bg-nor-green">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-24 text-left">
            <div className="eyebrow text-nor-beige mb-6">— Método NOR</div>
            <h2 className="font-display italic font-light text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight text-nor-cream">
              Um método construído<br />para acompanhar sua evolução
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="relative w-full aspect-[3/4] overflow-hidden border border-nor-cream/10">
                <img
                  src={methodImg}
                  alt="Detalhe NOR"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nor-green/40 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {[
                { n: "01", t: "Professor durante todo o treino", d: "O professor permanece presente do início ao fim da sessão. Orienta, corrige movimentos, acompanha sua execução e ajuda a manter o foco durante o treino." },
                { n: "02", t: "Até 5 alunos por professor", d: "A proporção máxima de cinco alunos por professor permite oferecer uma atenção que não seria possível em grupos grandes. Mais proximidade, mais correções e mais direcionamento." },
                { n: "03", t: "Planejamento individual", d: "Seu treino é construído de acordo com seu objetivo, seu histórico, sua rotina e o momento atual do seu corpo. O planejamento é desenvolvido para se adaptar a você." },
                { n: "04", t: "Nutrição inteligente", d: "O plano nutricional é integrado ao programa de treinamento. Treino e alimentação trabalham em conjunto, com uma estratégia coerente ao resultado desejado." },
                { n: "05", t: "Bioimpedância mensal", d: "Todos os meses sua evolução é acompanhada por meio da bioimpedância. Sua evolução não depende do espelho — é acompanhada por números." },
                { n: "06", t: "Ajustes constantes", d: "Com base nas avaliações, no seu desempenho e na sua evolução, o planejamento é revisado periodicamente. O método evolui junto com você." },
              ].map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="space-y-3"
                >
                  <span className="block font-display italic text-sm md:text-lg text-nor-cream/40 border-b border-nor-cream/15 pb-2">
                    {p.n}
                  </span>
                  <h3 className="text-nor-cream text-base md:text-lg font-medium leading-snug tracking-tight">{p.t}</h3>
                  <p className="text-nor-cream/65 text-sm leading-relaxed">{p.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — BENEFÍCIOS */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
        <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-20 text-left">
          <div className="eyebrow text-nor-beige mb-6">— Benefícios</div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
            O que muda quando você treina <span className="italic font-light">com o Método NOR?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {[
            { t: "Mais segurança", d: "Orientação e correção durante a execução dos exercícios." },
            { t: "Mais direção", d: "Cada treino possui um propósito dentro do seu planejamento." },
            { t: "Mais constância", d: "A equipe acompanha sua rotina e ajuda você a não abandonar o processo." },
            { t: "Mais clareza", d: "As avaliações mensais mostram o que evoluiu e o que precisa ser ajustado." },
            { t: "Mais individualização", d: "Seu programa considera seu corpo, seu momento e seus objetivos." },
            { t: "Mais eficiência", d: "Treino, nutrição e acompanhamento trabalham de forma integrada." },
          ].map((b) => (
            <div key={b.t} className="border-t border-nor-cream/15 pt-5">
              <h3 className="font-display italic text-xl md:text-2xl text-nor-cream">{b.t}</h3>
              <p className="mt-2 text-sm text-nor-cream/70 font-light leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 7 — JORNADA */}
      <section id="jornada" className="border-y border-nor-cream/10 bg-nor-green">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-24 text-left">
            <div className="eyebrow text-nor-beige mb-6">— Jornada</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
              Como funciona sua jornada <span className="italic font-light">dentro da NOR?</span>
            </h2>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {[
              { t: "Avaliação inicial", d: "Entendemos seus objetivos, histórico, rotina e as dificuldades que impediram resultados anteriormente." },
              { t: "Planejamento individual", d: "A partir da avaliação, construímos um programa de treinamento alinhado às suas necessidades." },
              { t: "Treino acompanhado", d: "Durante cada sessão, o professor acompanha sua execução do início ao fim, em grupos de até cinco alunos." },
              { t: "Nutrição integrada", d: "Sua alimentação é alinhada ao treinamento e aos resultados que você deseja alcançar." },
              { t: "Avaliação mensal", d: "A bioimpedância permite acompanhar sua evolução por meio de dados reais." },
              { t: "Ajustes contínuos", d: "Com base nos resultados, o planejamento é atualizado para continuar estimulando sua evolução." },
            ].map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10%" }}
                className="border-t border-nor-cream/15 pt-6 list-none"
              >
                <span className="eyebrow text-nor-beige">Etapa {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg md:text-2xl text-nor-cream leading-snug">{s.t}</h3>
                <p className="mt-3 text-sm text-nor-cream/70 font-light leading-relaxed">{s.d}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 md:mt-20 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 border border-nor-cream/50 text-nor-cream px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-cream hover:text-nor-green transition-colors"
            >
              Quero iniciar minha jornada
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — PARA QUEM É A NOR */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="border-l border-nor-cream/40 pl-4 md:pl-6">
              <div className="eyebrow text-nor-beige mb-6">— Para quem</div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.1] text-nor-cream">
                A NOR é <span className="italic font-light">para você que:</span>
              </h2>
            </div>
          </div>
          <ul className="md:col-span-7 space-y-4 text-sm md:text-base text-nor-cream/80 font-light">
            {[
              "Já frequentou outras academias, mas não conseguiu manter a constância;",
              "Sente insegurança ao executar exercícios sozinho;",
              "Quer emagrecer com planejamento e acompanhamento;",
              "Busca ganho de massa muscular com uma estratégia individual;",
              "Deseja melhorar o condicionamento e a qualidade de vida;",
              "Possui uma rotina corrida e quer aproveitar melhor seu tempo de treino;",
              "Não quer ser apenas mais um aluno dentro de uma academia;",
              "Valoriza acompanhamento, organização e evolução mensurável.",
            ].map((item) => (
              <li key={item} className="flex gap-4 border-t border-nor-cream/15 pt-4">
                <span className="text-nor-beige font-display italic mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 9 — PROGRAMAS */}
      <section id="programas" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-36">
        <div className="mb-16 md:mb-24">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto text-left">
            <div className="eyebrow text-nor-beige mb-6">— Programas NOR</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
              Escolha a experiência mais <span className="italic font-light">alinhada ao seu objetivo.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: personalImg.url,
              t: "NOR Personal",
              d: "Treinamento personalizado, em grupos de até cinco alunos por professor, com planejamento individual e acompanhamento durante toda a sessão.",
            },
            {
              img: crossImg.url,
              t: "NOR Cross",
              d: "Metodologia que combina força, condicionamento, mobilidade e resistência em sessões dinâmicas, adaptadas ao nível de cada aluno.",
            },
            {
              img: runImg.url,
              t: "Clube de Corrida NOR",
              d: "Treinos orientados para desenvolver condicionamento e performance, combinando evolução individual e experiência em comunidade.",
            },
          ].map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col bg-nor-green"
            >
              <div className="p-7 md:p-10 min-h-[240px] md:min-h-[280px] flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-4xl text-nor-cream">{p.t}</h3>
                <p className="mt-4 md:mt-5 text-[13px] md:text-sm text-nor-cream/75 font-light leading-relaxed">
                  {p.d}
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SEÇÃO 10 — COMPARATIVO */}
      <section className="border-y border-nor-cream/10 bg-nor-green">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-24 text-left">
            <div className="eyebrow text-nor-beige mb-6">— Comparativo</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
              Academia tradicional ou <span className="italic font-light">Academia Boutique?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="border border-nor-cream/15 p-8 md:p-10">
              <div className="eyebrow text-nor-cream/60 mb-6">Academia tradicional</div>
              <ul className="space-y-3 text-sm md:text-base text-nor-cream/60 font-light">
                {[
                  "Grande volume de alunos",
                  "Pouca proximidade com o professor",
                  "Ficha de treino padronizada",
                  "Acompanhamento pontual",
                  "Avaliação sem frequência definida",
                  "Aluno conduz praticamente todo o processo",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-nor-cream/40">·</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-nor-beige/50 bg-nor-green-light p-8 md:p-10 relative">
              <div className="eyebrow text-nor-beige mb-6">Na NOR Academia Boutique</div>
              <ul className="space-y-3 text-sm md:text-base text-nor-cream font-light">
                {[
                  "Até cinco alunos por professor",
                  "Professor durante toda a sessão",
                  "Planejamento individual",
                  "Nutrição integrada",
                  "Bioimpedância mensal",
                  "Ajustes constantes",
                  "Acompanhamento de toda a jornada",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-nor-beige">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-14 md:mt-20 max-w-3xl mx-auto text-center font-display italic text-xl md:text-3xl text-nor-cream leading-snug">
            A diferença não está apenas na estrutura. Está na atenção dedicada à sua evolução.
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA — dados */}
      <section id="experiencia" className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="eyebrow text-nor-beige mb-6">— A Experiência</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-6xl leading-[1.15] md:leading-[1.05] text-nor-cream">
              Um ambiente
              <br />
              <span className="italic font-light">para quem exige mais.</span>
            </h2>
            <p className="mt-6 md:mt-8 max-w-md text-sm md:text-base text-nor-cream/75 font-light leading-relaxed">
              Mais atenção, mais precisão, mais cuidado. Cada detalhe pensado para quem busca o extraordinário em cada treino.
            </p>
            <div className="hairline my-10 md:my-12 opacity-40" />
            <dl className="grid grid-cols-2 gap-8 md:gap-10">
              {[
                { k: "15", l: "Alunos por horário" },
                { k: "1:5", l: "Proporção professor/aluno" },
                { k: "280m", l: "Área da academia" },
                { k: "06", l: "Pilares do método" },
              ].map((d) => (
                <div key={d.l}>
                  <div className="font-display text-4xl md:text-6xl text-nor-cream">{d.k}</div>
                  <div className="eyebrow mt-2 md:mt-3 text-nor-cream/60 text-[10px] md:text-xs">{d.l}</div>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-6">
            <img
              src={experienceImg.url}
              alt="Interior da NOR"
              loading="lazy"
              className="w-full h-[420px] md:h-[640px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 — PROVA SOCIAL */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-24 text-left">
            <div className="eyebrow text-nor-beige mb-6">— Vozes NOR</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
              Quem conhece o Método NOR <span className="italic font-light">entende a diferença.</span>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-center font-display italic text-lg md:text-2xl text-nor-cream/90 leading-snug mb-16">
            “Eu já havia tentado outras vezes. Na NOR, encontrei o acompanhamento que faltava.”
          </p>
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
                <blockquote className="font-display italic text-lg md:text-3xl leading-[1.35] md:leading-[1.3] text-nor-cream">
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

      {/* SEÇÃO 12 — CONVERSÃO */}
      <section id="contato" className="border-t border-nor-cream/10 bg-nor-green-light">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="border-l border-nor-cream/40 pl-4 md:pl-6">
              <div className="eyebrow text-nor-beige mb-6">— Conversão</div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.1] text-nor-cream">
                Antes de tentar mais uma vez sozinho, <span className="italic font-light">conheça uma forma diferente de treinar.</span>
              </h2>
            </div>
            <p className="mt-8 max-w-lg text-sm md:text-base text-nor-cream/80 font-light leading-relaxed">
              Agende uma aula experimental e entenda como o Método NOR pode ser aplicado ao seu objetivo, à sua rotina e ao seu momento atual.
            </p>
            <div className="mt-10">
              <div className="eyebrow text-nor-beige mb-4">Na aula experimental você poderá:</div>
              <ul className="space-y-2 text-sm md:text-base text-nor-cream/80 font-light">
                {[
                  "Conhecer o espaço",
                  "Entender como funciona o acompanhamento",
                  "Conversar sobre seus objetivos",
                  "Conhecer os programas da NOR",
                  "Experimentar uma sessão acompanhada",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-nor-beige">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="md:col-span-6 space-y-6">
            <div>
              <label className="eyebrow text-nor-beige">Nome completo</label>
              <input
                type="text"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40 text-nor-cream"
                placeholder="Como podemos te chamar"
              />
            </div>
            <div>
              <label className="eyebrow text-nor-beige">WhatsApp</label>
              <input
                type="tel"
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream placeholder:text-nor-cream/40 text-nor-cream"
                placeholder="(54) 99999-9999"
              />
            </div>
            <div>
              <label className="eyebrow text-nor-beige">Qual é seu principal objetivo?</label>
              <select
                className="mt-3 w-full bg-transparent border-b border-nor-cream/30 py-3 focus:outline-none focus:border-nor-cream text-nor-cream appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-nor-green">Selecione uma opção</option>
                <option className="bg-nor-green">Emagrecimento</option>
                <option className="bg-nor-green">Ganho de massa muscular</option>
                <option className="bg-nor-green">Condicionamento físico</option>
                <option className="bg-nor-green">Saúde e qualidade de vida</option>
                <option className="bg-nor-green">Voltar a treinar com acompanhamento</option>
              </select>
            </div>
            <div>
              <label className="eyebrow text-nor-beige">Qual período é melhor para você?</label>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Manhã", "Tarde", "Noite"].map((p) => (
                  <label key={p} className="cursor-pointer">
                    <input type="radio" name="periodo" value={p} className="peer sr-only" />
                    <span className="inline-block px-5 py-2 text-[11px] uppercase tracking-[0.24em] border border-nor-cream/30 text-nor-cream/80 peer-checked:bg-nor-cream peer-checked:text-nor-green transition-colors">
                      {p}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors mt-4"
            >
              Quero agendar minha aula experimental
              <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
            </button>
            <p className="text-[11px] uppercase tracking-[0.2em] text-nor-cream/50">
              Após o envio, nossa equipe entrará em contato para confirmar dia e horário.
            </p>
          </form>
        </div>
      </section>

      {/* SEÇÃO 13 — FAQ */}
      <section id="faq" className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
        <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto mb-16 md:mb-20 text-left">
          <div className="eyebrow text-nor-beige mb-6">— FAQ</div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
            Perguntas <span className="italic font-light">frequentes.</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-nor-cream/15 border-y border-nor-cream/15">
          {[
            { q: "Preciso já ter experiência com academia?", a: "Não. O Método NOR é adaptado ao nível, histórico e momento atual de cada aluno." },
            { q: "O professor realmente acompanha toda a sessão?", a: "Sim. O acompanhamento durante toda a sessão é um dos pilares do Método NOR." },
            { q: "Quantos alunos treinam com cada professor?", a: "Trabalhamos com grupos de até cinco alunos por professor." },
            { q: "O treino é igual para todos?", a: "Não. Cada aluno recebe um planejamento construído conforme seus objetivos, histórico e evolução." },
            { q: "Como os resultados são acompanhados?", a: "A evolução é monitorada por meio do acompanhamento diário, da bioimpedância mensal e de ajustes periódicos no programa." },
            { q: "A nutrição faz parte do método?", a: "Sim. O planejamento nutricional é integrado ao programa de treinamento." },
            { q: "Como faço para conhecer a NOR?", a: "Preencha o formulário ou entre em contato pelo WhatsApp para agendar sua aula experimental." },
          ].map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex justify-between items-start gap-6 cursor-pointer list-none">
                <span className="font-display text-lg md:text-2xl text-nor-cream leading-snug">{f.q}</span>
                <span className="mt-1 text-nor-beige text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm md:text-base text-nor-cream/75 font-light leading-relaxed max-w-2xl">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SEÇÃO 14 — CHAMADA FINAL */}
      <section className="border-t border-nor-cream/10 bg-nor-green-light">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 text-center">
          <div className="eyebrow text-nor-beige mb-8">— Chamada final</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.08] tracking-[-0.02em] text-nor-cream max-w-4xl mx-auto">
            Sua evolução não precisa depender de tentativas, treinos genéricos ou <span className="italic font-light">falta de direção.</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-nor-cream/80 font-light leading-relaxed">
            Na NOR, você conta com método, atenção individual e acompanhamento em cada etapa. Conheça a única Academia Boutique de Soledade.
          </p>
          <div className="mt-12">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors"
            >
              Agendar aula experimental
              <span className="inline-block w-6 h-px bg-nor-green" />
            </a>
          </div>
          <p className="mt-10 text-[11px] uppercase tracking-[0.28em] text-nor-cream/60">
            Método · Atenção individual · Evolução constante
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img src={footerLogo.url} alt="NOR" className="h-8 md:h-10 w-auto" />
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-nor-cream/50">
              Academia Boutique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[11px] sm:text-xs tracking-[0.08em] text-nor-cream/70 normal-case w-full md:w-auto">
            <div className="min-w-0 break-words">
              <div className="eyebrow text-nor-beige mb-2">Endereço</div>
              Rua 7 de Setembro, 827
              <br />
              Centro, Soledade/RS
            </div>
            <div className="min-w-0 break-words">
              <div className="eyebrow text-nor-beige mb-2">Contato</div>
              <div className="space-y-1">
                <div>nor.soledade@gmail.com</div>
                <div>WhatsApp (54) 99383-5053</div>
                <div>@nor.soledade</div>
              </div>
            </div>
            <div className="min-w-0 break-words">
              <div className="eyebrow text-nor-beige mb-2">Horário</div>
              Seg–Sex · 06h–21h
              <br />
              Sáb · 08h–12h
            </div>
          </div>
        </div>
        <div className="border-t border-nor-cream/10">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 text-[11px] uppercase tracking-[0.28em] text-nor-cream/50 flex justify-between">
            <span>© {new Date().getFullYear()} NOR Academia Boutique</span>
            <span>Método · Atenção · Evolução</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5554993835053?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20NOR"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-62.6c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 36.3 18.7-67.9-4.4-7.2c-18.5-30.5-28.2-65.6-28.2-101.7 0-107.5 87.5-195 195-195s195 87.5 195 195-87.5 195-195 195zm107.5-146.5c-5.8-2.9-34.2-16.9-39.5-18.8-5.3-1.9-9.1-2.9-12.9 2.9-3.7 5.8-14.6 18.8-17.9 22.6-3.2 3.8-6.5 4.2-12.2 1.4-34.2-17.1-56.5-30.5-78.8-69.1-6-10.4-12-22.4-3.4-32.2 8.5-9.8 23.7-24.9 26.5-27.6 2.9-2.8 5.8-5.9 1.7-11.6-4.1-5.7-12.9-18.8-17.5-25.5-4.6-6.7-9.2-5.8-12.5-5.9-3.2-.1-6.9-.1-10.6-.1-3.7 0-9.7 1.4-14.8 8.4-5.1 7-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.5 32.6-13.3 37.2-26.1 4.6-12.9 4.6-23.9 3.3-26.2-1.2-2.3-4.4-3.5-9.2-5.5z" />
        </svg>
      </a>
    </div>
  );
}
