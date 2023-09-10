import React from 'react';
import MainLayout from '@/components/Layout';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}

export default DashboardLayout;
