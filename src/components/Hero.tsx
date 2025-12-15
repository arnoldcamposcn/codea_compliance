import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1689489608113-107f10b63d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2NTExMDc5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Compliance Especializado en Sector Minero",
    description: "Soluciones integrales para la industria extractiva",
    label: "Minería"
  },
  {
    image: "https://images.unsplash.com/photo-1642522029695-2d4d222e41f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2NTEwNjEwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Programas de Cumplimiento a Medida",
    description: "Diseñados según las mejores prácticas internacionales",
    label: "Programas"
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1ZGl0JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc2NTExMDc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Prevención de Lavado de Activos (PLAFT)",
    description: "Protegemos tu organización contra riesgos financieros",
    label: "PLAFT"
  },
  {
    image: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMHNlbWluYXJ8ZW58MXx8fHwxNzY1MDE1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Capacitación y Formación Continua",
    description: "Fortalecemos la cultura de compliance en tu equipo",
    label: "Capacitación"
  },
  {
    image: "https://images.unsplash.com/photo-1589307904488-7d60ff29c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGludmVzdGlnYXRpb258ZW58MXx8fHwxNzY1MTEwNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Investigaciones Internas y Due Diligence",
    description: "Análisis exhaustivo para la toma de decisiones informada",
    label: "Investigaciones"
  }
];

const SLIDE_DURATION = 6000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              scale: { duration: 6, ease: "linear" },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-slate-950/90 z-10" />
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].subtitle}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-3 tracking-tight">
            CODEa <span className="text-slate-400">Compliance</span>
          </h1>
          <div className="w-24 h-px bg-[#1E5AA8] mx-auto mt-6" />
        </motion.div>

        <div className="mb-8 min-h-[120px] md:min-h-[100px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 tracking-wide">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-6 justify-center flex-wrap mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-white text-slate-900 rounded-sm hover:bg-slate-100 transition-all uppercase tracking-wider text-sm"
          >
            Contactar
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-transparent text-white border border-white/30 rounded-sm hover:bg-white/10 hover:border-white/50 transition-all uppercase tracking-wider text-sm"
          >
            Servicios
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-2 justify-center items-center"
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-16 md:w-20 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.label}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="text-white/50" size={24} />
        </motion.div>
      </motion.div>

      {/* Minimal Decorative Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent z-20" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent z-20" />
    </section>
  );
}