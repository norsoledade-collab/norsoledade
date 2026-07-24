import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/nor-hero.jpg";
import methodImg from "@/assets/nor-method.jpg";
import experienceImg from "@/assets/nor-interior.jpg.asset.json";
import detailImg from "@/assets/nor-fachada.jpg.asset.json";
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
      {/* NAV — minimal, centered like Unique */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-nor-green/70 border-b border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" aria-label="NOR" className="flex items-center">
            <img src={norLogo.url} alt="NOR" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.28em] text-nor-cream/80">
            <a href="#programas" className="hover:text-nor-cream transition">Programas</a>
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
        {/* [VÍDEO A SUBSTITUIR — inserir arquivo .mp4 da academia aqui] */}
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

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 min-h-screen flex flex-col items-center justify-start pt-[45vh] md:justify-center md:pt-0 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
            className="max-w-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]"
          >
            <motion.div variants={fadeUp} className="eyebrow text-nor-cream mb-8 whitespace-nowrap text-[9px] sm:text-xs">
              A única Academia Boutique de Soledade
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[1.75rem] sm:text-5xl md:text-[5.5vw] leading-[1.05] tracking-[-0.02em] text-white"
            >
              Você não precisa apenas de{" "}
              <span className="italic font-light">um lugar para treinar.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-4xl text-nor-cream font-light max-w-3xl mx-auto leading-snug"
            >
              Precisa de um método que<br />
              acompanhe sua evolução.
            </motion.p>

          </motion.div>
        </div>

        <motion.a
          href="#programas"
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


      {/* INTRO — statement */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pt-10 pb-20 md:pt-16 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto">
            <div className="eyebrow text-nor-beige mb-8">— NOR Academia Boutique</div>
            <h2 className="font-display text-base sm:text-xl md:text-3xl leading-[1.5] md:leading-[1.4] tracking-[-0.01em] text-nor-cream text-left">
              Na NOR, você não recebe uma ficha genérica para depois se virar sozinho. Cada aluno conta com <span className="italic font-light">planejamento individual</span>, professor presente durante toda a sessão, nutrição integrada, avaliações mensais e ajustes constantes. Até 5 alunos por professor. <span className="italic font-light">Atenção individual do início ao fim.</span>
            </h2>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <a
              href="https://wa.me/5554993835053?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20M%C3%A9todo%20NOR"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors"
            >
              Quero conhecer o Método NOR
              <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
            </a>
            <p className="text-xs md:text-sm text-nor-cream/70 font-light max-w-md">
              Aula experimental para conhecer nossa estrutura, atendimento e metodologia.
            </p>
          </div>
          <div className="hairline max-w-24 mx-auto mt-14 opacity-40" />
        </motion.div>
      </section>

      {/* VÍDEO INSTITUCIONAL — full-bleed */}
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



      {/* IDENTIFICAÇÃO COM A DOR */}
      <section id="programas" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-36">
        <div className="mb-10 md:mb-14">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto text-left">
            <h2 className="font-display text-2xl sm:text-3xl md:text-6xl leading-[1.15] md:leading-[1.05] text-nor-cream">
              Você já começou uma academia e <span className="italic font-light">desistiu depois de algumas semanas?</span>
              <br />
              <span className="italic font-light text-nor-beige">Descubra por quê.</span>
            </h2>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <p className="text-base md:text-xl text-nor-cream/85 font-light leading-relaxed md:leading-[1.7] text-left">
            Muitas pessoas acreditam que não conseguem manter uma rotina de treinos por falta de disciplina. Mas, em muitos casos, o verdadeiro problema está na ausência de acompanhamento. Você recebe uma ficha pronta, aprende alguns exercícios e depois precisa continuar sozinho.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.25 } } }}
          className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-6 md:space-y-8"
        >
          {[
            "Ninguém percebe quando sua execução está errada.",
            "Ninguém acompanha sua frequência.",
            "Ninguém verifica se o treino ainda faz sentido.",
            "Ninguém mostra, com dados, se você realmente está evoluindo.",
          ].map((line) => (
            <motion.li
              key={line}
              variants={fadeUp}
              className="font-display italic font-light text-lg sm:text-xl md:text-3xl leading-[1.3] text-nor-cream/90 border-l border-nor-cream/25 pl-5 md:pl-6"
            >
              {line}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto mt-16 md:mt-24"
        >
          <blockquote className="border-l-2 border-nor-beige pl-6 md:pl-8 font-display italic font-light text-xl sm:text-2xl md:text-4xl leading-[1.25] md:leading-[1.2] text-nor-cream">
            Talvez não tenha faltado vontade.
            <br />
            Talvez tenha faltado <span className="text-nor-beige">método, atenção e acompanhamento.</span>
          </blockquote>
        </motion.div>
      </section>

      <section id="especialistas" className="border-y border-nor-cream/10 bg-nor-green">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 space-y-16 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-10%" }}
            className="max-w-3xl border-l border-nor-cream/40 pl-4 md:pl-6"
          >
            <h2 className="font-display italic font-light text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[1] tracking-tight text-nor-cream">
              O que acontece quando você treina sem direção?
            </h2>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 text-nor-cream/80">
            {[
              {
                title: "Treinos genéricos",
                desc: "O mesmo planejamento é utilizado para pessoas com objetivos, históricos e limitações completamente diferentes.",
              },
              {
                title: "Execuções incorretas",
                desc: "Sem um professor próximo, pequenos erros podem comprometer o exercício, diminuir sua eficiência e aumentar o risco de desconfortos ou lesões.",
              },
              {
                title: "Falta de constância",
                desc: "Quando ninguém acompanha sua rotina e seus resultados, torna-se muito mais fácil perder a motivação e desistir.",
              },
              {
                title: "Resultados difíceis de perceber",
                desc: "Sem avaliações periódicas, você não sabe com clareza o que evoluiu e o que ainda precisa ser ajustado.",
              },
              {
                title: "Meses no mesmo treino",
                desc: "O corpo evolui, mas o planejamento continua igual. Isso reduz o estímulo e pode fazer você estagnar.",
              },
            ].map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10%" }}
                className="border-t border-nor-cream/20 pt-6"
              >
                <h3 className="font-display italic text-xl md:text-2xl text-nor-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>


      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.15] md:leading-[1.05] text-nor-cream">
              Foi para mudar essa experiência que a{" "}
              <span className="italic font-light">NOR criou uma forma diferente de treinar.</span>
            </h2>
            <p className="mt-6 md:mt-8 text-sm md:text-base text-nor-cream/75 font-light leading-relaxed">
              A NOR é uma Academia Boutique em Soledade, estruturada para atender poucos alunos por vez e acompanhar cada pessoa de forma próxima. Aqui, você não é apenas mais um aluno dentro da academia. Sua jornada começa com uma avaliação, passa por um planejamento individual e continua com acompanhamento durante cada sessão, mensuração dos resultados e ajustes periódicos.
            </p>
            <div className="hairline my-8 md:my-10 opacity-40" />
            <p className="text-base md:text-lg text-nor-cream/85 font-light leading-relaxed">
              Não entregamos apenas acesso aos equipamentos.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src={experienceImg.url} alt="Interior da NOR Academia Boutique" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <blockquote className="border-l-2 border-nor-beige pl-6 md:pl-8 font-display italic font-light text-xl sm:text-2xl md:text-4xl leading-[1.25] md:leading-[1.2] text-nor-cream">
            Entregamos um processo completo de acompanhamento.
            <br />
            <span className="text-nor-beige">Método. Atenção individual. Evolução constante.</span>
          </blockquote>
        </motion.div>
      </section>


      {/* MÉTODO — 6 PILARES (grid acordeão) */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="eyebrow text-nor-beige mb-10 md:mb-12">— A experiência NOR</div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream max-w-5xl"
          >
            O que muda no seu treino{" "}
            <span className="italic font-light">a partir do primeiro dia.</span>
          </motion.h2>

          <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6">
            {[
              { n: "01", t: "Professor durante todo o treino", s: "Presença ativa em cada sessão.", d: "O professor permanece presente do início ao fim da sessão. Ele orienta, corrige os movimentos, acompanha sua execução e ajuda você a manter o foco durante o treino. Você não recebe apenas uma explicação inicial para depois continuar sozinho." },
              { n: "02", t: "Até 5 alunos por professor", s: "Grupos pequenos, atenção real.", d: "A proporção máxima de cinco alunos por professor permite oferecer uma atenção que não seria possível em grupos grandes. Isso significa mais proximidade, mais correções e mais direcionamento durante toda a sessão." },
              { n: "03", t: "Planejamento individual", s: "Um treino construído para você.", d: "Seu treino é construído de acordo com seu objetivo, seu histórico, sua rotina e o momento atual do seu corpo. Na NOR, você não precisa se adaptar a um planejamento genérico. O planejamento é desenvolvido para se adaptar a você." },
              { n: "04", t: "Nutrição inteligente", s: "Treino e alimentação integrados.", d: "O plano nutricional é integrado ao programa de treinamento. Assim, treino e alimentação trabalham em conjunto, criando uma estratégia mais coerente com o resultado que você deseja alcançar." },
              { n: "05", t: "Bioimpedância mensal", s: "Sua evolução medida por dados.", d: "Todos os meses, sua evolução é acompanhada por meio da bioimpedância. A avaliação fornece dados sobre a composição corporal e permite entender como seu corpo está respondendo ao processo. Aqui, sua evolução não depende apenas do espelho ou de percepções subjetivas. Ela é acompanhada por números." },
              { n: "06", t: "Ajustes constantes", s: "O método evolui junto com você.", d: "Seu programa não permanece igual indefinidamente. Com base nas avaliações, no seu desempenho e na sua evolução, o planejamento é revisado e ajustado periodicamente. O método evolui junto com você." },
            ].map((p, i) => (
              <motion.details
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
                className="group border-t border-nor-cream/20 pt-4 md:pt-6"
              >
                <summary className="list-none cursor-pointer flex items-start gap-3 md:gap-4">
                  <div className="font-display text-nor-beige/80 text-xs md:text-sm tracking-[0.2em] pt-1">{p.n}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display italic font-light text-lg md:text-2xl leading-tight text-nor-cream mb-1">
                      {p.t}
                    </h3>
                    <p className="text-xs md:text-sm text-nor-cream/60 font-light">{p.s}</p>
                  </div>
                  <span className="shrink-0 text-nor-beige text-xl md:text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 md:mt-5 text-sm md:text-base text-nor-cream/80 font-light leading-relaxed">
                  {p.d}
                </p>
              </motion.details>
            ))}
          </div>

          <div className="mt-14 md:mt-20 flex justify-center">
            <a
              href="#agendar"
              className="group inline-flex items-center gap-3 border border-nor-cream/40 text-nor-cream px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-cream hover:text-nor-green transition-colors"
            >
              Quero entender como funciona minha avaliação
              <span className="inline-block w-6 h-px bg-current transition-all group-hover:w-10" />
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS — citações alternadas */}
      <section id="contato" className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-12 pb-24 md:pt-16 md:pb-36">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              O que muda quando você treina com o{" "}
              <span className="italic font-light">Método NOR?</span>
            </h2>
          </div>

          <div className="mt-14 md:mt-20 max-w-5xl mx-auto space-y-14 md:space-y-20">
            {[
              { t: "Mais segurança.", d: "Você recebe orientação e correção durante a execução." },
              { t: "Mais direção.", d: "Cada treino possui um propósito dentro do seu planejamento." },
              { t: "Mais constância.", d: "A equipe acompanha sua rotina e ajuda você a não abandonar o processo." },
              { image: true as const },
              { t: "Mais clareza.", d: "As avaliações mensais mostram o que evoluiu e o que precisa ser ajustado." },
              { t: "Mais individualização.", d: "Seu programa considera seu corpo, seu momento e seus objetivos." },
              { t: "Mais eficiência.", d: "Treino, nutrição e acompanhamento trabalham de forma integrada." },
            ].map((b, i) => {
              if ("image" in b) {
                return (
                  <motion.div
                    key="mid-photo"
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="aspect-[16/9] overflow-hidden max-w-4xl mx-auto"
                  >
                    <img src={detailImg.url} alt="Aluno treinando na NOR" className="w-full h-full object-cover" />
                  </motion.div>
                );
              }
              const alignRight = i % 2 === 1;
              return (
                <motion.blockquote
                  key={b.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`max-w-2xl ${alignRight ? "ml-auto text-right border-r-2 pr-6 md:pr-8" : "text-left border-l-2 pl-6 md:pl-8"} border-nor-beige`}
                >
                  <p className="font-display italic font-light text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-nor-cream">
                    “{b.t}”
                  </p>
                  <p className="mt-4 text-sm md:text-base text-nor-cream/70 font-light">
                    {b.d}
                  </p>
                </motion.blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="eyebrow text-nor-beige mb-8">— Sua jornada</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              Como funciona sua{" "}
              <span className="italic font-light">jornada dentro da NOR?</span>
            </h2>
          </div>

          {/* Timeline horizontal (desktop) / vertical compacta (mobile) */}
          <div className="mt-14 md:mt-20 relative">
            <div className="hidden md:block absolute left-0 right-0 top-[38px] h-px bg-nor-cream/20" />
            <div className="flex md:grid md:grid-cols-6 gap-6 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              {[
                { n: "01", t: "Avaliação inicial", d: "Entendemos objetivos, histórico e rotina." },
                { n: "02", t: "Planejamento individual", d: "Programa alinhado às suas necessidades." },
                { n: "03", t: "Treino acompanhado", d: "Professor presente do início ao fim." },
                { n: "04", t: "Nutrição integrada", d: "Alimentação alinhada ao treino." },
                { n: "05", t: "Avaliação mensal", d: "Bioimpedância acompanha sua evolução." },
                { n: "06", t: "Ajustes contínuos", d: "Planejamento revisado periodicamente." },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="snap-start shrink-0 w-[75%] sm:w-[45%] md:w-auto flex flex-col items-start"
                >
                  <div className="font-display text-nor-beige text-4xl md:text-5xl leading-none tracking-tight">{s.n}</div>
                  <div className="mt-3 md:mt-4 w-8 h-px bg-nor-beige/50 md:hidden" />
                  <h3 className="mt-3 md:mt-6 font-display italic font-light text-lg md:text-xl text-nor-cream leading-tight">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-nor-cream/70 font-light leading-snug">
                    {s.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 md:mt-20 flex justify-center">
            <a
              href="https://wa.me/5554993835053?text=Ol%C3%A1%2C%20quero%20iniciar%20minha%20jornada%20na%20NOR"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors"
            >
              Quero iniciar minha jornada
              <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
            </a>
          </div>
        </div>
      </section>

      {/* PARA QUEM É A NOR */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="eyebrow text-nor-beige mb-8">— Para quem é a NOR</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              A NOR é <span className="italic font-light">para você que:</span>
            </h2>
          </div>
          <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-4 max-w-5xl">
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
              <li key={item} className="flex gap-3 items-start py-2.5 border-b border-nor-cream/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5 text-nor-beige">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm md:text-base text-nor-cream/85 font-light leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROGRAMAS NOR */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="eyebrow text-nor-beige mb-8">— Programas NOR</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              Escolha a experiência mais{" "}
              <span className="italic font-light">alinhada ao seu objetivo.</span>
            </h2>
          </div>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { img: personalImg.url, t: "NOR Personal", d: "Treinamento personalizado, realizado em grupos de até cinco alunos por professor, com planejamento individual e acompanhamento durante toda a sessão." },
              { img: crossImg.url, t: "NOR Cross", d: "Metodologia que combina força, condicionamento, mobilidade e resistência em sessões dinâmicas, adaptadas ao nível de cada aluno." },
              { img: runImg.url, t: "Clube de Corrida NOR", d: "Treinos orientados para desenvolver condicionamento e performance, combinando evolução individual e experiência em comunidade." },
            ].map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
                className="flex flex-col"
              >
                <div className="bg-nor-green-light p-8 md:p-10">
                  <h3 className="font-display italic font-light text-2xl md:text-3xl text-nor-cream mb-4">{p.t}</h3>
                  <p className="text-sm md:text-base text-nor-cream/80 font-light leading-relaxed">{p.d}</p>
                </div>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.t} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="eyebrow text-nor-beige mb-8">— Comparativo</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              Academia tradicional ou{" "}
              <span className="italic font-light">Academia Boutique?</span>
            </h2>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="border border-nor-cream/15 p-8 md:p-10">
              <div className="eyebrow text-nor-cream/50 mb-6">Em uma academia tradicional</div>
              <ul className="space-y-4">
                {[
                  "Grande volume de alunos;",
                  "Pouca proximidade com o professor;",
                  "Ficha de treino padronizada;",
                  "Acompanhamento pontual;",
                  "Avaliação sem frequência definida;",
                  "Aluno responsável por conduzir praticamente todo o processo.",
                ].map((it) => (
                  <li key={it} className="flex gap-3 text-nor-cream/70 font-light text-sm md:text-base leading-relaxed">
                    <span className="text-nor-cream/40">—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-nor-cream text-nor-green p-8 md:p-10">
              <div className="eyebrow text-nor-green/70 mb-6">Na NOR Academia Boutique</div>
              <ul className="space-y-4">
                {[
                  "Até cinco alunos por professor;",
                  "Professor durante toda a sessão;",
                  "Planejamento individual;",
                  "Nutrição integrada;",
                  "Bioimpedância mensal;",
                  "Ajustes constantes;",
                  "Acompanhamento de toda a jornada.",
                ].map((it) => (
                  <li key={it} className="flex gap-3 font-medium text-sm md:text-base leading-relaxed">
                    <span className="text-nor-green/60">●</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="mt-14 md:mt-20 max-w-3xl mx-auto border-l-2 border-nor-beige pl-6 md:pl-8 font-display italic font-light text-xl sm:text-2xl md:text-3xl leading-[1.3] text-nor-cream text-center md:text-left">
            A diferença não está apenas na estrutura.
            <br />
            <span className="text-nor-beige">Está na atenção dedicada à sua evolução.</span>
          </blockquote>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="border-t border-nor-cream/10 bg-nor-green-light/30">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow text-nor-beige mb-8">— Prova social</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              Quem conhece o Método NOR{" "}
              <span className="italic font-light">entende a diferença.</span>
            </h2>
          </div>

          <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
            <blockquote className="font-display italic font-light text-2xl sm:text-3xl md:text-5xl leading-[1.2] text-nor-cream text-center">
              “Eu já havia tentado outras vezes.
              <br />
              Na NOR, encontrei o{" "}
              <span className="text-nor-beige">acompanhamento que faltava.”</span>
            </blockquote>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              "Depoimentos em vídeo dos alunos",
              "Avaliações do Google",
              "Evolução mensurada por avaliações",
            ].map((t) => (
              <div key={t} className="border border-nor-cream/15 p-8 text-center">
                <div className="font-display italic text-lg md:text-xl text-nor-cream/70 font-light">
                  {t}
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-nor-cream/40">
                  Em breve
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSÃO — FORMULÁRIO */}
      <section id="agendar" className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow text-nor-beige mb-8">— Aula experimental</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              Antes de tentar mais uma vez sozinho,{" "}
              <span className="italic font-light">conheça uma forma diferente de treinar.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-nor-cream/75 font-light leading-relaxed max-w-2xl mx-auto">
              Agende uma aula experimental e entenda como o Método NOR pode ser aplicado ao seu objetivo, à sua rotina e ao seu momento atual.
            </p>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
            <div>
              <div className="eyebrow text-nor-beige mb-6">Na aula experimental, você poderá:</div>
              <ul className="space-y-4">
                {[
                  "Conhecer o espaço;",
                  "Entender como funciona o acompanhamento;",
                  "Conversar sobre seus objetivos;",
                  "Conhecer os programas da NOR;",
                  "Experimentar uma sessão acompanhada.",
                ].map((it) => (
                  <li key={it} className="flex gap-3 text-nor-cream/85 font-light text-base leading-relaxed border-t border-nor-cream/15 pt-4">
                    <span className="text-nor-beige">●</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const nome = fd.get("nome");
                const whats = fd.get("whatsapp");
                const objetivo = fd.get("objetivo");
                const periodo = fd.get("periodo");
                const msg = `Olá, quero agendar minha aula experimental na NOR.%0A%0ANome: ${nome}%0AWhatsApp: ${whats}%0AObjetivo: ${objetivo}%0APeríodo: ${periodo}`;
                window.open(`https://wa.me/5554993835053?text=${msg}`, "_blank");
              }}
              className="space-y-5"
            >
              <div>
                <label className="eyebrow text-nor-cream/60 mb-2 block">Nome completo</label>
                <input
                  name="nome"
                  required
                  className="w-full bg-transparent border-b border-nor-cream/30 focus:border-nor-beige outline-none py-2 text-nor-cream placeholder:text-nor-cream/30 transition-colors"
                />
              </div>
              <div>
                <label className="eyebrow text-nor-cream/60 mb-2 block">WhatsApp</label>
                <input
                  name="whatsapp"
                  required
                  type="tel"
                  className="w-full bg-transparent border-b border-nor-cream/30 focus:border-nor-beige outline-none py-2 text-nor-cream placeholder:text-nor-cream/30 transition-colors"
                />
              </div>
              <div>
                <label className="eyebrow text-nor-cream/60 mb-2 block">Seu principal objetivo</label>
                <select
                  name="objetivo"
                  required
                  defaultValue=""
                  className="w-full bg-nor-green border-b border-nor-cream/30 focus:border-nor-beige outline-none py-2 text-nor-cream transition-colors"
                >
                  <option value="" disabled>Selecione</option>
                  <option>Emagrecimento</option>
                  <option>Ganho de massa muscular</option>
                  <option>Condicionamento físico</option>
                  <option>Saúde e qualidade de vida</option>
                  <option>Voltar a treinar com acompanhamento</option>
                </select>
              </div>
              <div>
                <label className="eyebrow text-nor-cream/60 mb-2 block">Período de preferência</label>
                <select
                  name="periodo"
                  required
                  defaultValue=""
                  className="w-full bg-nor-green border-b border-nor-cream/30 focus:border-nor-beige outline-none py-2 text-nor-cream transition-colors"
                >
                  <option value="" disabled>Selecione</option>
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Noite</option>
                </select>
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 bg-nor-cream text-nor-green px-8 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors mt-6"
              >
                Quero agendar minha aula experimental
                <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
              </button>
              <p className="text-xs text-nor-cream/50 font-light text-center">
                Após o envio, nossa equipe entrará em contato para confirmar o melhor dia e horário.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="eyebrow text-nor-beige mb-8">— Perguntas frequentes</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              Dúvidas <span className="italic font-light">antes de começar.</span>
            </h2>
          </div>

          <div className="mt-14 md:mt-20 max-w-4xl">
            {[
              { q: "Preciso já ter experiência com academia?", a: "Não. O Método NOR é adaptado ao nível, histórico e momento atual de cada aluno." },
              { q: "O professor realmente acompanha toda a sessão?", a: "Sim. O acompanhamento durante toda a sessão é um dos pilares do Método NOR." },
              { q: "Quantos alunos treinam com cada professor?", a: "Trabalhamos com grupos de até cinco alunos por professor." },
              { q: "O treino é igual para todos?", a: "Não. Cada aluno recebe um planejamento construído conforme seus objetivos, histórico e evolução." },
              { q: "Como os resultados são acompanhados?", a: "A evolução é monitorada por meio do acompanhamento diário, da bioimpedância mensal e de ajustes periódicos no programa." },
              { q: "A nutrição faz parte do método?", a: "Sim. O planejamento nutricional é integrado ao programa de treinamento." },
              { q: "Como faço para conhecer a NOR?", a: "Preencha o formulário ou entre em contato pelo WhatsApp para agendar sua aula experimental." },
            ].map((f) => (
              <details
                key={f.q}
                className="group border-t border-nor-cream/15 py-6 last:border-b"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display italic font-light text-xl md:text-2xl text-nor-cream pr-8">
                    {f.q}
                  </span>
                  <span className="shrink-0 text-nor-beige text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-nor-cream/75 font-light leading-relaxed max-w-3xl">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="border-t border-nor-cream/10 bg-nor-green-light/40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-28 md:py-40 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.1] md:leading-[1] tracking-[-0.02em] text-nor-cream">
              Sua evolução não precisa depender de tentativas,{" "}
              <span className="italic font-light">treinos genéricos ou falta de direção.</span>
            </h2>
            <p className="mt-8 text-base md:text-xl text-nor-cream/80 font-light leading-relaxed max-w-3xl mx-auto">
              Na NOR, você conta com método, atenção individual e acompanhamento em cada etapa. Conheça a única Academia Boutique de Soledade.
            </p>

            <div className="mt-12 flex justify-center">
              <a
                href="#agendar"
                className="group inline-flex items-center gap-3 bg-nor-cream text-nor-green px-10 py-4 text-[11px] uppercase tracking-[0.28em] font-medium hover:bg-nor-beige transition-colors"
              >
                Agendar aula experimental
                <span className="inline-block w-6 h-px bg-nor-green transition-all group-hover:w-10" />
              </a>
            </div>

            <div className="hairline max-w-24 mx-auto mt-16 opacity-40" />

            <div className="mt-10 space-y-2 text-sm md:text-base text-nor-cream/70 font-light">
              <p>Rua 7 de Setembro, 827 — Centro — Soledade/RS</p>
              <p>WhatsApp: (54) 99383-5053</p>
            </div>

            <div className="mt-10">
              <p className="eyebrow text-nor-beige">— NOR Academia Boutique</p>
              <p className="mt-4 font-display italic font-light text-xl md:text-2xl text-nor-cream/85">
                Método. Atenção individual. Evolução constante.
              </p>
            </div>
          </motion.div>
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
                <div>WhatsApp</div>
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
            <span>Todos os direitos reservados</span>
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
