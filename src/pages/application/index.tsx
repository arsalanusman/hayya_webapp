'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Backbutton from "@/components/ui/backhomebuuton";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "../../helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "../../helper/enums/hayya-with-me";
import { useEffect, useState } from "react";


type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const Application =  () => {
  const { t } =  useTranslation([FILE_NAME]);
  const tr = (key: string) =>  getTranslation(t, FILE_NAME, key);
  const [isLoading,setIsLoading] = useState(false)


    const dispatch = useDispatch();
    const router = useRouter()
    

    function changeRoute(route: string, type: string) {
        dispatch({type:"SET_DATA", payload: type });
        router.push(route)
    }

    useEffect(()=> {
        setIsLoading(true)
    }
    ,[])

    return (<>
        {isLoading &&
            
        <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
            <Backbutton />
            <div className="text-center mx-auto mb-6">
                <Image
                    src="/img/star.svg"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                    className="text-center mx-auto mb-3"
                />
                <p className="text-[26px] font-[500] text-white">{tr(x.REQUEST_HAYYA)}</p>
            </div>

            <div className="bg-white border-solid border-2  border-gray-100 rounded-2xl  mx-0 sm:mx-28 p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
                <div className=" flex-row sm:flex justify-between items-center">
                    <div>
                        <h1 className="text-[32px] font-[500]"> {tr(x.WIZARD_LABELS_HAYYA_APPLICATION)}</h1>
                    </div>
                    <div className="flex gap-2 bg-[#FAF3DD] p-3 px-2 sm:px-6 rounded-2xl">
                        <Image
                            src="/img/Help.svg"
                            width={24}
                            height={24}
                            alt="Picture of the author"
                            className="text-center mx-auto"
                        />
                        <p className="text-[14px]">{tr(x.WIZARD_MESSAGES_INFO_NUMBER_OF_VISA)}</p>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                {tr(x.WIZARD_LABELS_TYPE_OF_HAYYA_VISIT_DESC)}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="border-[1px] border-[#DEDEDE] rounded-2xl  p-4 ">
                        <Image
                            src="/img/icn.svg"
                            width={49}
                            height={48}
                            alt="Picture of the author"
                            className="text-center mx-auto mb-6"
                        />
                        <div className="border-[1px] border-[#DEDEDE] rounded-2xl w-fit p-2 px-4 mx-auto text-center">
                {tr(x.WIZARD_LABELS_TYPE_A)}</div>
                        <div className="text-[#327886] text-[21px] font-[500] mx-auto text-center mt-8 mb-5">{tr(x.WIZARD_LABELS_TOURIST)}</div>
                        <div className="mx-auto text-center">{tr(x.WIZARD_LABELS_TOURIST_CARD_DESCRIPTION)}</div>
                        <Button
                            className="bg-[#000000] text-[#D5CC65] w-full mt-3 text-[12px] sm:text-[14px] font-[600] rounded-2xl p-6 flex gap-4 drop-shadow hover:bg-[#838383]"
                            variant="outline"
                            onClick={(e) => changeRoute( '/application/tourist', 'tourist')}
                        >
                            {tr(x.WIZARD_LABELS_TOURIST_CARD_BUTTON)}
                        </Button>
                    </div>
                    <div className="border-[1px] border-[#DEDEDE] rounded-2xl  p-4 ">
                        <Image
                            src="/img/icn-2.svg"
                            width={49}
                            height={48}
                            alt="Picture of the author"
                            className="text-center mx-auto mb-6"
                        />
                        <div className="border-[1px] border-[#DEDEDE] rounded-2xl w-fit p-2 px-4 mx-auto text-center">{tr(x.WIZARD_LABELS_TYPE_B)}</div>
                        <div className="text-[#327886] text-[21px] font-[500] mx-auto text-center mt-8 mb-5">
                            {tr(x.WIZARD_LABELS_CONFERENCE_AND_EVENTS)}</div>
                        <div className="mx-auto text-center">
                            {tr(x.WIZARD_LABELS_CONFERENCE_CARD_DESCRIPTION)}</div>
                        <Button
                            className="bg-[#000000] text-[#D5CC65] w-full mt-3 text-[12px] sm:text-[14px] font-[600] rounded-2xl p-6 flex gap-4 drop-shadow hover:bg-[#838383]"
                            variant="outline"
                            onClick={(e) => changeRoute('/application/tourist', 'events')}
                        >
                           
                           {tr(x.WIZARD_LABELS_CONFERENCE_CARD_BUTTON)}
                        </Button>
                    </div>
                    <div className="border-[1px] border-[#DEDEDE] rounded-2xl  p-4 ">
                        <Image
                            src="/img/icn.svg"
                            width={49}
                            height={48}
                            alt="Picture of the author"
                            className="text-center mx-auto mb-6"
                        />
                        <div className="border-[1px] border-[#DEDEDE] rounded-2xl w-fit p-2 px-4 mx-auto text-center">{tr(x.WIZARD_LABELS_TYPE_C)}</div>
                        <div className="text-[#327886] text-[21px] font-[500] mx-auto text-center mt-8 mb-5">
                            {tr(x.WIZARD_LABELS_HAYYA_WITH_ME)}</div>
                        <div className="mx-auto text-center">
                            {tr(x.WIZARD_LABELS_HAYYA_WITH_ME_CARD_DESCRIPTION)}</div>
                        <Button
                            className="bg-[#000000] text-[#D5CC65] w-full mt-3 text-[12px] sm:text-[14px] font-[600] rounded-2xl p-6 flex gap-4 drop-shadow hover:bg-[#838383]"
                            variant="outline"
                            onClick={(e) => changeRoute('/application/tourist', 'hayaWithMe')}
                        >
                        {tr(x.WIZARD_LABELS_HAYYA_WITH_ME_CARD_BUTTON)}
                        </Button>
                    </div>
                </div>
                <div className="mt-8">
                    
                {tr(x.WIZARD_MESSAGES_INFO_TOURIST_CATEGORY_NOTE)}</div>
            </div>

        </div>
        
    }</>)
}



export const getServerSideProps: GetServerSideProps<Props> = async ({
    locale,
  }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
    },
  });
  
  export default Application;