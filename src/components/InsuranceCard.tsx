// components/InsuranceCard.js
import React, { useState } from 'react';

const InsuranceCard = ({ insuranceData, isSelected, onClick }:any) => {
    console.log(isSelected,'isSelected')
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  let popups = [{
    heading:'Terms and Conditions',
    content:'<p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. </p><p> The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>'
  },  
  {
    heading:'Breakdown',
    content:'<div><ol><li>Health Insurance: 200 QAR</li><li>Travel Insurance: 200 QAR</li></ol></div>'
  }
]

  const openModal = (va:any) => {
    
    setIndex(va)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


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
            <span className="text-xs" onClick={()=>openModal(0)}>{insuranceData.terms}</span>
          </div>
        </div>
        <div className='sm:hidden border-gray-100 mb-2 mt-2 border-b-[3px]'></div>
        <div className="md:w-1/4 sm:w-full">
          <div className="price">
            <p className="text-xl font-bold">{insuranceData.price}</p>
            <span className="text-xs block mt-1" onClick={()=>openModal(1)}>{insuranceData.serviceBreakdown}</span>
          </div>
        </div>
        { (
        <div className={`fixed top-0 left-0 right-0 z-50 ${isModalOpen ? 'block' : 'hidden'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="fixed top-20 left-0 right-0 z-50 mx-auto w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {popups[index].heading}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <div dangerouslySetInnerHTML={{ __html: popups[index].content }} />
                </p>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
               onClick={closeModal}
                data-modal-hide="staticModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      )}

      </div>
    </li>
  );
};

export default InsuranceCard;
