import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 h-full">
        <Sidebar />
      </div>
      <div className="col-span-5 h-full border flex justify-between flex-col">
        <Header />
        <div className="p-4 h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
