import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, Mail, Phone } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppContact = () => {
    const message = "Hola, me gustaría recibir más información sobre sus servicios.";
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
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-12 shadow-lg"
        >
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-3 text-sm md:text-base">Respuesta inmediata de Lunes a Sábado</p>
                <a 
                  href="https://wa.me/573176964215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors text-sm md:text-base"
                >
                  +57 317 696 4215
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Correo Electrónico</h3>
                <p className="text-gray-600 mb-3 text-sm md:text-base">Escríbenos tus consultas</p>
                <a 
                  href="mailto:gomezmateus17@gmail.com"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors text-sm md:text-base"
                >
                  gomezmateus17@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Horario de Atención</h3>
                <div className="space-y-2 text-gray-600 text-sm md:text-base">
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 md:mt-12 hidden md:block"
          >
            <button
              onClick={handleWhatsAppContact}
              className="w-full bg-gray-900 text-white py-4 md:py-6 text-lg md:text-xl tracking-wider hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
              Contactar por WhatsApp
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating WhatsApp button for mobile */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppContact}
        className="fixed bottom-24 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors md:hidden"
      >
        <MessageSquare size={24} className="animate-pulse" />
      </motion.button>
    </motion.div>
  );
};

export default Contact;