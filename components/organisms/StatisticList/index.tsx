import StatisticListItem from 'components/molecules/StatisticListItem'
import React from 'react'
import { FiFlag } from 'react-icons/fi'

const StatisticList = () => {
  return (
    <div className="w-full px-8 py-6 bg-light rounded flex flex-col gap-5 lg:flex-row lg:justify-around lg:items-center">
      <StatisticListItem icon={<FiFlag />} label="COUNTRIES" value="8" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] lg:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="CLIENTS" value="193" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] lg:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="Earning" value="$100k" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] lg:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="Earning" value="$100k" />
    </div>
  );
}

export default StatisticList
