import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const backgroundLines = Array.from({ length: 48 });
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handleWhatsAppContact = () => {
    const message = "Hola, me gustaría recibir más información sobre sus servicios.";
    window.open(`https://wa.me/573176964215?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {backgroundLines.map((_, i) => (
          <motion.div
            key={i}
            className="col-span-1 h-screen bg-gray-900"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.05, ease: "easeInOut" }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="space-y-12"
        >
          {/* Main heading */}
          <motion.div
            variants={textVariants}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              GÓMEZ
              <span className="block text-3xl md:text-4xl font-normal mt-4 tracking-[0.3em] text-gray-600">
                & ASOCIADOS
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={textVariants}
            className="max-w-3xl mx-auto space-y-8"
          >
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Soluciones legales integrales para empresas y profesionales
            </p>
            
            <div className="h-[1px] w-32 bg-gray-200 mx-auto" />
            
            <p className="text-lg text-gray-500">
              Derecho Laboral · Contabilidad · Seguridad y Salud en el Trabajo
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleWhatsAppContact}
              className="bg-gray-900 text-white px-12 py-5 text-lg tracking-wider hover:bg-gray-800 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">CONSULTA GRATUITA</span>
              <motion.div
                className="absolute inset-0 bg-gray-800"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate('/servicios')}
              className="px-12 py-5 text-lg tracking-wider text-gray-900 border-2 border-gray-900 hover:bg-gray-50 transition-colors relative overflow-hidden group"
            >
              NUESTROS SERVICIOS
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gray-300"
          />
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent opacity-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-100 to-transparent opacity-50 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;