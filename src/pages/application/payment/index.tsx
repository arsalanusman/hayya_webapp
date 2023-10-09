// components/ApplicationInformation.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";
import InsuranceCard from "@/components/InsuranceCard";
import { useRouter } from "next/navigation";

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const Payment = () => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const Router = useRouter()

  const handleCardClick = (index: any) => {
    setSelectedCardIndex(index);
    setIsButtonActive(true); // Enable the "Next" button when a card is selected
    // You can also save the selected insurance data in localStorage here
    const selectedInsurance = insuranceData[index];
    localStorage.setItem("selectedInsurance", JSON.stringify(selectedInsurance));
  };

  let storedInsurance:any;
  const insuranceData = [
    {
      name: 'QLM Insurance',
      logoSrc: '/img/qlm.webp',
      terms: 'Terms and Conditions',
      price: '18 QAR',
      serviceBreakdown: 'Service Breakdown',
    },
    {
      name: 'QIC Insurance',
      logoSrc: '/img/QIC.png',
      terms: 'Terms and Conditions',
      price: '19 QAR',
      serviceBreakdown: 'Service Breakdown',
    },
    {
      name: 'Beema Insurance',
      logoSrc: '/img/beema.jpg',
      terms: 'Terms and Conditions',
      price: '20 QAR',
      serviceBreakdown: 'Service Breakdown',
    }
    // Add more insurance data items as needed
  ];

  useEffect(() => {
    setIsLoading(true);

    if (typeof localStorage !== "undefined") {
      // Check if the selectedInsurance item exists in localStorage
      storedInsurance = localStorage.getItem("selectedInsurance");
      if (storedInsurance) {
        // Parse the storedInsurance JSON if it exists
        const selectedInsurance = JSON.parse(storedInsurance);
        console.log("Selected Insurance:", selectedInsurance);
      }
    }
  }, []);

  return (
    <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
      {isLoading && (
        <>
          <div className="px-0 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
            <div className="grid gap-2 items-baseline grid-cols-1">
              <div className="ease-in duration-300">
                <div className="text-center mx-auto mb-6">
                  <Image
                    src="/img/star.svg"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                    className="text-center mx-auto mb-3"
                  />
                  <p className="text-[26px] font-[500] text-white">
                    {tr(x.REQUEST_HAYYA)}
                  </p>
                </div>
                <div className="clear-both bg-white border-solid border-2  border-gray-100 rounded-2xl p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
                  <h3 className=" text-[22px] font-[500] w-full mb-10">
                    Choose health & travel Insurance service
                  </h3>
                  <div className="block clear-both">
                    <ul className="bg-gray-100 p-4">
                      {insuranceData.map((data, index) => (
                        <InsuranceCard
                          key={index}
                          insuranceData={data}
                          onClick={() => handleCardClick(index)}
                          isSelected={index === selectedCardIndex}
                          openSummary={false}
                        />
                      ))}
                    </ul> 
                    
                    <div className="flex justify-end"> {/* Align the button to the right */}
                    
                    {isButtonActive && (
                      <button
                        className=" text-white p-3 pl-8 pr-8 mt-5 bg-[#d5cc65]   rounded-md"
                        onClick={() => Router.push('/application/paynow')}
                      >
                        Next
                      </button>
                    )}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default Payment;
