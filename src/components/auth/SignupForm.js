import React, { useState } from 'react';
import { register } from '../../services/auth';

const SignupForm = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      
      // Call register API
      await register({
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        password: formData.password
      });
      
      // Close modal on success
      onClose();
      
      // Reload page to reflect logged in state
      window.location.reload();
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
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
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          required
          className="h-4 w-4 text-primary-colour focus:ring-primary-colour border-gray-600 rounded"
          disabled={loading}
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
          I agree to the <button type="button" className="text-primary-colour hover:text-primary-colour">Terms of Service</button> and{' '}
          <button type="button" className="text-primary-colour hover:text-primary-colour">Privacy Policy</button>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-colour text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>

      <div className="text-center text-gray-400">
        <span>Already have an account? </span>
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-primary-colour hover:text-primary-colour font-semibold"
          disabled={loading}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignupForm; 