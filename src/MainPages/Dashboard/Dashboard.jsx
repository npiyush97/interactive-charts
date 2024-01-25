import React from 'react';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="second d-flex h-full">
      <DashboardSidebar />
      <DashboardMain />
    </div>
  );
}

export default Dashboard;
