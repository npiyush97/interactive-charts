import React from 'react';
import PropTypes from 'prop-types';

function DetailCard({ Icon, heading, number }) {
  return (
    <div className="d-flex align-items-center my-3">
      <div className="detail-card-icon">{Icon}</div>
      <div className="d-flex flex-column mx-3">
        <p className="detail-card-heading text">{heading}</p>
        <p className="detail-card-number">{number}</p>
      </div>
    </div>
  );
}

export default DetailCard;

DetailCard.defaultProps = {
  Icon: null,
  heading: '',
  number: '',
};

DetailCard.propTypes = {
  Icon: PropTypes.element,
  heading: PropTypes.string,
  number: PropTypes.string,
};
