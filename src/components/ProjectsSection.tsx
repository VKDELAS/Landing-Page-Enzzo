import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "BataTop Delivery",
    description:
      "Site completo de delivery com cardápio, carrinho de compras, sistema de pedidos, autenticação e painel administrativo.",
    techs: ["React", "TypeScript", "TailwindCSS"],
    url: "https://batatop.vercel.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">
            portfólio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Projetos <span className="text-gradient">realizados</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl glass-subtle shine hover:border-primary/20 transition-all duration-500"
            >
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-5 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary/80 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
