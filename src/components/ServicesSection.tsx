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
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            serviços
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O que eu <span className="text-gradient">faço</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-border"
            >
              <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
