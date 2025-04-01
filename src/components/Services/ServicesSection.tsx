import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, FileText, Brain, Users, Calculator, Receipt, PieChart, 
  Building2, HeartPulse, ClipboardCheck, Shield, BookOpen, 
  GraduationCap, Video, FileCheck, MessageSquare
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const serviceCategories = [
  {
    title: "Derecho Laboral y Seguridad Social",
    icon: <Scale size={40} />,
    services: [
      { icon: <FileText size={24} />, title: "Asesoría Laboral" },
      { icon: <ClipboardCheck size={24} />, title: "Contratos Laborales" },
      { icon: <Shield size={24} />, title: "Seguridad Social" },
      { icon: <Users size={24} />, title: "Relaciones Sindicales" }
    ]
  },
  {
    title: "Contabilidad y Finanzas",
    icon: <Calculator size={40} />,
    services: [
      { icon: <Receipt size={24} />, title: "Contabilidad General" },
      { icon: <PieChart size={24} />, title: "Estados Financieros" },
      { icon: <Building2 size={24} />, title: "Auditoría Financiera" },
      { icon: <FileCheck size={24} />, title: "Gestión de Nómina" }
    ]
  },
  {
    title: "Seguridad y Salud en el Trabajo",
    icon: <HeartPulse size={40} />,
    services: [
      { icon: <Brain size={24} />, title: "Riesgos Psicosociales" },
      { icon: <Shield size={24} />, title: "Protocolos de Seguridad" },
      { icon: <Users size={24} />, title: "Clima Organizacional" },
      { icon: <ClipboardCheck size={24} />, title: "Auditoría SST" }
    ]
  },
  {
    title: "Servicios Digitales",
    icon: <GraduationCap size={40} />,
    services: [
      { icon: <Video size={24} />, title: "Webinars" },
      { icon: <BookOpen size={24} />, title: "E-books y Guías" },
      { icon: <MessageSquare size={24} />, title: "Asesorías Virtuales" },
      { icon: <FileText size={24} />, title: "Plantillas Legales" }
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-[2px] bg-gray-900 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones integrales en derecho laboral, contabilidad y seguridad ocupacional
            para impulsar el éxito de su empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-gray-900">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-gray-400">{service.icon}</span>
                    <span className="text-sm">{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button className="bg-gray-900 text-white px-8 py-4 text-lg tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            <MessageSquare size={20} />
            Consulta Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;