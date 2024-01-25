import React from 'react';
import PropTypes from 'prop-types';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

function BottomRow({
  title, number1, number2, up,
}) {
  return (
    <tr>
      <td className="card3-first-col">
        <p className="">{title}</p>
      </td>
      <td>
        <p className="text-muted">{number1}</p>
      </td>
      <td>
        <p className="">{number2}</p>
      </td>
      <td>
        <p className="">
          {up ? (
            <VscTriangleUp size={20} color="#00ff08" />
          ) : (
            <VscTriangleDown size={20} color="red" />
          )}
        </p>
        {' '}
      </td>
    </tr>
  );
}

export default BottomRow;

BottomRow.propTypes = {
  title: PropTypes.string,
  number1: PropTypes.number,
  number2: PropTypes.number,
  up: PropTypes.bool,
};

BottomRow.defaultProps = {
  title: '',
  number1: 0,
  number2: 0,
  up: Boolean,
};
