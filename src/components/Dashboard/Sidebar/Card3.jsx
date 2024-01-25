import React from 'react';
import BottomRow from './Card3/BottomRow';
import './Card3.scss';

function Card3() {
  return (
    <div className="card3 my-3 h-full mb-5">
      <table className="mx-4 h-full ">
        <BottomRow title="Travel" number1="23" number2="2342" up />
        <BottomRow title="Presentation" number1="23" number2="23532" up={false} />
        <BottomRow title="Business" number1="54" number2="234" up />
      </table>
    </div>
  );
}

export default Card3;
