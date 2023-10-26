import React from 'react';
import Headers from '../header/header';
import SideBar from '../sidebar/sidebar';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const WebLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Headers />
      <div className="content">
        <SideBar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default WebLayout;