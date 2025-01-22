'use client';

import React from 'react';
import ReactQueryProvider from '@/components/providers/react-query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from 'react-hot-toast';
import SideBarProvider from './SideBarProvider';

export default function ClientProviders({
  children,
  isSidebar = false,
  isNavbar = false,
}: {
  children: React.ReactNode;
  isSidebar?: boolean;
  isNavbar?: boolean;
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
        {}
        <SideBarProvider isSidebar={isSidebar} isNavbar={isNavbar}>
          {children}
        </SideBarProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
