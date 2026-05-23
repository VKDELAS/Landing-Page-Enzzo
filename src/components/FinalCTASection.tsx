import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";

const FinalCTASection = () => {
  const whatsappLink =
    "https://wa.me/5514998671049?text=Ol%C3%A1%20Enzzo%2C%20gostaria%20de%20um%20or%C3%A7amento!";

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-primary" />
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70">
              Ação agora
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Não perca mais <span className="text-gradient">tempo</span> e{" "}
            <span className="text-gradient">clientes</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Vamos tirar sua ideia do papel hoje mesmo. Respondo em menos de 1 hora e estou pronto para começar seu projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all glow-border overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Quero meu site agora!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            💬 Respondo hoje mesmo • 🚀 Processo rápido • ✅ Satisfação garantida
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
