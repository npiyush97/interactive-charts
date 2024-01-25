import React from 'react';
import './DashboardSidebar.scss';
import Card1 from './Sidebar/Card1';
import Card2 from './Sidebar/Card2';
import Card3 from './Sidebar/Card3';

function DashboardSidebar() {
  return (
    <div className="sidebar h-full">
      <div className="ms-4 h-full">
        <h3 className="my-3">Design faster</h3>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default DashboardSidebar;
