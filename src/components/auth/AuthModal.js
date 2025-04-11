import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthModal = ({ isOpen, onClose, mode, onSwitchMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-dark rounded-xl p-8 w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-6">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        {/* Form */}
        {mode === 'login' ? (
          <LoginForm
            onClose={onClose}
            onSwitchToSignup={() => onSwitchMode('signup')}
          />
        ) : (
          <SignupForm
            onClose={onClose}
            onSwitchToLogin={() => onSwitchMode('login')}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal; 