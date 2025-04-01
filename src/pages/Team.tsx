import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen, Users, Brain, Scale, Calculator, HeartPulse, MessageSquare } from 'lucide-react';

const teamMembers = [
  {
    name: "María Gómez Mateus",
    role: "Derecho Laboral y Seguridad Social",
    icon: Scale,
    education: [
      {
        degree: "Abogada Cum Laude",
        institution: "Universidad Santo Tomás"
      },
      {
        degree: "Especialista en Derecho Laboral y Seguridad Social",
        institution: "Universidad Libre"
      }
    ],
    expertise: [
      "Asesoría Laboral Empresarial",
      "Seguridad Social Integral",
      "Procesos Laborales",
      "Negociación Colectiva"
    ],
    description: "Especialista en derecho laboral con experiencia en asesoría empresarial y litigios laborales."
  },
  {
    name: "Jenny Gómez Mateus",
    role: "Contabilidad y Finanzas",
    icon: Calculator,
    education: [
      {
        degree: "Contadora Cum Laude",
        institution: "Universidad Santo Tomás"
      }
    ],
    expertise: [
      "Contabilidad Empresarial",
      "Planeación Fiscal",
      "Auditoría Financiera",
      "Gestión Tributaria"
    ],
    description: "Experta en contabilidad empresarial y planeación fiscal con amplia experiencia en auditoría financiera."
  },
  {
    name: "Angie Álvarez Mateus",
    role: "Seguridad y Salud en el Trabajo",
    icon: HeartPulse,
    education: [
      {
        degree: "Psicóloga",
        institution: "Universidad Autónoma de Bucaramanga"
      },
      {
        degree: "Especialista en Seguridad y Salud en el Trabajo",
        institution: "Universidad Autónoma de Bucaramanga"
      }
    ],
    expertise: [
      "Evaluación de Riesgos Psicosociales",
      "Clima Organizacional",
      "Sistemas de Gestión SST",
      "Bienestar Laboral"
    ],
    description: "Especialista en implementación de sistemas de gestión de SST y evaluación de riesgos psicosociales."
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppContact = () => {
    const message = "Hola, me gustaría recibir más información sobre sus servicios profesionales.";
    window.open(`https://wa.me/573176964215?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => {
          const Icon = member.icon;
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -translate-y-16 translate-x-16" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 border-l-2 border-gray-200 pl-4 italic">
                  {member.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Formación Académica
                  </h4>
                  <ul className="space-y-2">
                    {member.education.map((edu, i) => (
                      <li key={i} className="group/edu">
                        <p className="font-medium text-gray-900 group-hover/edu:text-gray-700 transition-colors">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Áreas de Especialización
                  </h4>
                  <ul className="space-y-1">
                    {member.expertise.map((exp, i) => (
                      <li
                        key={i}
                        className="text-gray-600 hover:text-gray-900 transition-colors cursor-default flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <button
          onClick={handleWhatsAppContact}
          className="bg-gray-900 text-white px-12 py-4 text-lg tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          <MessageSquare className="w-5 h-5" />
          Contactar al Equipo
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Team;