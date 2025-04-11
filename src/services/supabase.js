import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://bvcemiholrokzndqggwc.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y2VtaWhvbHJva3puZHFnZ3djIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDI2Mzg1MywiZXhwIjoyMDU5ODM5ODUzfQ.jHLUn1K7IkJO7eb4bwHgJizd0XHaLkx6bzkcfwYk1UU';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Users
export const getUsers = async () => {
  const { data, error } = await supabase.from('User').select('*');
  if (error) throw error;
  return data;
};

export const getUserById = async (id) => {
  const { data, error } = await supabase.from('User').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

// Beats
export const getBeats = async () => {
  const { data, error } = await supabase.from('Beat').select('*');
  if (error) throw error;
  return data;
};

export const getBeatById = async (id) => {
  const { data, error } = await supabase.from('Beat').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

// Transactions
export const getTransactions = async () => {
  const { data, error } = await supabase.from('Transaction').select('*');
  if (error) throw error;
  return data;
};

export const createTransaction = async (transactionData) => {
  const { data, error } = await supabase.from('Transaction').insert([transactionData]).select();
  if (error) throw error;
  return data[0];
};

// Table creation utility - only needed once to set up tables
export const initializeDatabase = async () => {
  try {
    // Create User table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'User',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        phoneNumber TEXT UNIQUE NOT NULL,
        passwordHash TEXT NOT NULL,
        name TEXT NOT NULL,
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updatedAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        role TEXT DEFAULT 'USER' CHECK (role IN ('USER', 'PRODUCER', 'ADMIN')),
        profilePic TEXT,
        bio TEXT,
        location TEXT,
        website TEXT
      `
    });

    // Create Beat table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'Beat',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        description TEXT,
        price FLOAT NOT NULL,
        audioUrl TEXT NOT NULL,
        imageUrl TEXT,
        bpm INTEGER,
        key TEXT,
        genre TEXT,
        tags TEXT,
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updatedAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        userId UUID NOT NULL REFERENCES "User"(id),
        licenseType TEXT DEFAULT 'BASIC' CHECK (licenseType IN ('BASIC', 'PREMIUM', 'EXCLUSIVE')),
        isExclusive BOOLEAN DEFAULT FALSE
      `
    });

    // Create Transaction table
    await supabase.rpc('create_table_if_not_exists', {
      table_name: 'Transaction',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        amount FLOAT NOT NULL,
        status TEXT DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED')),
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updatedAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        beatId UUID NOT NULL REFERENCES "Beat"(id),
        buyerId UUID NOT NULL REFERENCES "User"(id),
        sellerId UUID NOT NULL REFERENCES "User"(id),
        paymentMethod TEXT,
        paymentId TEXT
      `
    });

    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}; 