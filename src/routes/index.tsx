import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/nor-hero.jpg";
import methodImg from "@/assets/nor-method.jpg";
import experienceImg from "@/assets/nor-interior.jpg.asset.json";
import detailImg from "@/assets/nor-fachada.jpg.asset.json";
import norLogo from "@/assets/nor-logo.jpeg.asset.json";
import heroVideo from "@/assets/nor-hero.mp4.asset.json";
import personalImg from "@/assets/nor-personal.jpg.asset.json";
import crossImg from "@/assets/nor-cross.jpg.asset.json";
import runImg from "@/assets/nor-run.jpg.asset.json";
import introVideo from "@/assets/nor-intro.mp4.asset.json";
import footerLogo from "@/assets/nor-footer-logo.jpeg.asset.json";


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
          src={heroVideo.url}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Interior da NOR Academia Boutique"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nor-green/70 via-nor-green/55 to-nor-green/95" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10 min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="eyebrow text-nor-beige mb-8 whitespace-nowrap text-[9px] sm:text-xs">
              NOR Academia Boutique
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-6xl md:text-[6.5vw] leading-[1] tracking-[-0.02em] text-nor-cream whitespace-nowrap"
            >
              Cada treino é <span className="italic font-light">único.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-4xl text-nor-cream/85 font-light max-w-3xl mx-auto leading-snug"
            >
              O lugar perfeito para construir<br />
              a melhor versão de você.
            </motion.p>
          </motion.div>
        </div>

      </section>

      {/* INTRO — statement */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-28 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto">
            <div className="eyebrow text-nor-beige mb-8">— NOR Academia Boutique</div>
            <h2 className="font-display text-xl sm:text-2xl md:text-5xl leading-[1.3] md:leading-[1.2] tracking-[-0.01em] text-nor-cream text-left">
              Somos uma academia boutique<br />
              feita para quem entende que<br />
              <span className="italic font-light">evolução exige método</span>,<br />
              atenção individual e um ambiente<br />
              à altura do seu tempo.
            </h2>
          </div>
          <div className="hairline max-w-24 mx-auto mt-14 opacity-40" />
        </motion.div>
      </section>

      {/* VÍDEO INSTITUCIONAL — full-bleed */}
      <section className="w-full pb-24 md:pb-36">
        <div className="relative w-screen h-[85vh] md:h-[90vh] overflow-hidden">
          <video
            src={introVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        </div>
      </section>



      {/* PROGRAMAS — 3 cards com foto (padrão Unique) */}
      <section id="programas" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-36">
        <div className="mb-24 md:mb-32">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto text-left">
            <div className="eyebrow text-nor-beige mb-6">— Nossos Programas</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-6xl leading-[1.15] md:leading-[1.05] text-nor-cream">
              Liderados por <span className="italic font-light">especialistas.</span>
            </h2>
            <p className="mt-5 md:mt-6 max-w-2xl text-sm md:text-base text-nor-cream/75 font-light">
              Modalidades pensadas para cada objetivo, cada corpo e cada etapa da vida.
              Uma experiência personalizada, do primeiro treino ao seu melhor resultado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: personalImg.url,
              tag: "Musculação",
              t: "NOR Personal",
              d: "Treinamento personalizado com acompanhamento próximo em grupos de até 5 alunos. Sessões planejadas conforme seus objetivos, com avaliações periódicas e ajustes constantes para um processo seguro, eficiente e consistente.",
            },
            {
              img: crossImg.url,
              tag: "Funcional",
              t: "NOR Cross",
              d: "Metodologia que combina força, condicionamento, mobilidade e resistência em sessões dinâmicas. Cada treino é adaptado ao seu nível, elevando capacidade física e qualidade de movimento.",
            },
            {
              img: runImg.url,
              tag: "Clube de Corrida",
              t: "Clube de Corrida NOR",
              d: "Mais do que correr: uma experiência de comunidade e evolução. Treinos orientados para desenvolver performance e compartilhar a jornada com quem tem o mesmo propósito.",
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
            <div className="border-l border-nor-cream/40 pl-4 md:pl-6 space-y-6 md:space-y-8">
              <div className="eyebrow text-nor-beige">— Método NOR</div>
              <h2 className="font-display italic font-light text-[2rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1] md:leading-[0.88] tracking-tight text-nor-cream">
                Uma abordagem
                <br />
                única
              </h2>
              <p className="max-w-md text-sm md:text-xl font-light leading-relaxed text-nor-cream/80">
                Onde a precisão técnica encontra o cuidado artesanal. Uma
                experiência desenhada para quem exige o extraordinário.
              </p>
            </div>


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
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-12">
              {[
                { n: "I", t: "Exclusividade em cada treino", d: "1 professor para até 5 alunos, garantindo acompanhamento próximo em todos os momentos." },
                { n: "II", t: "Método integrado", d: "Treino personalizado aliado a um plano nutricional inteligente para potencializar seus resultados." },
                { n: "III", t: "Evolução comprovada", d: "Bioimpedância e mapa de metas para acompanhar seu progresso com clareza." },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="space-y-3"
                >
                  <span className="block font-display italic text-sm md:text-lg text-nor-cream/40 border-b border-nor-cream/15 pb-2">
                    {s.n}
                  </span>
                  <h3 className="text-nor-cream text-base md:text-lg font-medium leading-snug tracking-tight">
                    {s.t}
                  </h3>
                  <p className="text-nor-cream/60 text-sm leading-relaxed">
                    {s.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>


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
              Mais atenção, mais precisão, mais cuidado. Cada detalhe pensado
              para quem busca o extraordinário em cada treino.
            </p>
            <div className="hairline my-10 md:my-12 opacity-40" />
            <dl className="grid grid-cols-2 gap-8 md:gap-10">
              {[
                { k: "15", l: "Alunos por horário" },
                { k: "1:5", l: "Proporção professor/aluno" },
                { k: "280m", l: "Área da academia" },
                { k: "03", l: "Pilares do método" },
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

      {/* CTA / CONTATO */}
      <section id="contato" className="border-t border-nor-cream/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="eyebrow text-nor-beige mb-6">— Vagas limitadas</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-7xl leading-[1.05] md:leading-[0.98] tracking-[-0.02em] text-nor-cream">
              A NOR abre
              <br />
              <span className="italic font-light">poucas portas</span>
              <br />
              por mês.
            </h2>
            <p className="mt-6 md:mt-8 max-w-lg text-sm md:text-base text-nor-cream/75 font-light leading-relaxed">
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
