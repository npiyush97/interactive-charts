import React from 'react';
import './BottomDetail.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { RiBarChart2Fill } from 'react-icons/ri';
import { FiStopCircle } from 'react-icons/fi';
import BottomDetailCard from './BottomDetail/BottomDetailCard';

function BottomDetail() {
  const shoppingViewsIcon = <AiOutlineEye size={22} color="#4C5AA1" />;
  const storeDynamicsIcon = <RiBarChart2Fill size={22} color="#4C5AA1" />;
  const trendGooodsIcon = <FiStopCircle size={22} color="#4C5AA1" />;
  return (
    <div className="bottomdetail d-flex justify-center">
      <BottomDetailCard icon={trendGooodsIcon} heading="Trend Goods" number="204" />
      <BottomDetailCard icon={shoppingViewsIcon} heading="Shopping Views" number="65,540" />
      <BottomDetailCard icon={storeDynamicsIcon} heading="Store Dynamics" number="324" />
    </div>
  );
}

export default BottomDetail;
