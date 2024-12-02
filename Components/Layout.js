// components/Layout.js
import React from 'react';

const Layout = ({ children }) => (
  <div className="max-w-4xl mx-auto p-4">
    <header className="text-center mb-6">
      <h1 className="text-4xl font-bold">My AI Blog</h1>
      <p className="text-gray-600">Sharing my journey in building an AI chatbot for my church</p>
    </header>
    <main>{children}</main>
    <footer className="text-center text-sm text-gray-500 mt-6">
      © {new Date().getFullYear()} My AI Blog
    </footer>
  </div>
);

export default Layout;
