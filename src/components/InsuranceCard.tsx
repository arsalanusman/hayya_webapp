// components/InsuranceCard.js
import React from 'react';

const InsuranceCard = ({ insuranceData, isSelected, onClick }:any) => {
    console.log(isSelected,'isSelected')
  return (
    <li
      onClick={onClick}
      className={`bg-white p-4 rounded-lg flex flex-col space-y-4 border-b-[3px] cursor-pointer ${
        isSelected ? 'border-blue-500' : ''
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-1/6">
          <div className="logo p-2">
            <img src={insuranceData.logoSrc} className="w-20" alt={insuranceData.name} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="heading">
            <p className="text-xl font-bold mb-1">{insuranceData.name}</p>
            <span className="text-xs">{insuranceData.terms}</span>
          </div>
        </div>
        <div className="w-1/4">
          <div className="price">
            <p className="text-xl font-bold">{insuranceData.price}</p>
            <span className="text-xs block mt-1">{insuranceData.serviceBreakdown}</span>
          </div>
        </div>
        <div
          className={`arrow w-5 h-5 border-t-2 border-r-2 ${
            isSelected === false ? 'transform rotate-0' : 'transform rotate-90'
          }`}
        ></div>
      </div>

      {/* Display summary when isSelected is true */}
      {isSelected !== false && (
        <div className="flex flex-col space-y-2 border-t-[3px] pt-10">
          <p className="font-bold text-[22px]">Summary</p>
          <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <p className="font-bold">Visa application fees</p>
              <p>200.00 QAR</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Health & Travel Insurance fees</p>
              <p>120.00 QAR</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Security deposit</p>
              <p>5000.00 QAR</p>
            </div>
            <hr className="border-t border-gray-400 my-2" />
            <div className="flex justify-between">
              <p className="font-bold">Total Amount:</p>
              <p>5320.00 QAR</p>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md">Pay Now</button>
          </div>
        </div>
        </div>
      )}
    </li>
  );
};

export default InsuranceCard;
