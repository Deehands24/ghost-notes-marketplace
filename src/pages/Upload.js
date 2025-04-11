import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBeat } from '../services/beats';
import { isAuthenticated } from '../services/auth';

const Upload = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    audioUrl: '',
    imageUrl: '',
    tags: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if user is authenticated
  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      // You might want to show a message that they need to login
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prevState => ({
      ...prevState,
      tags
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // For now, we'll use placeholder URLs until we implement file upload
      const beatData = {
        ...formData,
        price: parseFloat(formData.price),
        audioUrl: formData.audioUrl || 'https://example.com/audio.mp3',
        imageUrl: formData.imageUrl || 'https://example.com/image.jpg'
      };
      
      await createBeat(beatData);
      navigate('/product'); // Redirect to products page after successful upload
    } catch (err) {
      setError(err.message || 'Failed to upload beat');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-dark min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-gray-800 h-72 w-full mb-10 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
          <h1 className="text-5xl font-semibold text-white mb-4">Upload Beat</h1>
          <p className="text-2xl text-white">Upload the beat you want to sell</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <p className="text-gray-400 text-xl">Profile / Upload new product</p>
      </div>

      {/* Upload Form */}
      <div className="max-w-3xl mx-auto px-4">
        {error && (
          <div className="bg-red-500 text-white p-4 mb-6 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Upload File Section */}
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-white text-xl font-bold mb-1">Upload file</h2>
              <p className="text-gray-400">Drag or choose your file to upload</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 flex flex-col items-center justify-center">
              <div className="mb-6">
                <svg className="w-10 h-10 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="text-gray-400 text-center">PNG, GIF, WEBP, MP4 or MP3. Max size: 100MB</p>
              </div>
              <button 
                type="button"
                className="border border-primary-colour text-primary-colour px-6 py-2 rounded-full font-semibold"
                disabled={loading}
              >
                Upload
              </button>
            </div>
          </div>

          {/* Title Field */}
          <div className="mb-6">
            <label className="block text-white text-xl font-bold mb-4">
              Title<span className="text-primary-colour">*</span>
            </label>
            <div className="bg-background rounded-xl border border-gray-700 px-4 py-4">
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g: Midnight Vibes" 
                className="bg-transparent text-gray-400 w-full outline-none"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Description Field */}
          <div className="mb-6">
            <label className="block text-white text-xl font-bold mb-4">
              Description<span className="text-primary-colour">*</span>
            </label>
            <div className="bg-background rounded-xl border border-gray-700 px-4 py-4">
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="e.g: This is a smooth hip hop beat perfect for..." 
                className="bg-transparent text-gray-400 w-full outline-none min-h-[120px]"
                required
                disabled={loading}
              ></textarea>
            </div>
          </div>

          {/* Price Field */}
          <div className="mb-10">
            <label className="block text-white text-xl font-bold mb-4">
              Fixed Price<span className="text-primary-colour">*</span>
            </label>
            <div className="flex">
              <div className="bg-background rounded-xl border border-gray-700 px-4 py-4 flex-1">
                <input 
                  type="number" 
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0" 
                  className="bg-transparent text-gray-400 w-full outline-none"
                  required
                  min="0.01"
                  step="0.01"
                  disabled={loading}
                />
              </div>
              <div className="bg-background rounded-xl border border-gray-700 px-4 py-4 ml-2 flex items-center">
                <span className="text-gray-400 mr-2">USD</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Tags Field */}
          <div className="mb-10">
            <label className="block text-white text-xl font-bold mb-4">
              Tags<span className="text-primary-colour">*</span>
            </label>
            <div className="bg-background rounded-xl border border-gray-700 px-4 py-4">
              <input 
                type="text" 
                name="tags"
                value={formData.tags.join(', ')}
                onChange={handleTagsChange}
                placeholder="e.g: hiphop, trap, 90bpm (comma separated)" 
                className="bg-transparent text-gray-400 w-full outline-none"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit"
              className="bg-primary-colour text-white py-4 px-12 text-lg font-semibold w-full rounded-xl"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload; 