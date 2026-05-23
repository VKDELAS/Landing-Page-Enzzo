import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ProofSection = () => {
  const proofs = [
    { label: "Projetos entregues", value: "1+" },
    { label: "Bots de Discord", value: "Vários" },
    { label: "Tempo de resposta", value: "<1h" },
    { label: "Satisfação", value: "100%" },
  ];

  return (
    <section id="numeros" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Check className="w-5 h-5 text-primary" />
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  {proof.value}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{proof.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
