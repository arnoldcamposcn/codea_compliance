import { AlertTriangle, Shield, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";

export function WhyCompliance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Parallax background decorations */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#1E5AA8]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#F4F6F8] rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-6 text-[24px] font-bold">¿Por qué Compliance hoy?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-[#F4F6F8] rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-[#1E5AA8]" size={32} />
            </div>
            <h3 className="text-slate-900 mb-4">Entorno Regulatorio Exigente</h3>
            <p className="text-slate-600">
              Hoy las empresas no solo deben cumplir la ley, sino también demostrar que hacen las cosas bien, construyendo una cultura de integridad y una gestión de riesgos alineada con las mejores prácticas internacionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-[#F4F6F8] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-[#1E5AA8]" size={32} />
            </div>
            <h3 className="text-slate-900 mb-4">Prevención y Gestión de Riesgos</h3>
            <p className="text-slate-600">
              Un programa de compliance permite identificar, prevenir y mitigar riesgos legales y penales, sanciones, y daños reputacionales, protegiendo tanto los activos como la continuidad del negocio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-[#F4F6F8] rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-[#1E5AA8]" size={32} />
            </div>
            <h3 className="text-slate-900 mb-4">Compromiso con la Ética</h3>
            <p className="text-slate-600">
              Una cultura de integridad permite reducir conductas de riesgo, facilitar la relación con autoridades y clientes, fortalecer la confianza de inversionistas y mejorar el clima laboral, generando decisiones más sólidas y negocios sostenibles en el tiempo.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-50 border-l-4 border-[#1E5AA8] rounded-r-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 flex items-center">
              <p className="text-slate-700 leading-relaxed text-balance text-[15px]">
                En un <strong>entorno regulatorio cada vez más exigente</strong>, las empresas necesitan algo más que cumplir la ley: deben gestionar estratégicamente sus riesgos y vivir la integridad. Desde <strong>CODEa Compliance</strong> acompañamos a las organizaciones en el <strong>diagnóstico, diseño, implementación y monitoreo de programas de cumplimiento a medida</strong>, que identifican, previenen y mitigan <strong>riesgos penales, de libre competencia, de protección de datos, regulatorios y reputacionales</strong>, alineando su gestión con las mejores prácticas internacionales. Complementamos este trabajo con <strong>auditorías, revisiones forenses e investigaciones internas</strong> apoyadas en herramientas tecnológicas avanzadas, para detectar oportunamente riesgos significativos y evidencias clave para la toma de&nbsp;decisiones.
              </p>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzcyUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjUxMTcyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Apretón de manos simbolizando compromiso y confianza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}