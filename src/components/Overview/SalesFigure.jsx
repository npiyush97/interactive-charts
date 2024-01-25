import React from 'react';
import { BsDot } from 'react-icons/bs';
import './SalesFigure.scss';

function SalesFigure() {
  return (
    <div className="salesfigure m-10 rounded-2xl shadow-2xl p-5 bg-white">
      <div
        className="h-[10%] flex justify-between items-center pb-10  bg-white"
        style={{ margin: '-1em auto -1em -1em' }}
      >
        <div className="text-xl" style={{ fontWeight: '900' }}>
          Sales Figures
        </div>
        <div className="">
          <ul className=" flex items-center ">
            <p className=" flex items-center">
              <BsDot className="text-[#A46CE9] text-5xl " />
              Sales
            </p>
            <p className=" flex items-center">
              <BsDot className="text-[#FAE634] text-5xl" />
              User
            </p>
            <p className=" flex items-center">
              <BsDot className="text-[#FC717D] text-5xl" />
              {' '}
              Product
            </p>
            <p className=" flex items-center">
              <BsDot className="text-[#695DFB] text-5xl" />
              Team
            </p>
          </ul>
        </div>
      </div>

      <div className="chart">
        <div>
          <div className="y-axis d-flex flex-column">
            <p>1K</p>
            <p>800</p>
            <p>600</p>
            <p>400</p>
            <p>200</p>
            <p>0</p>
          </div>
          <div className="chart-data" />
        </div>
        <div className="x-axis d-flex">
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
          <p>Jul</p>
          <p>Aug</p>
          <p>Sep</p>
          <p>Oct</p>
          <p>Nov</p>
          <p>Dec</p>
        </div>

        <div className="blue-bubble big-blue d-flex flex-column">
          <h6>$27632</h6>
          <p>August</p>
        </div>
        <div className="red-bubble red-center">
          <h6>$27632</h6>
        </div>
        <div className="yellow-bubble yellow-center" />
        <div className="yellow-bubble yellow-right">
          <h6>$27632</h6>
        </div>
        <div className="red-bubble red-extra-1" />
        <div className="blue-bubble blue-extra-1"> </div>

        <div className="yellow-bubble yellow-extra-1" />

        <div className="purple-bubble purple-extra-1"> </div>
        <div className="purple-bubble purple-extra-2"> </div>
        <div className="purple-bubble purple-extra-3"> </div>
        <div className="purple-bubble purple-extra-4"> </div>

        <div className="blue-bubble blue-extra-2"> </div>
      </div>
    </div>
  );
}

export default SalesFigure;
