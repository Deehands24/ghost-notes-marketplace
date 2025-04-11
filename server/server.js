const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const { initializeDatabase } = require('./initDatabase');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const beatsRoutes = require('./routes/beats');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());

// Add Supabase to request object
app.use((req, res, next) => {
  req.supabase = supabase;
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/beats', beatsRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running with Supabase...');
});

// Start server
const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  // Initialize database tables if needed
  try {
    await initializeDatabase();
    console.log('Database initialization completed');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
}); 