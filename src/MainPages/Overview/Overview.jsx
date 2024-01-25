import React from 'react';
import OverviewBottom from '../../components/Overview/OverviewBottom';
import OverviewSidebar from '../../components/Overview/OverviewSidebar';
import OverviewMain from '../../components/Overview/OverviewMain';
import './Overview.scss';

function Overview() {
  return (
    <div>
      <div className="d-flex ms-4">
        <OverviewSidebar />
        <OverviewMain />
      </div>
      <OverviewBottom />
      <br />
    </div>
  );
}

export default Overview;
