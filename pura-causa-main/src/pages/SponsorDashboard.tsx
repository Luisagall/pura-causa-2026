import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, FileBarChart, Rocket, Settings, Home, ChevronLeft,
  DollarSign, Leaf as LeafIcon, Users, TrendingUp, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const navItems = [
  { icon: LayoutDashboard, label: "Resumen", id: "resumen" },
  { icon: Rocket, label: "Campañas Activas", id: "campanas" },
  { icon: FileBarChart, label: "Reportes ESG", id: "reportes" },
  { icon: Settings, label: "Configuración", id: "config" },
];

const campaigns = [
  { title: "Reforestación Antioquia", progress: 78, funded: "$12.400.000", participants: 45, trees: 2300 },
  { title: "Bienestar Universitario Bogotá", progress: 45, funded: "$8.200.000", participants: 30, trees: 0 },
  { title: "Arte y Comunidad Boyacá", progress: 92, funded: "$5.600.000", participants: 22, trees: 150 },
];

const SponsorDashboard = () => {
  const [activeTab, setActiveTab] = useState("resumen");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-primary text-primary-foreground flex flex-col transition-all duration-300 fixed h-full z-40`}>
        <div className="p-4 flex items-center gap-2 border-b border-primary-foreground/10">
          {sidebarOpen && (
            <span className="font-serif text-lg font-semibold flex-1">Portal Empresas</span>
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
        {activeTab === "resumen" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-serif font-bold text-foreground">Bienvenido, Grupo Nova</h1>
                <p className="text-muted-foreground">Resumen de tu impacto corporativo</p>
              </div>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl gap-2">
                <Download className="h-4 w-4" /> Descargar Reporte ESG
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {[
                { label: "Total Invertido", value: "$26.2M COP", icon: DollarSign, change: "+12%" },
                { label: "CO₂ Compensado", value: "48.5 Ton", icon: LeafIcon, change: "+8%" },
                { label: "Personas Beneficiadas", value: "97", icon: Users, change: "+23%" },
                { label: "ROI Social", value: "4.2x", icon: TrendingUp, change: "+0.3x" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-3xl bg-card border border-border p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <kpi.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">{kpi.change}</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-foreground">{kpi.value}</p>
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Campañas Activas</h2>
            <div className="space-y-4">
              {campaigns.map((c) => (
                <div key={c.title} className="rounded-3xl bg-card border border-border p-6 flex items-center gap-6">
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-foreground mb-1">{c.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                      <span>{c.participants} participantes</span>
                      <span>{c.funded} invertido</span>
                      {c.trees > 0 && <span>{c.trees} árboles</span>}
                    </div>
                    <Progress value={c.progress} className="h-2" />
                  </div>
                  <span className="text-2xl font-serif font-bold text-primary">{c.progress}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "campanas" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Campañas Activas</h1>
            <p className="text-muted-foreground mb-8">Detalle de tus proyectos de impacto</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((c) => (
                <div key={c.title} className="rounded-3xl bg-card border border-border p-8 hover-lift">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">{c.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Progreso</span><span className="font-medium">{c.progress}%</span></div>
                    <Progress value={c.progress} className="h-2" />
                    <div className="flex justify-between"><span className="text-muted-foreground">Inversión</span><span className="font-medium">{c.funded}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Participantes</span><span className="font-medium">{c.participants}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "reportes" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Reportes ESG</h1>
            <p className="text-muted-foreground mb-8">Descarga informes para tu reporte de sostenibilidad</p>
            <div className="rounded-3xl bg-card border border-border p-10 text-center">
              <FileBarChart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="font-serif font-semibold text-xl text-foreground mb-2">Reporte de Impacto Q1 2026</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Incluye métricas de CO₂ compensado, personas beneficiadas, horas de voluntariado y desglose de inversión.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl gap-2 px-8">
                <Download className="h-4 w-4" /> Descargar Reporte PDF
              </Button>
            </div>
          </motion.div>
        )}

        {activeTab === "config" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Configuración</h1>
            <p className="text-muted-foreground mb-8">Gestiona tu cuenta corporativa</p>
            <div className="rounded-3xl bg-card border border-border p-8 max-w-lg">
              <h3 className="font-serif font-semibold text-foreground mb-4">Datos de la Empresa</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Empresa</span><span className="font-medium">Grupo Nova S.A.</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">NIT</span><span className="font-medium">900.123.456-7</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Plan</span><span className="font-medium">Premium</span></div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default SponsorDashboard;
