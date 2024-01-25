import React from 'react';
import PropTypes from 'prop-types';

function Element({ heading, number }) {
  return (
    <div className="d-flex justify-content-between">
      <span>{heading}</span>
      <span>{number}</span>
    </div>
  );
}
export default Element;

Element.propTypes = {
  heading: PropTypes.string,
  number: PropTypes.number,
};

Element.defaultProps = {
  heading: '',
  number: 0,
};
