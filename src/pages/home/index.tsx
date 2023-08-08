'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "../../helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "../../helper/enums/hayya-with-me";
import { useEffect, useState } from "react";
import Banner from "@/components/expo/banner";
import Slider from "@/components/slider";
import CarouselSlider from "@/components/expo/services";
import Journey from "@/components/expo/Journey";
import Apply from "@/components/expo/apply";
import Events from "@/components/expo/events";
import Mobileapp from "@/components/expo/mobileapp";
import   Head  from "next/head";


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

    return (<div className=" bg-[#F1F1F1]">
       <Head>
        <title>Qatar Expo 2023</title>
          <link href="/styles/expo.css" rel="stylesheet" />
          <link href="/styles/slick.css" rel="stylesheet" />
        </Head>
        {isLoading &&
            <>
        <Banner/>
       
        <CarouselSlider />
        <Journey/>
        <Apply/>
        <Events/>
        <Mobileapp/>
        </>
    }</div>)
}



export const getServerSideProps: GetServerSideProps<Props> = async ({
    locale,
  }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
    },
  });
  
  export default HomePage;