import { Search, FileText, Settings, Target, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Inicial",
    description: "Evaluamos tu situación actual y detectamos brechas normativas",
    icon: Search,
    image: "https://images.unsplash.com/photo-1762558978967-709b17a00415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3NjUxMTY4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "02",
    title: "Diseño del Programa",
    description: "Desarrollamos un programa personalizado según tus necesidades",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1762341102506-8060fc9e825a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMGRvY3VtZW50fGVufDF8fHx8MTc2NTExNjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "03",
    title: "Implementación",
    description: "Ponemos en marcha el programa con tu equipo",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1624259395247-f57268575d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwaW1wbGVtZW50YXRpb24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjUxMTY4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "04",
    title: "Seguimiento",
    description: "Monitoreamos y ajustamos para garantizar efectividad continua",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkJTIwbWV0cmljc3xlbnwxfHx8fDE3NjUxMTY4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "05",
    title: "Mejora Continua",
    description: "Actualizamos el programa según cambios normativos y mejores prácticas",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1705234384679-119488a72a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250aW51b3VzJTIwaW1wcm92ZW1lbnQlMjBncm93dGh8ZW58MXx8fHwxNzY1MTE2ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div
        style={{ y }}
        className="absolute top-10 right-0 w-72 h-72 bg-[#1E5AA8]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        className="absolute bottom-10 left-0 w-96 h-96 bg-[#F4F6F8] rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-4 text-[24px] font-bold">Nuestro Enfoque: Cómo trabajamos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Una metodología probada que garantiza resultados efectivos y sostenibles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 bg-[#1E5AA8] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-slate-900 mb-3 group-hover:text-[#1E5AA8] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E5AA8] to-[#4A7BC0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Process Flow Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-full">
            <div className="w-3 h-3 bg-[#1E5AA8] rounded-full animate-pulse" />
            <p className="text-slate-600">Proceso integral y continuo adaptado a tu organización</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
