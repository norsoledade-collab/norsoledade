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
              NOR Academia Boutique
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



      {/* PROGRAMAS — 3 cards com foto (padrão Unique) */}
      <section id="programas" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-36">
        <div className="mb-10 md:mb-14">
          <div className="border-l border-nor-cream/40 pl-4 md:pl-6 w-fit mx-auto text-left">
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-6xl leading-[1.15] md:leading-[1.05] text-nor-cream">
              Você já começou uma academia e <span className="italic font-light">desistiu depois de algumas semanas?</span>
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
            Muitas pessoas acreditam que não conseguem manter uma rotina de treinos por falta de disciplina. Mas, em muitos casos, o verdadeiro problema está na ausência de acompanhamento. Você recebe uma ficha pronta, aprende alguns exercícios e depois precisa continuar sozinho. Ninguém percebe quando sua execução está errada. Ninguém acompanha sua frequência. Ninguém verifica se o treino ainda faz sentido. Ninguém mostra, com dados, se você realmente está evoluindo. Com o tempo, surgem a insegurança, a falta de motivação e a sensação de que todo o esforço não está trazendo resultado.
          </p>
        </motion.div>

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
        <div className="max-w-4xl mx-auto">
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-6xl leading-[1.15] md:leading-[1.05] text-nor-cream">
            Foi para mudar essa experiência que a{" "}
            <span className="italic font-light">NOR criou uma forma diferente de treinar.</span>
          </h2>
          <p className="mt-6 md:mt-8 max-w-2xl text-sm md:text-base text-nor-cream/75 font-light leading-relaxed">
            A NOR é uma Academia Boutique em Soledade, estruturada para atender poucos alunos por vez e acompanhar cada pessoa de forma próxima. Aqui, você não é apenas mais um aluno dentro da academia. Sua jornada começa com uma avaliação, passa por um planejamento individual e continua com acompanhamento durante cada sessão, mensuração dos resultados e ajustes periódicos.
          </p>
          <div className="hairline my-10 md:my-12 opacity-40" />
          <p className="text-base md:text-xl text-nor-cream/85 font-light leading-relaxed">
            Não entregamos apenas acesso aos equipamentos.
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mt-10 md:mt-14"
          >
            <blockquote className="border-l-2 border-nor-beige pl-6 md:pl-8 font-display italic font-light text-xl sm:text-2xl md:text-4xl leading-[1.25] md:leading-[1.2] text-nor-cream">
              Entregamos um processo completo de acompanhamento.
              <br />
              <span className="text-nor-beige">Método. Atenção individual. Evolução constante.</span>
            </blockquote>
          </motion.div>
        </div>
      </section>


      {/* MÉTODO — 6 PILARES */}
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
            Um método construído
            <br />
            <span className="italic font-light">para acompanhar sua evolução.</span>
          </motion.h2>

          <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-14 gap-y-12 md:gap-y-16">
            {[
              {
                n: "01",
                t: "Professor durante todo o treino",
                d: "O professor permanece presente do início ao fim da sessão. Ele orienta, corrige os movimentos, acompanha sua execução e ajuda você a manter o foco durante o treino. Você não recebe apenas uma explicação inicial para depois continuar sozinho.",
              },
              {
                n: "02",
                t: "Até 5 alunos por professor",
                d: "A proporção máxima de cinco alunos por professor permite oferecer uma atenção que não seria possível em grupos grandes. Isso significa mais proximidade, mais correções e mais direcionamento durante toda a sessão.",
              },
              {
                n: "03",
                t: "Planejamento individual",
                d: "Seu treino é construído de acordo com seu objetivo, seu histórico, sua rotina e o momento atual do seu corpo. Na NOR, você não precisa se adaptar a um planejamento genérico. O planejamento é desenvolvido para se adaptar a você.",
              },
              {
                n: "04",
                t: "Nutrição inteligente",
                d: "O plano nutricional é integrado ao programa de treinamento. Assim, treino e alimentação trabalham em conjunto, criando uma estratégia mais coerente com o resultado que você deseja alcançar.",
              },
              {
                n: "05",
                t: "Bioimpedância mensal",
                d: "Todos os meses, sua evolução é acompanhada por meio da bioimpedância. A avaliação fornece dados sobre a composição corporal e permite entender como seu corpo está respondendo ao processo. Aqui, sua evolução não depende apenas do espelho ou de percepções subjetivas. Ela é acompanhada por números.",
              },
              {
                n: "06",
                t: "Ajustes constantes",
                d: "Seu programa não permanece igual indefinidamente. Com base nas avaliações, no seu desempenho e na sua evolução, o planejamento é revisado e ajustado periodicamente. O método evolui junto com você.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.1 }}
                className="border-t border-nor-cream/20 pt-6"
              >
                <div className="font-display text-nor-beige/80 text-sm tracking-[0.2em] mb-4">{p.n}</div>
                <h3 className="font-display italic font-light text-2xl md:text-3xl leading-tight text-nor-cream mb-4">
                  {p.t}
                </h3>
                <p className="text-sm md:text-base text-nor-cream/75 font-light leading-relaxed">
                  {p.d}
                </p>
              </motion.div>
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
