import React from 'react';

import { TbBuildingBank, TbBuildingCommunity, TbBuildingPavilion } from 'react-icons/tb';
import { BiBuildings } from 'react-icons/bi';
import { FaRegBuilding } from 'react-icons/fa';
import { RiBuilding2Line } from 'react-icons/ri';
import PopOver from './OverviewMain/PopOver';
import Map from '../../Resources/Map';

function OverviewMain() {
  const chicagoIcon = (<TbBuildingBank />);
  const berlinIcon = (<TbBuildingCommunity />);
  const shangai = (<TbBuildingPavilion />);
  const gizaIcon = (<BiBuildings />);
  const queenslandIcon = (<FaRegBuilding />);
  const manausIcon = (<RiBuilding2Line />);

  return (
    <div className="right shadow-react-icons">
      <Map />
      <PopOver cls="top-[23%] " iconBgColorCls="bg-sky-400" icon={chicagoIcon} heading="Chicago" number="98,320,300" />
      <PopOver cls="top-[10%] left-[22em]" iconBgColorCls="bg-[#7BDDA2]" icon={berlinIcon} heading="Berlin" number="76,541,106" />
      <PopOver cls="top-[30%] left-[40em]" iconBgColorCls="bg-[#E8A5FF]" icon={shangai} heading="Shanghai" number="239,570,110" />
      <PopOver cls="top-[37%] left-[25em]" iconBgColorCls="bg-[#FF7E7E]" icon={gizaIcon} heading="Giza" number="10,547,980" />
      <PopOver cls="top-[67%] left-[43em]" iconBgColorCls="bg-sky-600" icon={queenslandIcon} heading="Queensland" number="6,097,321" />
      <PopOver cls="top-[60%] left-[5em]" iconBgColorCls="bg-[#F8A243]" icon={manausIcon} heading="Manaus" number="12,320,300" />
    </div>
  );
}

export default OverviewMain;
