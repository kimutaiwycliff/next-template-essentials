'use client';

import React from 'react';
import ReactQueryProvider from '@/components/providers/react-query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from 'react-hot-toast';
import SideBarProvider from './SideBarProvider';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster position="top-right" reverseOrder={false} />
        <SideBarProvider>{children}</SideBarProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
