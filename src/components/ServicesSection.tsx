import { motion } from "framer-motion";
import { Globe, Bot, Code2, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Sites modernos, responsivos e otimizados para SEO. Landing pages, portfólios e sites institucionais.",
  },
  {
    icon: Bot,
    title: "Bots de Discord",
    description:
      "Bots personalizados para seu servidor. Moderação, música, economia, RPG e muito mais.",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description:
      "Aplicações web completas com painel administrativo, banco de dados e integrações.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description:
      "Interfaces que funcionam perfeitamente em qualquer dispositivo — desktop, tablet e mobile.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-32 px-6 relative">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">
            serviços
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            O que eu <span className="text-gradient">faço</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl glass-subtle shine hover:border-primary/20 transition-all duration-500 cursor-default"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
