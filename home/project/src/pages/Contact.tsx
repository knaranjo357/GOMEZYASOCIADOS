import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
        <h1 className="text-5xl font-bold mb-4">Contacto</h1>
        <div className="w-20 h-[2px] bg-gray-900 mx-auto mb-8" />
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Estamos aquí para ayudarte. Contáctanos para una consulta personalizada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
            <div className="space-y-4 text-gray-600">
              <p>Calle Principal #123</p>
              <p>Ciudad, País</p>
              <p>+1 234 567 890</p>
              <p>contacto@gomezasociados.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
            <div className="space-y-2 text-gray-600">
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Servicio de Interés
            </label>
            <select
              id="service"
              className="w-full border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
            >
              <option value="">Selecciona un servicio</option>
              <option value="laboral">Derecho Laboral</option>
              <option value="contabilidad">Contabilidad</option>
              <option value="sst">Seguridad y Salud en el Trabajo</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 text-lg tracking-wider hover:bg-gray-800 transition-colors"
          >
            Enviar Mensaje
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;