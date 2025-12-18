import { Award } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-slate-900 mb-6 text-[24px] font-bold">
              Compromiso con la Integridad y la Excelencia
            </h2>
            <p className="text-slate-600 mb-6">
              CODEa Compliance es una consultora especializada en compliance corporativo 
              y gestión de riesgos legales y reputacionales. Nos integramos como aliado 
              estratégico de tu organización para que el cumplimiento deje de ser solo 
              una obligación y se convierta en una ventaja competitiva.
            </p>
            <p className="text-slate-600 mb-6">
              Diseñamos, implementamos y supervisamos programas de cumplimiento a medida, 
              alineados con las mejores prácticas internacionales y adaptados a la normativa 
              local que aplica a tu negocio. Abordamos de forma transversal riesgos penales, 
              de libre competencia, protección de datos personales, protección al consumidor 
              y publicidad, ambiental y regulatorios, reduciendo la exposición a contingencias, 
              sanciones y daños reputacionales y promoviendo una cultura de integridad y 
              transparencia.
            </p>
            <p className="text-slate-600 mb-6">
              Complementamos este trabajo con auditorías de modelos de prevención, investigaciones 
              internas, apoyadas en herramientas tecnológicas avanzadas. Esto nos permite identificar 
              oportunamente riesgos significativos y evidencias clave para la toma de decisiones, 
              fortaleciendo la confianza de tus stakeholders y la sostenibilidad de tu organización 
              en el tiempo.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-[#1E5AA8] mb-2">15+</div>
                <p className="text-slate-600">Años de Experiencia</p>
              </div>
              <div>
                <div className="text-[#1E5AA8] mb-2">200+</div>
                <p className="text-slate-600">Clientes Satisfechos</p>
              </div>
              <div>
                <div className="text-[#1E5AA8] mb-2">98%</div>
                <p className="text-slate-600">Tasa de Éxito</p>
              </div>
              <div>
                <div className="text-[#1E5AA8] mb-2">24/7</div>
                <p className="text-slate-600">Soporte Disponible</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              style={{ y: imageY }}
              className="relative rounded-sm overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0OTUyMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business meeting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ backgroundColor: '#3BC1AA' }}
              className="absolute -bottom-6 -left-6 text-white p-8 rounded-sm shadow-xl"
            >
              <p className="mb-1">Certificación ISO</p>
              <div>27001:2022</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}