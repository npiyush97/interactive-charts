import React from 'react';
import PropTypes from 'prop-types';

function BottomDetailCard({ icon, heading, number }) {
  return (
    <div className="d-flex flex-column align-items-center  mx-5">
      <div className="bottom-icon">{icon}</div>
      <span>{heading}</span>
      <h1>{number}</h1>
    </div>
  );
}

export default BottomDetailCard;

BottomDetailCard.propTypes = {
  icon: null,
  heading: '',
  number: 0,
};

BottomDetailCard.defaultProps = {
  icon: PropTypes.element,
  heading: PropTypes.number,
  number: PropTypes.number,
};
