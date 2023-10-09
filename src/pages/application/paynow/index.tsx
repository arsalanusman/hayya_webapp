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

const PayNow = () => {
  const Router = useRouter()
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [insuranceData, setInsuranceData] = useState([]);
  let storedInsurance:any;
  
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      storedInsurance = localStorage.getItem("selectedInsurance");
      if (storedInsurance) {
        let visaFee = {
          name: 'Visa Fee',
          logoSrc: '/img/fee.jpg',
          terms: 'Terms and Conditions',
          price: '20 QAR',
          serviceBreakdown: 'Service Breakdown',
        }
        setInsuranceData(():any => [ JSON.parse(storedInsurance), visaFee]);
        setIsLoading(true);
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
                <div className="bg-white border-solid border-2  border-gray-100 rounded-2xl p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
                  <h3 className=" text-[22px] font-[500] w-full mb-10">
                    Summary
                  </h3>
                  <div className="block">
                    <ul className="bg-gray-100 p-4">
                      {insuranceData.length>0 && insuranceData.map((data:any, index:any) => (
                        <InsuranceCard
                          key={index}
                          insuranceData={data}
                          isSelected={index === selectedCardIndex}
                        />
                      ))}
                    </ul>
                    <div className="flex flex-col space-y-2 border-t-[3px] pt-10">
                    <div className="p-4 rounded-lg">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <p>Security deposit</p>
                          <p className="font-bold">50.00 QAR</p>
                        </div>
                       
                      </div>
                       
                       </div>
                      <div className="bg-gray-100 p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                          <p className="font-bold">Total Amount:</p>
                          <p className="font-bold">100.00 QAR</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="space-y-2 border-t-[3px] pt-10 flex justify-between">
                      <button className="text-white p-3 pl-8 pr-8 bg-[#d5cc65] rounded-md" onClick={() => Router.push('/application/payment')}>
                        Back
                      </button>
                      <button className="text-white p-3 pl-8 pr-8 bg-[#d5cc65] rounded-md" onClick={() => Router.push('https://pay.sandbox.checkout.com/page/hpp_TvSG2Zqjm56y?_pcf')}>
                        Pay Now
                      </button>
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

export default PayNow;
