import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Compass, Leaf, Heart, BarChart3, Home, ChevronLeft,
  MapPin, Calendar, Users, DollarSign, Wind, BookOpen, Brain, Smile
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import retreatWellness from "@/assets/retreat-wellness.jpg";
import retreatReforestation from "@/assets/retreat-reforestation.jpg";
import retreatArt from "@/assets/retreat-art.jpg";

const navItems = [
  { icon: Compass, label: "Explorar Experiencias", id: "explorar" },
  { icon: Leaf, label: "Mis Retiros", id: "retiros" },
  { icon: Heart, label: "Bienestar Digital", id: "bienestar" },
  { icon: BarChart3, label: "Mi Impacto", id: "impacto" },
];

const retreats = [
  {
    title: "Reforestación en la Montaña",
    location: "Sierra Nevada, Colombia",
    date: "15–18 Mar 2026",
    vacancies: 12,
    stipend: "$80.000 COP",
    image: retreatReforestation,
    tags: ["Naturaleza", "Reforestación"],
  },
  {
    title: "Mindfulness & Yoga Comunitario",
    location: "Valle del Cocora",
    date: "22–25 Mar 2026",
    vacancies: 8,
    stipend: "$60.000 COP",
    image: retreatWellness,
    tags: ["Bienestar", "Meditación"],
  },
  {
    title: "Arte Comunitario Rural",
    location: "Boyacá, Colombia",
    date: "5–8 Abr 2026",
    vacancies: 15,
    stipend: "$70.000 COP",
    image: retreatArt,
    tags: ["Arte", "Comunidad"],
  },
];

const wellnessResources = [
  { icon: Wind, title: "Técnicas de Respiración", desc: "Ejercicios guiados para reducir la ansiedad" },
  { icon: BookOpen, title: "Guías de Estrés", desc: "Estrategias basadas en evidencia científica" },
  { icon: Brain, title: "Meditación Guiada", desc: "Sesiones de 5 a 20 minutos" },
  { icon: Smile, title: "Diario de Gratitud", desc: "Práctica diaria para el bienestar emocional" },
];

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("explorar");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-primary text-primary-foreground flex flex-col transition-all duration-300 fixed h-full z-40`}>
        <div className="p-4 flex items-center gap-2 border-b border-primary-foreground/10">
          {sidebarOpen && (
            <span className="font-serif text-lg font-semibold flex-1">Mi Portal</span>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-primary-foreground/10 rounded-lg">
            <ChevronLeft className={`h-5 w-5 transition-transform ${!sidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                activeTab === item.id
                  ? "bg-primary-foreground/15 text-primary-foreground font-medium"
                  : "text-primary-foreground/60 hover:bg-primary-foreground/10"
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-primary-foreground/10">
          <Link to="/">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-primary-foreground/60 hover:bg-primary-foreground/10">
              <Home className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>Volver al Inicio</span>}
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300 p-6 md:p-10`}>
        {activeTab === "explorar" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Explorar Experiencias</h1>
            <p className="text-muted-foreground mb-8">Encuentra tu próximo retiro y transforma tu bienestar</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retreats.map((r) => (
                <div key={r.title} className="rounded-3xl overflow-hidden bg-card border border-border hover-lift group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {r.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-3">{r.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{r.location}</div>
                      <div className="flex items-center gap-2"><Calendar className="h-4 w-4" />{r.date}</div>
                      <div className="flex items-center gap-2"><Users className="h-4 w-4" />{r.vacancies} cupos</div>
                      <div className="flex items-center gap-2 text-accent font-semibold"><DollarSign className="h-4 w-4" />{r.stipend}</div>
                    </div>
                    <a href="https://forms.gle/rDjnXEm9J3iVFkEo8" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full mt-5 bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                        Postularme
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "retiros" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Mis Retiros</h1>
            <p className="text-muted-foreground mb-8">Gestiona tus postulaciones y experiencias</p>
            <div className="rounded-3xl bg-card border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg">Reforestación en la Montaña</h3>
                  <p className="text-sm text-muted-foreground">15–18 Mar 2026 · Sierra Nevada</p>
                </div>
                <Badge className="ml-auto bg-secondary/20 text-secondary-foreground">Confirmado</Badge>
              </div>
              <Progress value={75} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">Preparación completada al 75%</p>
            </div>
          </motion.div>
        )}

        {activeTab === "bienestar" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Bienestar Digital</h1>
            <p className="text-muted-foreground mb-8">Recursos para cuidar tu salud mental</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wellnessResources.map((res) => (
                <div key={res.title} className="rounded-3xl bg-card border border-border p-8 hover-lift cursor-pointer group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <res.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{res.title}</h3>
                  <p className="text-muted-foreground">{res.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "impacto" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Mi Impacto</h1>
            <p className="text-muted-foreground mb-8">Tu contribución al mundo</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Árboles Plantados", value: "47", icon: Leaf },
                { label: "Horas Voluntariado", value: "120", icon: Heart },
                { label: "Estipendio Acumulado", value: "$210.000", icon: DollarSign },
              ].map((s) => (
                <div key={s.label} className="rounded-3xl bg-card border border-border p-8 text-center">
                  <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-serif font-bold text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default VolunteerDashboard;
