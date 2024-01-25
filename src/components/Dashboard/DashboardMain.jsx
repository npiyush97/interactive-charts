import React from 'react';
import './DashboardMain.scss';
import TimelineHandler from './DashboardMainOther/TimelineHandler';
import BottomDetail from './DashboardMainOther/BottomDetail';

function DashboardMain() {
  return (
    <div className="main">
      <TimelineHandler />
      <div className="bg-white-circle-border">
        <div className="bg-white-circle" />

        <div className="outer-purple-circle center-purple-big">
          <div className="purple-circle" />
          <div className="center-purple-text  d-flex flex-column align-items-center">
            <p className="" style={{ color: '#cccccc' }}>
              Investments
            </p>
            <h6>$76,644</h6>
            <p className="no-word-wrap" style={{ fontSize: '0.6rem' }}>
              3 Months
            </p>
          </div>
        </div>

        <div className="outer-pink-circle left-down-pink">
          <div className="pink-circle" />
          <div
            className="inner-babypink-pink-circle"
            style={{ margin: '4% 6%' }}
          />
          <div className="left-down-pink-text  d-flex flex-column align-items-center">
            <p style={{ fontSize: '0.75rem' }}>Design</p>
            <p style={{ fontSize: '0.9rem' }}>$32,982</p>
            <p style={{ fontSize: '0.35rem' }} className="no-word-wrap">
              2 month
            </p>
          </div>
        </div>

        <div className="outer-pink-circle left-up-pink">
          <div className="pink-circle">
            <div
              className="inner-babypink-pink-circle"
              style={{ margin: '4% 6%' }}
            />
            <div className="left-up-pink-text  d-flex flex-column align-items-center">
              <p style={{ fontSize: '0.57rem' }}>Development</p>
              <p style={{ fontSize: '0.7rem' }}>31,657</p>
            </div>
          </div>
        </div>

        <div className="outer-pink-circle center-up-pink">
          <div className="pink-circle">
            <div
              className="inner-babypink-pink-circle"
              style={{ margin: '4% 6%' }}
            />
          </div>

          <div className="center-up-pink-text  d-flex flex-column align-items-center">
            <p style={{ fontSize: '0.58rem' }}>Finance</p>
            <p style={{ fontSize: '0.7rem' }}>$23,657</p>
          </div>
        </div>

        <div className="outer-pink-circle right-pink">
          <div className="pink-circle">
            <div
              className="inner-babypink-pink-circle"
              style={{ margin: '4% 6%' }}
            />
          </div>
          <div className="right-pink-text  d-flex flex-column align-items-center">
            <p style={{ fontSize: '0.5rem' }}>Business</p>
            <p style={{ fontSize: '0.6rem' }}>$21,987</p>
          </div>
        </div>

        <div className="outer-pink-circle bottom-right-pink">
          <div className="pink-circle">
            <div
              className="inner-babypink-pink-circle"
              style={{ margin: '4% 6%' }}
            />
          </div>
        </div>

        <div className="outer-purple-circle outer-right-purple">
          <div className="purple-circle" />
        </div>

        <div className="outer-purple-circle outer-bottom-right-purple blue-left-corner-dropshadow">
          <div className="purple-circle" />
        </div>

        <div className="outer-purple-circle right-up-purple  blue-left-corner-dropshadow">
          <div className="purple-circle" />
        </div>

        <div className="outer-purple-circle right-down-corner-purple">
          <div className="purple-circle" />
        </div>

        <div className="outer-purple-circle left-down-corner-purple blue-left-corner-dropshadow">
          <div className="purple-circle" />
        </div>

        <div className="outer-purple-circle left-up-corner-purple">
          <div className="purple-circle" />
        </div>

        <div className="outer-purple-circle left-center-corner-purple">
          <div className="purple-circle" />
        </div>

        <div className="outer-orange-circle left-center-orange">
          <div className="orange-circle">
            <div
              className="inner-light-orange-circle"
              style={{ margin: '4% 6%' }}
            />
          </div>
        </div>

        <div className="outer-skyblue-circle left-skyblue-1">
          <div className="skyblue-circle" />
          <div className="inner-skyblue-circle" style={{ margin: '4% 6%' }} />
        </div>

        <div className="outer-skyblue-circle left-skyblue-2">
          <div className="skyblue-circle" />
          <div className="inner-skyblue-circle" style={{ margin: '4% 6%' }} />
        </div>

        <div className="outer-purple-circle right-center-2  blue-left-corner-dropshadow">
          <div className="purple-circle" />
        </div>
      </div>
      <BottomDetail />
    </div>
  );
}

export default DashboardMain;
