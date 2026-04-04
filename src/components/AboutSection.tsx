import { motion } from "framer-motion";

const techs = [
  "JavaScript", "TypeScript", "React", "Node.js", "Next.js",
  "Discord.js", "TailwindCSS", "Python", "HTML/CSS", "Git",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">
              sobre mim
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight leading-[1.1]">
              Enzzo{" "}
              <span className="text-gradient">Baraldo</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Desenvolvedor apaixonado por criar soluções digitais que fazem a
              diferença. Com experiência em sites profissionais e bots de
              Discord, entrego projetos com qualidade, performance e um design
              que impressiona.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Cada projeto é tratado de forma única, com atenção aos detalhes e
              foco total na satisfação do cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm font-mono tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="px-4 py-2 rounded-full glass-subtle font-mono text-sm text-foreground/80 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
