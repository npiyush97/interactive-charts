import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
// https://codesandbox.io/s/33viz?file=/src/styles.css
import { IoHeartCircleOutline } from 'react-icons/io5';
import { VscTriangleUp } from 'react-icons/vsc';
import Element from './Card1/Element';

function Card1() {
  return (
    <div className="card1 my-3 d-flex flex-column align-items-center">

      <ProgressBar
        className="first-circle"
        radius={50}
        progress={60}
        strokeColor="#F57792"
        strokeWidth={8}
        trackStrokeWidth={4}
        pointerStrokeColor="#cccccc"
        initialAnimationDelay={1000}
        initialAnimation
        trackTransition=".1s ease"
        transition="1s ease"
      >
        <div className="indicator">
          <ProgressBar
            radius={36}
            className="second-circle"
            progress={85}
            strokeWidth={8}
            trackStrokeWidth={4}
            strokeColor="#FDB969"
            pointerStrokeWidth={0}
            pointerStrokeColor="#7bcd5c"
            initialAnimationDelay={1000}
            initialAnimation
            trackTransition=".1s ease"
            transition="1s ease"
          >
            <div className="circle-heart-icon">
              <IoHeartCircleOutline size={24} color="#908dc4" />
            </div>
          </ProgressBar>
        </div>
      </ProgressBar>

      <h6 style={{ fontSize: '15px' }}>Total earning</h6>
      <h6 style={{ fontSize: '20px' }}>
        $12,875
        <small style={{ fontSize: '0.8rem', color: '#00ff08' }}>
          <VscTriangleUp size={16} />
          2%
        </small>
      </h6>
      <p className="text-muted" style={{ fontSize: '10px', marginTop: '-6px !important' }}><small><b> Compared to $21,504 last year</b></small></p>

      <div className="content2 mt-2">
        <Element heading="Presentation" number="650" graph="" />
        <Element heading="Development" number="760" graph=" " />
        <Element heading="Research" number="612" graph="" />
      </div>

    </div>
  );
}

export default Card1;
