import { Factory, Briefcase, MoreHorizontal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import React from "react";

const sectors = [
  {
    title: "Minería e Industria Extractiva",
    description: "Compliance especializado con enfoque en prevención de riesgos ambientales y cumplimiento normativo sectorial",
    icon: Factory
  },
  {
    title: "Sector Corporativo",
    description: "Programas integrales de compliance para empresas de todos los tamaños",
    icon: Briefcase
  },
  {
    title: "Otros Sectores",
    description: "Soluciones personalizadas para diversas industrias y necesidades específicas",
    icon: MoreHorizontal
  }
];

export function Sectors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [75, -75]);

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1E5AA8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#1E5AA8]/10 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-4 text-[24px] font-bold">Sectores que Atendemos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Trabajamos con empresas de cualquier tamaño —PYMES, medianas, grandes— 
            especialmente en sectores regulados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              style={{
                y: index % 2 === 0 ? y : y
              }}
            >
              <div className="w-12 h-12 bg-[#F4F6F8] rounded-lg flex items-center justify-center mb-4">
                <sector.icon className="text-[#1E5AA8]" size={24} />
              </div>
              <h3 className="text-slate-900 mb-2">{sector.title}</h3>
              <p className="text-slate-600">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}