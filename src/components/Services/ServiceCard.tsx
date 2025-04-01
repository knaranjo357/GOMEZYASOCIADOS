import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay * 0.2 }}
      className="service-card bg-white p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300"
    >
      <motion.div 
        className="text-gray-900 mb-6"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      <motion.div
        className="mt-6 h-[1px] bg-gray-200"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: delay * 0.2 + 0.4 }}
      />
    </motion.div>
  );
};

export default ServiceCard;