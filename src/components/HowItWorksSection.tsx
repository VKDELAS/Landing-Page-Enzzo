import { motion } from "framer-motion";
import { MessageCircle, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Me chama no WhatsApp",
      description: "Entre em contato e vamos conversar sobre seu projeto e suas necessidades.",
      number: "01",
    },
    {
      icon: MessageSquare,
      title: "Conversamos sobre seu projeto",
      description: "Entendo seus objetivos, público-alvo e desafios para criar a solução perfeita.",
      number: "02",
    },
    {
      icon: CheckCircle,
      title: "Entrego pronto e funcionando",
      description: "Seu projeto é entregue completo, testado e pronto para trazer resultados.",
      number: "03",
    },
  ];

  return (
    <section id="como-funciona" className="py-32 px-6 relative">
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
            Processo
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Processo simples e direto para tirar sua ideia do papel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative pt-8"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Number badge - positioned outside the card */}
              <div className="absolute -top-6 left-8 z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-lg">
                  {step.number}
                </div>
              </div>

              <div className="relative p-8 rounded-2xl glass-subtle hover:border-primary/20 transition-all duration-500 h-full">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5514998671049?text=Ol%C3%A1%20Enzzo%2C%20gostaria%20de%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow-border overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Vamos começar agora
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
