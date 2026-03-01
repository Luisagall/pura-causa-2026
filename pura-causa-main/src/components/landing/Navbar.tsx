import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="font-serif text-xl font-semibold text-primary">
              Pausa con Propósito
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Cómo Funciona
            </a>
            <a href="#impacto" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Impacto
            </a>
            <a href="#testimonios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <Link to="/voluntario">
              <Button variant="outline" size="sm">Quiero Participar</Button>
            </Link>
            <Link to="/sponsor">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Quiero Patrocinar
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#como-funciona" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Cómo Funciona</a>
              <a href="#impacto" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Impacto</a>
              <a href="#testimonios" className="py-2 text-sm font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Testimonios</a>
              <Link to="/voluntario" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Quiero Participar</Button>
              </Link>
              <Link to="/sponsor" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Quiero Patrocinar</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
