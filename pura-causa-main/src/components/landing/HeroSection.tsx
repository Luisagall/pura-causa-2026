import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Voluntarios plantando árboles en la montaña" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
              <Heart className="h-4 w-4" /> Bienestar + Impacto Social
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6">
              Sana tu mente.{" "}
              <span className="text-aquamarine">Ayuda al mundo.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
              Retiros gratuitos donde cuidas tu salud mental, haces voluntariado ambiental y recibes un apoyo económico simbólico. Todo financiado por empresas comprometidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/voluntario">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-2xl">
                  Quiero Participar <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sponsor">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-2xl backdrop-blur-sm">
                  Quiero Patrocinar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
