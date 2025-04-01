import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Scale, Users, MessageSquare } from 'lucide-react';

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'INICIO', icon: Home },
    { path: '/servicios', label: 'SERVICIOS', icon: Scale },
    { path: '/equipo', label: 'EQUIPO', icon: Users },
    { path: '/contacto', label: 'CONTACTO', icon: MessageSquare }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 md:hidden z-40"
      >
        <div className="flex justify-around items-center py-4 px-2">
          {navItems.map((item) => (
            <NavItem 
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
              isActive={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </motion.nav>

      <FloatingWhatsAppButton />
    </>
  );
};

const NavItem = ({ path, label, icon: Icon, isActive, onClick }: {
  path: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.button 
    onClick={onClick}
    className="flex flex-col items-center gap-1 relative group"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon 
      size={20} 
      className={`${isActive ? 'text-gray-900' : 'text-gray-600'} group-hover:text-gray-900 transition-colors`}
    />
    <span className={`text-[10px] tracking-[0.2em] ${isActive ? 'text-gray-900' : 'text-gray-600'} group-hover:text-gray-900 transition-colors`}>
      {label}
    </span>
    {isActive && (
      <motion.div 
        layoutId="activeMobileNav"
        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gray-900"
      />
    )}
  </motion.button>
);

const FloatingWhatsAppButton = () => {
  const handleWhatsAppContact = () => {
    const message = "Hola, me gustaría recibir más información sobre sus servicios.";
    window.open(`https://wa.me/573176964215?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppContact}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors md:hidden"
    >
      <MessageSquare size={24} className="animate-pulse" />
    </motion.button>
  );
};

export default MobileNav;