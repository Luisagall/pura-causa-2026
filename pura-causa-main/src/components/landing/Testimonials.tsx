import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    role: "Estudiante universitaria",
    text: "Estaba al borde del burnout académico. Este retiro me devolvió la paz y además pude hacer algo por el planeta. No puedo creer que sea gratuito.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Dir. RSC — Grupo Nova",
    text: "Necesitábamos una forma de ejecutar nuestro programa de voluntariado. Pausa con Propósito nos dio métricas reales y un impacto verificable.",
    rating: 5,
  },
  {
    name: "Valentina Ruiz",
    role: "Trabajadora independiente",
    text: "Plantar árboles mientras meditaba rodeada de naturaleza fue la mejor terapia. Y el estipendio me ayudó con mis gastos ese mes.",
    rating: 5,
  },
];

const partners = ["Grupo Nova", "EcoFundación", "Banco Verde", "Natura Corp", "ImpactLab"];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding bg-primary/[0.03]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Testimonios</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-3 mb-4">
            Historias que Inspiran
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border hover-lift"
            >
              <Quote className="h-8 w-8 text-secondary mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">Confían en nosotros</p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary/[0.03] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary/[0.03] to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-16 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {[...partners, ...partners].map((p, i) => (
                <span key={`${p}-${i}`} className="text-xl font-serif font-semibold text-primary/30 whitespace-nowrap">
                  {p}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
