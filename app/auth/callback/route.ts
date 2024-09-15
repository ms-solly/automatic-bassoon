// app/auth/callback/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get('access_token');
  const refreshToken = searchParams.get('refresh_token');
  const error = searchParams.get('error');
  const next = '/';

  // Create redirect link without the token parameters
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('access_token');
  redirectTo.searchParams.delete('refresh_token');
  redirectTo.searchParams.delete('error');

  if (error) {
    console.error('OAuth error:', error);
    // Redirect to an error page or handle the error appropriately
    redirectTo.pathname = '/error';
    return NextResponse.redirect(redirectTo);
  }

  if (accessToken) {
    // Create a Supabase client instance
    const supabase = createClient();

    // Optionally verify the access token or store it
    // This is a placeholder; actual token handling depends on your flow
    // You might need to save the token to a session or handle it accordingly

    // Redirect to the desired page after successful authentication
    return NextResponse.redirect(redirectTo);
  }

  // Return the user to an error page if no access token is found
  redirectTo.pathname = '/error';
  return NextResponse.redirect(redirectTo);
}
