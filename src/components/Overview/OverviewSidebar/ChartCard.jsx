import React from 'react';
import PropTypes from 'prop-types';

function ChartCard({ chart, heading, number }) {
  return (
    <div className="d-flex me-4 items-center">
      {chart}
      <div className="chart-card-text d-flex flex-column mx-3">
        <h5 className="text-sm my-0">{number}</h5>
        <p className="chart-card-footer">{heading}</p>
      </div>
    </div>
  );
}

export default ChartCard;

ChartCard.defaultProps = {
  chart: null,
  heading: '',
  number: 0,
};

ChartCard.propTypes = {
  chart: PropTypes.element,
  heading: PropTypes.string,
  number: PropTypes.number,
};
