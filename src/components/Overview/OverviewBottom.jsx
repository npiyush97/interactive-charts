import React from 'react';
import './OverviewBottom.scss';
import BarChart from './OverviewBottom/BarChart';
import SalesFigure from './SalesFigure';

function OverviewBottom() {
  const SalesFigureToggle = () => {
    const salesfigure = document.getElementById('salesfigure').style;
    if (salesfigure.display === 'block') salesfigure.display = 'none';
    else salesfigure.display = 'block';
  };

  return (
    <div
      className="bottom-chart d-flex my-2 mb-4 "
      onClick={SalesFigureToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          SalesFigureToggle();
        }
      }}
    >
      <div className="mx-3">
        <p className="heading ms-1 my-2"> Sales Figures</p>
        <p className="number">$10,430</p>
      </div>

      <div className="bottom-bar-chart">
        <BarChart />
      </div>

      <div id="salesfigure">
        <SalesFigure />
      </div>
    </div>
  );
}

export default OverviewBottom;
