import React from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { FileText, Shield, Globe, GraduationCap, ClipboardCheck, Search, Briefcase, Award, ChevronDown } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Diseño e implementación de programas de cumplimiento",
    description: "Desarrollamos programas de compliance a medida, desde el diagnóstico hasta su implementación efectiva, incorporando políticas, procedimientos, controles internos, canales de denuncia y demás mecanismos clave. Con ello ayudamos a reducir riesgos legales y reputacionales, y a demostrar una gestión responsable y transparente frente a autoridades, clientes e inversionistas.",
  },
  {
    icon: Shield,
    title: "Asesoría en Prevención de Lavado de Activos y Financiamiento del Terrorismo (SPLAFT)",
    description: "Diseñamos y fortalecemos el Sistema de Prevención de Lavado de Activos y Financiamiento del Terrorismo (SPLAFT) de acuerdo con la normativa de la UIF-Perú, contribuyendo a reducir sanciones y riesgos penales vinculados al LA/FT.",
  },
  {
    icon: Globe,
    title: "Adaptación de programas de compliance internacionales al contexto local",
    description: "\"Tropicalizamos\" programas y estándares globales de compliance a la legislación peruana, alineándolos con el gobierno corporativo y las regulaciones sectoriales, para asegurar coherencia global y cumplimiento local efectivo.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación especializada",
    description: "Diseñamos y dictamos programas de formación para oficiales de cumplimiento, equipos de riesgo, auditoría interna, alta dirección y personal clave. Trabajamos con casos reales y enfoques prácticos para fortalecer la cultura de integridad y asegurar un cumplimiento efectivo en el día a día.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditorías de modelos de prevención y evaluación de eficacia",
    description: "Auditamos programas de cumplimiento para evaluar su diseño y funcionamiento real: identificamos brechas, probamos controles y proponemos mejoras concretas. Con ello ayudamos a demostrar diligencia debida y fortalecer de forma continua los modelos de prevención y compliance.",
  },
  {
    icon: Search,
    title: "Investigaciones internas",
    description: "Ante denuncias, incidentes o indicios de irregularidades, realizamos investigaciones internas con enfoque independiente y confidencial, utilizando buenas prácticas de compliance. Entregamos informes, evidencias y recomendaciones que permiten gestionar crisis, corregir la causa, proteger la reputación de la empresa y garantizar el respeto de los derechos de las personas involucradas.",
  },
  {
    icon: Briefcase,
    title: "Compliance especializado por área",
    description: "Implementamos y fortalecemos programas de cumplimiento en materias específicas: libre competencia, protección de datos personales, cumplimiento laboral y ambiental, ética corporativa y anticorrupción, y regulaciones sectoriales. Con ello ayudamos a ordenar, priorizar y controlar los riesgos transversales que afectan a la organización.",
  },
  {
    icon: Award,
    title: "Acompañamiento para certificaciones (ISO 37001, 37000, 27001 y otras)",
    description: "Acompañamos a las empresas en todo el camino hacia la certificación: diagnóstico, cierre de brechas, elaboración de documentación, implementación y preparación para auditorías externas en estándares como ISO 37001 (anticorrupción), ISO 37000 (gobierno corporativo), ISO 37301 (compliance), ISO 27001 y 27701 (seguridad y privacidad de la información), ISO 14001 (gestión ambiental), entre otros. Con ello fortalecemos la confianza de clientes, socios e inversionistas y consolidamos una cultura de cumplimiento sólida y sostenible.",
  },
];

export function Services() {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-4 text-[24px] font-bold">Nuestros Servicios</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales de compliance y gestión de riesgos legales, diseñadas para proteger tu compañía, fortalecer su reputación y hacerlo crecer con integridad.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-sm shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex items-center gap-4 flex-1">
                  <motion.div
                    animate={{
                      backgroundColor: openIndex === index ? "#3BC1AA" : "#F4F6F8",
                      scale: openIndex === index ? 1.1 : 1,
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                  >
                    <service.icon
                      className={openIndex === index ? "text-white" : "text-[#3BC1AA]"}
                      size={24}
                    />
                  </motion.div>
                  <h3 className="text-slate-900 font-bold">{service.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-slate-400" size={24} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-16">
                        <p className="text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}