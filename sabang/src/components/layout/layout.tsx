import React from 'react';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <SideBar />
      <div className="main-content">
        <main className="main-children">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
