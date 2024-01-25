import React from 'react';
import PropTypes from 'prop-types';
import { VscTriangleUp } from 'react-icons/vsc';

function Center({ heading, earning, percentage }) {
  return (
    <div className="mt-3 flex flex-col justify-center">
      <p style={{ fontSize: '15px', color: '#C8BCFF' }}>{heading}</p>
      <div className="flex flex-row">
        <h2 className="d-inline text-muted" style={{ color: '#ffffff' }}>
          {`$${earning}`}
        </h2>
        <p className="flex items-center" style={{ fontSize: '0.8rem', color: '#00ff08' }}>
          <VscTriangleUp size={16} />
          {percentage}
          %
        </p>
      </div>
      <p className="text-muted mb-3" style={{ fontSize: '10px', color: '#C8BCFF' }}>Compared to $21,490 last year</p>
    </div>
  );
}

export default Center;

Center.propTypes = {
  heading: PropTypes.string,
  earning: PropTypes.number,
  percentage: PropTypes.number,
};

Center.defaultProps = {
  heading: '',
  earning: 0,
  percentage: 0,
};
