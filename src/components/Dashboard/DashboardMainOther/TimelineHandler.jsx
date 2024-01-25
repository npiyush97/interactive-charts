import React from 'react';
import './Timeline.scss';

function TimelineHandler() {
  return (
    <div className="timeline">
      <p className="heading">T I M E L I N E</p>
      <div className="timeline-bar d-flex my-1 px-4 ">
        <p className="py-1">1W</p>
        <p className="py-1">1M</p>
        <p className="active py-1 px-3 ">3M</p>
        <p className="py-1">1Y</p>
        <p className="py-1">ALL</p>
      </div>
    </div>
  );
}

export default TimelineHandler;
