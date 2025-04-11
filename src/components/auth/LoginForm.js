import React, { useState } from 'react';
import { login } from '../../services/auth';

const LoginForm = ({ onClose, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');
      
      // Call login API
      await login(formData.phoneNumber, formData.password);
      
      // Close modal on success
      onClose();
      
      // Reload page to reflect logged in state
      window.location.reload();
    } catch (err) {
      setError(err.message || 'Invalid credentials');
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
          placeholder="Enter your password"
          disabled={loading}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-primary-colour focus:ring-primary-colour border-gray-600 rounded"
            disabled={loading}
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
            Remember me
          </label>
        </div>
        <button 
          type="button" 
          className="text-sm text-primary-colour hover:text-primary-colour"
          disabled={loading}
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-colour text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="text-center text-gray-400">
        <span>Don't have an account? </span>
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-primary-colour hover:text-primary-colour font-semibold"
          disabled={loading}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default LoginForm; 