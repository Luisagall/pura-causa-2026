import { Building2, Tent, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Building2,
    number: "01",
    title: "Empresas Patrocinan",
    description: "Organizaciones comprometidas financian retiros como parte de su estrategia de impacto social y ambiental.",
  },
  {
    icon: Tent,
    number: "02",
    title: "Tú Desconectas y Ayudas",
    description: "Participas en un retiro gratuito donde cuidas tu bienestar mientras haces voluntariado ambiental o comunitario.",
  },
  {
    icon: HandHeart,
    number: "03",
    title: "Recibes Apoyo y Sanas",
    description: "Obtienes herramientas de salud mental, certificados de voluntariado y un estipendio económico simbólico.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Proceso</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-3 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un modelo donde todos ganan: las empresas generan impacto real, tú sanas y el planeta mejora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-3xl bg-card border border-border hover-lift group"
            >
              <span className="text-6xl font-serif font-bold text-primary/10 absolute top-4 right-6">{step.number}</span>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
