const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function initializeDatabase() {
  try {
    console.log('Creating tables in Supabase...');

    // Create User table
    const userTableResult = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'User',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        phoneNumber TEXT UNIQUE NOT NULL,
        passwordHash TEXT NOT NULL,
        name TEXT NOT NULL,
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updatedAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        role TEXT DEFAULT 'USER',
        profilePic TEXT,
        bio TEXT,
        location TEXT,
        website TEXT
      `
    });

    if (userTableResult.error) {
      console.error('Error creating User table:', userTableResult.error);
    } else {
      console.log('User table created successfully');
    }

    // Create Beat table
    const beatTableResult = await supabase.rpc('create_table_if_not_exists', {
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
        userId UUID NOT NULL,
        licenseType TEXT DEFAULT 'BASIC',
        isExclusive BOOLEAN DEFAULT FALSE
      `
    });

    if (beatTableResult.error) {
      console.error('Error creating Beat table:', beatTableResult.error);
    } else {
      console.log('Beat table created successfully');
    }

    // Create Transaction table
    const transactionTableResult = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'Transaction',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        amount FLOAT NOT NULL,
        status TEXT DEFAULT 'PENDING',
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updatedAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        beatId UUID NOT NULL,
        buyerId UUID NOT NULL,
        sellerId UUID NOT NULL,
        paymentMethod TEXT,
        paymentId TEXT
      `
    });

    if (transactionTableResult.error) {
      console.error('Error creating Transaction table:', transactionTableResult.error);
    } else {
      console.log('Transaction table created successfully');
    }

    // Add foreign key constraints
    await supabase.rpc('execute_sql', {
      sql: `
        ALTER TABLE "Beat" ADD CONSTRAINT fk_beat_user FOREIGN KEY ("userId") REFERENCES "User"(id);
        ALTER TABLE "Transaction" ADD CONSTRAINT fk_transaction_beat FOREIGN KEY ("beatId") REFERENCES "Beat"(id);
        ALTER TABLE "Transaction" ADD CONSTRAINT fk_transaction_buyer FOREIGN KEY ("buyerId") REFERENCES "User"(id);
        ALTER TABLE "Transaction" ADD CONSTRAINT fk_transaction_seller FOREIGN KEY ("sellerId") REFERENCES "User"(id);
      `
    });

    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

module.exports = { initializeDatabase };

// If file is run directly, initialize the database
if (require.main === module) {
  initializeDatabase()
    .then(() => {
      console.log('Database initialization script completed');
      process.exit(0);
    })
    .catch(err => {
      console.error('Database initialization failed:', err);
      process.exit(1);
    });
} 