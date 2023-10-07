// components/InsuranceCard.js
import React from 'react';

const InsuranceCard = ({ insuranceData, isSelected, onClick }:any) => {
    console.log(isSelected,'isSelected')
  return (
    <li
      onClick={onClick}
      className={`bg-white p-4 rounded-lg flex flex-col space-y-4 border-[3px] mb-2 cursor-pointer ${
        isSelected ? 'border-[#d5cc65]' : ''
      }`}
    >
      <div className="md:flex  items-center space-x-4">
        <div className="md:w-1/6 sm:w-full ">
          <div className="logo p-2 sm:text-center">
            <img src={insuranceData.logoSrc} className="md:w-20 mx-auto" alt={insuranceData.name} />
          </div>
        </div>
        <div className='sm:hidden border-gray-100 mb-2 mt-2 border-b-[3px]'></div>
        <div className="md:w-1/2 sm:w-full">
          <div className="heading">
            <p className="text-xl font-bold mb-1">{insuranceData.name}</p>
            <span className="text-xs">{insuranceData.terms}</span>
          </div>
        </div>
        <div className='sm:hidden border-gray-100 mb-2 mt-2 border-b-[3px]'></div>
        <div className="md:w-1/4 sm:w-full">
          <div className="price">
            <p className="text-xl font-bold">{insuranceData.price}</p>
            <span className="text-xs block mt-1">{insuranceData.serviceBreakdown}</span>
          </div>
        </div>
        <div
          className={`hidden sm:block arrow w-5 h-5 border-t-2 border-r-2 rotate-45`}
        ></div>
      </div>

      {/* Display summary when isSelected is true */}
      {/* {isSelected !== false && (
        
      )} */}
    </li>
  );
};

export default InsuranceCard;
