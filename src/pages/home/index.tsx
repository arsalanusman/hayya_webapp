'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "../../helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "../../helper/enums/hayya-with-me";
import { useEffect, useState } from "react";
import Slider from "@/components/slider";
import CarouselSlider from "@/components/carousel-slider";


type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const HomePage =  () => {
  const { t } =  useTranslation([FILE_NAME]);
  const tr = (key: string) =>  getTranslation(t, FILE_NAME, key);
  const [isLoading,setIsLoading] = useState(false)

   
    useEffect(()=> {
        setIsLoading(true)
        }
    ,[])

    return (<>
        {isLoading &&
            <>
         {/* <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
            
         </div> */}
        <Slider />
        <CarouselSlider />
        </>
    }</>)
}



export const getServerSideProps: GetServerSideProps<Props> = async ({
    locale,
  }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
    },
  });
  
  export default HomePage;