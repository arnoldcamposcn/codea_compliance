import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-slate-400">
              Excelencia en compliance jurídico y gestión de riesgos legales.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Compliance Corporativo
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Asesoría Legal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Auditoría
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capacitación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1E5AA8] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1E5AA8] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#1E5AA8] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 CODEa Compliance. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}