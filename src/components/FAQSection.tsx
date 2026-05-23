import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto custa um site/projeto?",
      answer:
        "Os valores variam conforme a complexidade do projeto. Para um orçamento personalizado, entre em contato comigo no WhatsApp. Faço uma análise das suas necessidades e apresento uma proposta sem compromisso.",
    },
    {
      question: "Quanto tempo leva para o projeto ficar pronto?",
      answer:
        "O prazo depende do escopo e complexidade. Projetos simples podem levar algumas semanas, enquanto sistemas mais complexos levam mais tempo. Sempre trabalho com agilidade para entregar resultados o mais rápido possível sem comprometer a qualidade.",
    },
    {
      question: "Posso pagar parcelado?",
      answer:
        "Sim! Oferecemos opções de parcelamento para facilitar seu investimento. Conversamos sobre as melhores formas de pagamento durante o orçamento.",
    },
    {
      question: "Você atende fora da sua cidade?",
      answer:
        "Sim, atendo clientes de todo o Brasil de forma 100% online. Não importa onde você está, posso ajudar a transformar sua ideia em realidade digital.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Claro! Oferecemos suporte e manutenção após a entrega do projeto. Podemos discutir as opções de suporte durante o orçamento.",
    },
    {
      question: "Como é o processo de comunicação?",
      answer:
        "Comunicamos principalmente via WhatsApp e email. Você terá acesso direto para tirar dúvidas, acompanhar o progresso e solicitar ajustes durante o desenvolvimento.",
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70 mb-4">
            Dúvidas
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl glass-subtle p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ainda tem dúvidas? Vamos conversar!
          </p>
          <a
            href="https://wa.me/5514998671049?text=Ol%C3%A1%20Enzzo%2C%20tenho%20uma%20d%C3%BAvida!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow-border overflow-hidden"
          >
            <span className="relative z-10">Me chama no WhatsApp</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
