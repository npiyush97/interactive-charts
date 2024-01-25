import React from 'react';
import Center from './Card2/Center';

function Card2() {
  return (
    <div className="card2 py-1">
      <div className="mx-4">
        <Center heading="Total earning" earning="12,875" percentage="10" />
        <hr className="" />
        <Center heading="Sales" earning="43,123" percentage="12" />
      </div>
    </div>
  );
}

export default Card2;
