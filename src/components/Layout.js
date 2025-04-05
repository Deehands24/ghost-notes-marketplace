import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-background text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Ghost Notes</div>
            <div className="text-sm">
              © {new Date().getFullYear()} Ghost Notes - Mid West Hip Hop Beat Market
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;