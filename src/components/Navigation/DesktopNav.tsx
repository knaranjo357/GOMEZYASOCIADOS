import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const DesktopNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: '/', label: 'INICIO' },
    { path: '/servicios', label: 'SERVICIOS' },
    { path: '/equipo', label: 'EQUIPO' },
    { path: '/contacto', label: 'CONTACTO' }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 hidden md:block z-50"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-center h-20">
              <motion.button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl font-bold tracking-tight">GÓMEZ</span>
                <span className="text-sm tracking-[0.2em] text-gray-600">& ASOCIADOS</span>
              </motion.button>
              
              <div className="flex gap-12">
                {navItems.map((item) => (
                  <NavItem 
                    key={item.path}
                    path={item.path}
                    label={item.label}
                    isActive={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const NavItem = ({ path, label, isActive, onClick }: { 
  path: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.button 
    onClick={onClick}
    className="relative group"
    whileHover={{ x: 5 }}
  >
    <span className={`text-sm tracking-wider ${isActive ? 'text-gray-900' : 'text-gray-600'} group-hover:text-gray-900 transition-colors`}>
      {label}
    </span>
    {isActive && (
      <motion.div 
        layoutId="activeNav"
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900"
      />
    )}
  </motion.button>
);

export default DesktopNav;