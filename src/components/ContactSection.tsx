import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/5514998671049?text=Ol%C3%A1%20Enzzo%2C%20gostaria%20de%20um%20or%C3%A7amento!";

  return (
    <section id="contato" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">
            contato
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-base mb-16 max-w-md mx-auto leading-relaxed">
            Entre em contato e solicite seu orçamento. Respondo rápido!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-6 rounded-2xl glass-subtle shine hover:border-primary/20 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</p>
              <p className="text-foreground font-medium">(14) 99867-1049</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+5514998671049"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 p-6 rounded-2xl glass-subtle shine hover:border-primary/20 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefone</p>
              <p className="text-foreground font-medium">(14) 99867-1049</p>
            </div>
          </motion.a>
        </div>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow-border overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
