import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Carlos Gómez",
    role: "Derecho Laboral",
    description: "Especialista en derecho laboral con más de 20 años de experiencia en asesoría empresarial y litigios laborales."
  },
  {
    name: "Ana Gómez",
    role: "Contabilidad y Finanzas",
    description: "Experta en contabilidad empresarial y planeación fiscal con amplia experiencia en auditoría financiera."
  },
  {
    name: "María Gómez",
    role: "Seguridad y Salud en el Trabajo",
    description: "Especialista en implementación de sistemas de gestión de SST y evaluación de riesgos psicosociales."
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Nuestro Equipo</h1>
        <div className="w-20 h-[2px] bg-gray-900 mx-auto mb-8" />
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Profesionales comprometidos con la excelencia y el servicio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300"
          >
            <div className="h-48 bg-gray-50 mb-6" />
            <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 font-medium mb-4">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <button className="bg-gray-900 text-white px-12 py-4 text-lg tracking-wider hover:bg-gray-800 transition-colors">
          Conoce Más
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Team;