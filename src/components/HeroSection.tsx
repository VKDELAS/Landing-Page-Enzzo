import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_80%_55%_/_0.08)_0%,_transparent_70%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/3 blur-[100px] animate-[float_10s_ease-in-out_infinite_1s]" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-mono text-xs uppercase text-primary/80 mb-8"
          >
            developer
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-foreground"
            >
              Enzzo
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-gradient glow-text"
            >
              Baraldo
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-14 leading-relaxed font-light"
          >
            Transformo ideias em experiências digitais.
            <br className="hidden sm:block" />
            Sites, bots e soluções sob medida.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow-border overflow-hidden"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full glass text-foreground font-medium text-base hover:bg-secondary/50 transition-all"
          >
            Ver Serviços
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#servicos">
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
