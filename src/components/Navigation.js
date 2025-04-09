import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthModal from './auth/AuthModal';

const Navigation = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav className="bg-neutral-dark text-white py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">GHOST NOTES</div>
            
            <div className="hidden md:flex space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-primary-colour font-semibold" : "text-white hover:text-primary-colour font-semibold"
                }
              >
                Beat Store
              </NavLink>
              <NavLink 
                to="/upload" 
                className={({ isActive }) => 
                  isActive ? "text-primary-colour font-semibold" : "text-white hover:text-primary-colour font-semibold"
                }
              >
                Upload
              </NavLink>
              <NavLink 
                to="/product" 
                className={({ isActive }) => 
                  isActive ? "text-primary-colour font-semibold" : "text-white hover:text-primary-colour font-semibold"
                }
              >
                Products
              </NavLink>
              <span className="text-white hover:text-primary-colour font-semibold">Blog</span>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => handleOpenAuth('login')}
                className="bg-primary-colour text-white py-2 px-6 rounded-none font-semibold"
              >
                Sign In
              </button>
              <button 
                onClick={() => handleOpenAuth('signup')}
                className="border border-primary-colour text-primary-colour py-2 px-6 rounded-none font-semibold"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={setAuthMode}
      />
    </>
  );
};

export default Navigation; 