import React from 'react';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutBackUp: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <SideBar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default LayoutBackUp;
