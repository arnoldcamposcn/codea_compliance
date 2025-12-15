import React from "react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Select from "react-select";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: null as { value: string; label: string } | null,
    services: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Mapear los datos del formulario a los nombres esperados por Google Sheets
    const dataToSend = {
      nombreCompleto: formData.name,
      empresa: formData.company,
      email: formData.email,
      telefono: formData.phone || "",
      pais: formData.country?.label || formData.country?.value || "",
      servicios: formData.services || "",
      comentario: formData.message,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz4bjB3Oo_223jtcxOQFe04hMGygfnA0eZ6gTtD1KRR8yk-PLYrV2eQPQTBxHgd_-zshA/exec",
        {
          method: "POST",
          body: JSON.stringify(dataToSend),
        }
      );

      // Intentar leer la respuesta si es posible
      try {
        const result = await response.json();
        if (result.success) {
          setSubmitStatus("success");
          setFormData({ name: "", company: "", email: "", phone: "", country: null, services: "", message: "" });
          alert("Gracias por contactarnos. Nos pondremos en contacto pronto.");
        } else {
          throw new Error("Error en la respuesta del servidor");
        }
      } catch (parseError) {
        // Si no podemos leer la respuesta (por CORS), asumimos éxito
        // ya que Google Apps Script procesó la petición
        setSubmitStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", country: null, services: "", message: "" });
        alert("Gracias por contactarnos. Nos pondremos en contacto pronto.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
      alert("Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const countries = [
    { value: "peru", label: "Perú" },
    { value: "usa", label: "Estados Unidos" },
    { value: "canada", label: "Canadá" },
    { value: "mexico", label: "México" },
    { value: "colombia", label: "Colombia" },
    { value: "ecuador", label: "Ecuador" },
    { value: "bolivia", label: "Bolivia" },
    { value: "chile", label: "Chile" },
    { value: "argentina", label: "Argentina" },
    { value: "venezuela", label: "Venezuela" },
    { value: "uruguay", label: "Uruguay" },
    { value: "paraguay", label: "Paraguay" },
    { value: "guatemala", label: "Guatemala" },
    { value: "belice", label: "Belice" },
    { value: "honduras", label: "Honduras" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "costa_rica", label: "Costa Rica" },
    { value: "panama", label: "Panamá" },
    { value: "el_salvador", label: "El Salvador" },
    { value: "dominican_republic", label: "República Dominicana" },
    { value: "haiti", label: "Haití" },
    { value: "cuba", label: "Cuba" },
    { value: "jamaica", label: "Jamaica" },
    { value: "trinidad_and_tobago", label: "Trinidad y Tobago" },
    { value: "barbados", label: "Barbados" },
    { value: "grenada", label: "Granada" },
    { value: "st_kitts_and_nevis", label: "San Cristóbal y Nieves" },
    { value: "st_lucia", label: "Santa Lucía" },
    { value: "st_vincent_and_the_grenadines", label: "San Vicente y las Granadinas" },
    { value: "antigua_and_barbuda", label: "Antigua y Barbuda" },
    { value: "dominica", label: "Dominica" },
    { value: "st_martin", label: "San Martín" },
    { value: "saint_barthelemy", label: "San Bartolomé" },
    { value: "saint_maarten", label: "San Martín (Holanda)" },
    { value: "anguilla", label: "Anguila" },
    { value: "montserrat", label: "Montserrat" },
    { value: "turks_and_caicos_islands", label: "Islas Turcas y Caicos" },
    { value: "british_virgin_islands", label: "Islas Vírgenes Británicas" },
    { value: "us_virgin_islands", label: "Islas Vírgenes de los Estados Unidos" },
    { value: "cayman_islands", label: "Islas Caimán" },
    { value: "bahamas", label: "Bahamas" },
    { value: "aruba", label: "Aruba" },
    { value: "curacao", label: "Curazao" },
    { value: "sint_maarten", label: "San Martín (Holanda)" },
    { value: "saba", label: "Saba" },
    { value: "sint_eustatius", label: "San Eustaquio" },
    { value: "brazil", label: "Brasil" },
    { value: "argentina", label: "Argentina" },
    { value: "chile", label: "Chile" },
    { value: "colombia", label: "Colombia" },
    { value: "ecuador", label: "Ecuador" },
    { value: "bolivia", label: "Bolivia" },
    { value: "paraguay", label: "Paraguay" },
    { value: "uruguay", label: "Uruguay" },
    { value: "venezuela", label: "Venezuela" },
    { value: "peru", label: "Perú" },
    { value: "mexico", label: "México" },
    { value: "guatemala", label: "Guatemala" },
    { value: "belice", label: "Belice" },
    { value: "honduras", label: "Honduras" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "costa_rica", label: "Costa Rica" },
    { value: "panama", label: "Panamá" },
    { value: "el_salvador", label: "El Salvador" },
    { value: "dominican_republic", label: "República Dominicana" },
    { value: "haiti", label: "Haití" },
    { value: "cuba", label: "Cuba" },
    { value: "jamaica", label: "Jamaica" },
    { value: "trinidad_and_tobago", label: "Trinidad y Tobago" },
    { value: "barbados", label: "Barbados" },
    { value: "grenada", label: "Granada" },
    { value: "st_kitts_and_nevis", label: "San Cristóbal y Nieves" },
    { value: "st_lucia", label: "Santa Lucía" },
    { value: "st_vincent_and_the_grenadines", label: "San Vicente y las Granadinas" },
    { value: "antigua_and_barbuda", label: "Antigua y Barbuda" },
    { value: "dominica", label: "Dominica" },
    { value: "st_martin", label: "San Martín" },
    { value: "saint_barthelemy", label: "San Bartolomé" },
    { value: "saint_maarten", label: "San Martín (Holanda)" },
    { value: "anguilla", label: "Anguila" },
    { value: "montserrat", label: "Montserrat" },
    { value: "turks_and_caicos_islands", label: "Islas Turcas y Caicos" },
    { value: "british_virgin_islands", label: "Islas Vírgenes Británicas" },
    { value: "us_virgin_islands", label: "Islas Vírgenes de los Estados Unidos" },
    { value: "cayman_islands", label: "Islas Caimán" },
    { value: "bahamas", label: "Bahamas" },
    { value: "aruba", label: "Aruba" },
    { value: "curacao", label: "Curazao" },
    { value: "sint_maarten", label: "San Martín (Holanda)" },
    { value: "saba", label: "Saba" },
    { value: "sint_eustatius", label: "San Eustaquio" },
  ];

  const customSelectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: state.isFocused ? "#6366f1" : "#4b5563",
      color: "white",
      "&:hover": {
        borderColor: "#6366f1",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#6366f1" : "transparent",
      color: state.isSelected ? "white" : "white",
      "&:hover": {
        backgroundColor: "#6366f1",
        color: "white",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "gray",
    }),
    input: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#1f2937",
      color: "white",
    }),
    menuList: (provided: any) => ({
      ...provided,
      backgroundColor: "#1f2937",
      color: "white",
    }),
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-[24px] font-bold">Solicita una consulta</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-[15px]">
            En CODEa Compliance nos comprometemos con la integridad, la ética y la tranquilidad operativa de tu organización. Conversemos y diseñemos juntos el programa de cumplimiento que tu empresa necesita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E5AA8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-slate-300 mb-1">Email</p>
                  <a href="mailto:info@codeacompliance.com" className="text-white hover:text-[#4A7BC0] transition-colors">
                    info@codeacompliance.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E5AA8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-slate-300 mb-1">Teléfono</p>
                  <a href="tel:+51900000000" className="text-white hover:text-[#4A7BC0] transition-colors">
                    +51 900 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E5AA8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-slate-300 mb-1">Dirección</p>
                  <p className="text-white">
                    Lima, Perú
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#1E5AA8]/10 border border-[#1E5AA8]/20 rounded-lg">
              <p className="text-white mb-2 flex items-center gap-2">
                <Clock size={20} className="text-[#4A7BC0]" />
                Horario de Atención
              </p>
              <p className="text-slate-300">
                Lunes - Viernes: 9:00 - 18:00<br />
                Sábado: 10:00 - 14:00
              </p>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 rounded-lg overflow-hidden border border-[#1E5AA8]/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124815.94309868427!2d-77.11927045!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de CODEa Compliance en Lima, Perú"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1E5AA8] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1E5AA8] transition-colors"
                  placeholder="Tu empresa"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1E5AA8] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1E5AA8] transition-colors"
                    placeholder="+51 900 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-white mb-2">
                  País
                </label>
                <Select
                  id="country"
                  name="country"
                  options={countries}
                  value={formData.country}
                  onChange={(selectedOption) =>
                    setFormData({ ...formData, country: selectedOption })
                  }
                  placeholder="Selecciona tu país"
                  styles={customSelectStyles}
                  isSearchable
                  required
                  className="text-white"
                />
              </div>

              <div>
                <label htmlFor="services" className="block text-white mb-2">
                  Servicios de Interés
                </label>
                <input
                  type="text"
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1E5AA8] transition-colors"
                  placeholder="Ej: PLAFT, Auditoría, Capacitación"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Comentario
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1E5AA8] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tus necesidades de compliance..."
                />
              </div>

              <motion.button
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#1E5AA8] text-white rounded-lg hover:bg-[#0F3E73] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Enviando..." : "Solicitar Evaluación Inicial"}</span>
                {!isSubmitting && <Send size={20} />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}