import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/properties/add',
    '/profile',
    '/properties/saved',
    '/messages',
    '/sign-in',
    '/sign-up',
    '/verify',
  ],
};

export async function middleware(request) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  const authRoutes = ['/sign-in', '/sign-up', '/verify'];
  const protectedRoutes = [
    '/properties/add',
    '/profile',
    '/properties/saved',
    '/messages',
  ];

  const redirectTo = token ? '/' : '/sign-in';
  const routesToCheck = token ? authRoutes : protectedRoutes;

  if (routesToCheck.some((route) => url.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}
