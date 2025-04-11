import api from './api';

// Get all beats
export const getAllBeats = async () => {
  try {
    const response = await api.get('/beats');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

// Get beat by ID
export const getBeatById = async (id) => {
  try {
    const response = await api.get(`/beats/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

// Create a new beat
export const createBeat = async (beatData) => {
  try {
    const response = await api.post('/beats', beatData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

// Update a beat
export const updateBeat = async (id, beatData) => {
  try {
    const response = await api.put(`/beats/${id}`, beatData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

// Delete a beat
export const deleteBeat = async (id) => {
  try {
    const response = await api.delete(`/beats/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
};

// Purchase a beat
export const purchaseBeat = async (id) => {
  try {
    const response = await api.post(`/beats/${id}/purchase`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error occurred' };
  }
}; 