import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
};

export default Home;