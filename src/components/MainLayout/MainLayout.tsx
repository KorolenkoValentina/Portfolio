import React, { ReactNode }  from 'react';
import './mainLayout.scss'
import Sidebar from '../SideBar/Sidebar';


interface MainLayoutProps {
    children: ReactNode;
  }
  const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;