'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from '../contexts/SnackbarContext';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            {children}
          </SnackbarProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
