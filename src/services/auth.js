import { supabase } from './supabase';

// Register user
export const register = async (userData) => {
  try {
    const { phoneNumber, password, name } = userData;
    
    // Check if user exists
    const { data: existingUser } = await supabase
      .from('User')
      .select('*')
      .eq('phoneNumber', phoneNumber)
      .single();
    
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    // Create user in Supabase auth
    const { data: authUser, error: authError } = await supabase.auth.signUp({
      email: `${phoneNumber}@ghost-notes.app`, // Using phone as unique email
      password: password,
      options: {
        data: {
          phoneNumber,
          name
        }
      }
    });
    
    if (authError) throw authError;
    
    // Create user in our custom User table
    const { data: user, error: userError } = await supabase
      .from('User')
      .insert([{
        phoneNumber,
        passwordHash: 'HANDLED_BY_SUPABASE_AUTH', // We're using Supabase Auth
        name,
        role: userData.role || 'USER'
      }])
      .select()
      .single();
    
    if (userError) throw userError;
    
    return { user, session: authUser.session };
  } catch (error) {
    throw error;
  }
};

// Login user
export const login = async (phoneNumber, password) => {
  try {
    // Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: `${phoneNumber}@ghost-notes.app`,
      password
    });
    
    if (authError) throw authError;
    
    // Get user profile from our custom table
    const { data: user, error: userError } = await supabase
      .from('User')
      .select('*')
      .eq('phoneNumber', phoneNumber)
      .single();
    
    if (userError) throw userError;
    
    return { user, session: authData.session };
  } catch (error) {
    throw error;
  }
};

// Logout user
export const logout = async () => {
  return await supabase.auth.signOut();
};

// Get current user
export const getCurrentUser = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) return null;
  
  const { data: { user: authUser } } = await supabase.auth.getUser();
  
  if (!authUser) return null;
  
  // Get user from our custom User table
  const { data: user } = await supabase
    .from('User')
    .select('*')
    .eq('phoneNumber', authUser.user_metadata.phoneNumber)
    .single();
  
  return user;
};

// Check if user is authenticated
export const isAuthenticated = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session !== null;
};

// Get user profile
export const getUserProfile = async () => {
  return await getCurrentUser();
}; 