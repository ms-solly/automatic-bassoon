// lib/auth.ts
import { createClient } from '@supabase/supabase-js';

// Function to start Google sign-in and handle redirection
export async function signInWithGoogle() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `https://automatic-bassoon-rho.vercel.app`, 
    },
  });

  if (error) {
    console.error('Error during Google sign-in:', error.message);
    // Handle error appropriately
    return;
  }

  if (data?.url) {
    window.location.href = data.url; // Redirect the user on the client side
  }
}
