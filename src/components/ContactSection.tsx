import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/5514998671049?text=Ol%C3%A1%20Enzzo%2C%20gostaria%20de%20um%20or%C3%A7amento!";

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
            contato
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Entre em contato e solicite seu orçamento. Respondo rápido!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group hover:glow-border"
          >
            <MessageCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">WhatsApp</p>
              <p className="text-foreground font-semibold">(14) 99867-1049</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+5514998671049"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group hover:glow-border"
          >
            <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Telefone</p>
              <p className="text-foreground font-semibold">(14) 99867-1049</p>
            </div>
          </motion.a>
        </div>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all glow-border"
        >
          <MessageCircle className="w-5 h-5" />
          Chamar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
