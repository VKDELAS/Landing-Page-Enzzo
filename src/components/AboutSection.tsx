import { motion } from "framer-motion";

const techs = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Discord.js",
  "TailwindCSS",
  "Python",
  "HTML/CSS",
  "Git",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
              sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Enzzo Pontes{" "}
              <span className="text-gradient">Baraldo</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desenvolvedor apaixonado por criar soluções digitais que fazem a
              diferença. Com experiência em sites profissionais e bots de
              Discord, entrego projetos com qualidade, performance e um design
              que impressiona.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada projeto é tratado de forma única, com atenção aos detalhes e
              foco total na satisfação do cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border font-mono text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
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
