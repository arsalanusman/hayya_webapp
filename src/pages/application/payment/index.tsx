"use client";
import Backbutton from "@/components/ui/backhomebutton";
import Image from "next/image";
import { useEffect,  useState } from "react"
import { GetServerSideProps} from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";
import InsuranceCard from "@/components/InsuranceCard";


type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const ApplicationInformation = () => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
  const [isLoading,setIsLoading] = useState(false)

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index:any) => {
    setSelectedCardIndex(index);
  };


  const insuranceData = [
    {
      name: 'Q Life Insurance 1',
      logoSrc: '/img/qlm.webp',
      terms: 'Terms and Conditions 1',
      price: '600 QAR',
      serviceBreakdown: 'Service Breakdown 1',
    },
    {
      name: 'Q Life Insurance 2',
      logoSrc: '/img/qlm.webp',
      terms: 'Terms and Conditions 2',
      price: '800 QAR',
      serviceBreakdown: 'Service Breakdown 2',
    },
    {
      name: 'Q Life Insurance 3',
      logoSrc: '/img/qlm.webp',
      terms: 'Terms and Conditions 3',
      price: '1000 QAR',
      serviceBreakdown: 'Service Breakdown 3',
    },
  ];

  useEffect(()=> {
    setIsLoading(true)
}
,[])


  return <>
       <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
      {isLoading && <>
       <Backbutton />
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
              <h3
                  className=" text-[22px] font-[500] w-full mb-10"
                >Choose health & travel Insurance service</h3>
                <div className="block">
                <ul className="bg-gray-100 p-4">
                  {insuranceData.map((data, index) => (
                  selectedCardIndex != null ? selectedCardIndex  === index  && <InsuranceCard key={index} insuranceData={data}
                    onClick={() => handleCardClick(index)}
                    isSelected={index === selectedCardIndex} /> : <InsuranceCard key={index} insuranceData={data}
                    onClick={() => handleCardClick(index)}
                    isSelected={false} />
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div></>}
      </div>
   

  </>
}


export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default ApplicationInformation;
