import React, { useState } from 'react';

const SignupForm = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-colour"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-400 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-colour"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-colour"
          placeholder="Create a password"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-colour"
          placeholder="Confirm your password"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          required
          className="h-4 w-4 text-primary-colour focus:ring-primary-colour border-gray-600 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
          I agree to the <button type="button" className="text-primary-colour hover:text-primary-colour">Terms of Service</button> and{' '}
          <button type="button" className="text-primary-colour hover:text-primary-colour">Privacy Policy</button>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-colour text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90"
      >
        Create Account
      </button>

      <div className="text-center text-gray-400">
        <span>Already have an account? </span>
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-primary-colour hover:text-primary-colour font-semibold"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignupForm; 