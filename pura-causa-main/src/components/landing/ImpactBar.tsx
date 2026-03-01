import { useEffect, useState } from "react";
import { TreePine, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

const ImpactBar = () => {
  const trees = useCountUp(12450);
  const hours = useCountUp(8320);
  const communities = useCountUp(156);

  const stats = [
    { icon: TreePine, value: trees.toLocaleString(), label: "Árboles Plantados" },
    { icon: Clock, value: hours.toLocaleString(), label: "Horas de Bienestar" },
    { icon: Users, value: communities.toLocaleString(), label: "Comunidades Ayudadas" },
  ];

  return (
    <section id="impacto" className="relative -mt-16 z-10 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactBar;
