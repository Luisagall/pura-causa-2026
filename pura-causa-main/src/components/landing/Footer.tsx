import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16 px-4 md:px-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="font-serif text-xl font-semibold">Pausa con Propósito</span>
          </div>
          <p className="text-primary-foreground/60 max-w-md leading-relaxed">
            Conectamos personas que necesitan sanar con empresas que quieren generar impacto. Un modelo donde todos ganan.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Plataforma</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <Link to="/voluntario" className="hover:text-primary-foreground transition-colors">Portal Voluntarios</Link>
            <Link to="/sponsor" className="hover:text-primary-foreground transition-colors">Portal Empresas</Link>
            <a href="#como-funciona" className="hover:text-primary-foreground transition-colors">Cómo Funciona</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>hola@pausaconproposito.org</span>
            <span>+57 300 123 4567</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © 2026 Pausa con Propósito. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
