import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host');

  // Extract tenant from the subdomain
  const tenant = hostname.split('.')[0]; // Assuming subdomains like tenant1.localhost

  // You could then set tenant in the headers or use it directly
  url.pathname = `/${tenant}${url.pathname}`;

  return NextResponse.rewrite(url);
}
