import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, Calculator, HeartPulse, FileText, Shield, Brain, Users, Receipt, PieChart, Building2, ClipboardCheck, GraduationCap, Video, BookOpen, MessageSquare } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  details: string[];
  benefits: string[];
}

interface ServiceCategory {
  title: string;
  description: string;
  services: Service[];
  icon: React.ElementType;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Derecho Laboral y Seguridad Social",
    description: "Asesoría legal especializada en el ámbito laboral y seguridad social para proteger tanto a empleadores como empleados.",
    icon: Scale,
    services: [
      {
        title: "Asesoría Laboral Empresarial",
        description: "Consultoría integral para la gestión de relaciones laborales y cumplimiento normativo.",
        details: [
          "Revisión y elaboración de contratos laborales",
          "Asesoramiento en procesos disciplinarios",
          "Gestión de conflictos laborales",
          "Auditorías de cumplimiento laboral"
        ],
        benefits: [
          "Minimización de riesgos legales",
          "Optimización de procesos de RRHH",
          "Prevención de conflictos laborales",
          "Cumplimiento normativo garantizado"
        ]
      },
      {
        title: "Seguridad Social Integral",
        description: "Gestión completa del sistema de seguridad social para su empresa.",
        details: [
          "Afiliaciones y novedades",
          "Gestión de incapacidades",
          "Pensiones y jubilaciones",
          "Riesgos laborales"
        ],
        benefits: [
          "Protección integral de empleados",
          "Reducción de cargas administrativas",
          "Optimización de costos",
          "Cumplimiento legal asegurado"
        ]
      },
      {
        title: "Procesos Laborales",
        description: "Representación legal en procesos laborales y administrativos.",
        details: [
          "Demandas laborales",
          "Conciliaciones",
          "Recursos administrativos",
          "Negociaciones colectivas"
        ],
        benefits: [
          "Defensa legal especializada",
          "Resolución efectiva de conflictos",
          "Protección de intereses empresariales",
          "Asesoramiento experto continuo"
        ]
      }
    ]
  },
  {
    title: "Contabilidad y Finanzas",
    description: "Servicios contables y financieros integrales para optimizar la gestión financiera de su empresa.",
    icon: Calculator,
    services: [
      {
        title: "Contabilidad General",
        description: "Gestión contable completa y actualizada para su empresa.",
        details: [
          "Registro de operaciones contables",
          "Elaboración de estados financieros",
          "Conciliaciones bancarias",
          "Informes contables periódicos"
        ],
        benefits: [
          "Información financiera precisa",
          "Cumplimiento de normativas contables",
          "Toma de decisiones informada",
          "Control financiero efectivo"
        ]
      },
      {
        title: "Gestión Tributaria",
        description: "Planificación y gestión fiscal optimizada para su empresa.",
        details: [
          "Declaraciones tributarias",
          "Planeación fiscal",
          "Gestión de impuestos",
          "Asesoría tributaria"
        ],
        benefits: [
          "Optimización fiscal legal",
          "Prevención de contingencias",
          "Ahorro en impuestos",
          "Cumplimiento tributario"
        ]
      },
      {
        title: "Auditoría Financiera",
        description: "Revisión exhaustiva de la información financiera y procesos contables.",
        details: [
          "Auditoría de estados financieros",
          "Revisión de procesos internos",
          "Control interno",
          "Informes de auditoría"
        ],
        benefits: [
          "Detección de áreas de mejora",
          "Fortalecimiento de controles",
          "Transparencia financiera",
          "Confianza de stakeholders"
        ]
      }
    ]
  },
  {
    title: "Seguridad y Salud en el Trabajo",
    description: "Implementación y gestión integral de sistemas de seguridad y salud laboral.",
    icon: HeartPulse,
    services: [
      {
        title: "Sistema de Gestión SST",
        description: "Implementación y mantenimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo.",
        details: [
          "Diseño del sistema de gestión",
          "Implementación de políticas",
          "Evaluación y seguimiento",
          "Capacitación del personal"
        ],
        benefits: [
          "Cumplimiento legal",
          "Ambiente laboral seguro",
          "Reducción de accidentes",
          "Mejora continua"
        ]
      },
      {
        title: "Evaluación de Riesgos Psicosociales",
        description: "Identificación y gestión de factores de riesgo psicosocial en el entorno laboral.",
        details: [
          "Evaluación de factores de riesgo",
          "Diagnóstico organizacional",
          "Programas de intervención",
          "Seguimiento y control"
        ],
        benefits: [
          "Mejor clima laboral",
          "Aumento de productividad",
          "Reducción de ausentismo",
          "Bienestar laboral"
        ]
      },
      {
        title: "Capacitación y Entrenamiento",
        description: "Programas de formación en seguridad y salud laboral.",
        details: [
          "Talleres especializados",
          "Formación de brigadas",
          "Simulacros de emergencia",
          "Certificaciones"
        ],
        benefits: [
          "Personal capacitado",
          "Cultura de prevención",
          "Respuesta efectiva",
          "Competencias actualizadas"
        ]
      }
    ]
  }
];

interface ModalProps {
  service: Service;
  category: string;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ModalProps> = ({ service, category, isOpen, onClose }) => {
  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el servicio de ${service.title} de la categoría ${category}. Me gustaría recibir más información y una cotización.`;
    window.open(`https://wa.me/573176964215?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full p-8 rounded-lg shadow-xl relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="h-[1px] w-20 bg-gray-200" />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">Servicios Incluidos</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Beneficios</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-gray-900 text-white py-4 text-lg tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Solicitar Cotización
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedService, setSelectedService] = useState<{
    service: Service;
    category: string;
  } | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                  <Icon size={32} className="text-gray-900" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="space-y-24">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent -z-10 rounded-xl opacity-50" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                    onClick={() => setSelectedService({ service, category: category.title })}
                    className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-lg border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                    <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all">
                      Ver detalles
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: 5 }}
                        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService.service}
          category={selectedService.category}
          isOpen={true}
          onClose={() => setSelectedService(null)}
        />
      )}
    </motion.div>
  );
};

export default Services;