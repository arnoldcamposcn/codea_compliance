import { CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const benefits = [
  "Blindaje legal y regulatorio",
  "Reducción de sanciones y multas",
  "Reputación corporativa sólida",
  "Detección temprana de riesgos legales, operativos y reputacionales.",
  "Cultura organizacional ética alineada con buenas prácticas.",
  "Mayor confianza de inversionistas, clientes y otros stakeholders.",
  "Ventaja competitiva en licitaciones, contratos y nuevos mercados.",
  "Procesos internos ordenados, trazables y controlados."
];

export function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E5AA8] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E5AA8] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-[24px] font-bold">Beneficios de trabajar con CODEa Compliance</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Valor tangible para tu organización en protección legal, gestión de riesgos y reputación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                x: index % 2 === 0 ? 5 : -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="text-[#1E5AA8] flex-shrink-0 mt-1" size={24} />
              </motion.div>
              <p className="text-slate-200">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}