import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import Link from "next/link";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTranslation } from "../../../helper/utilities";
import { MyHayya } from "../../../helper/enums/my-hayya";

type Props = {};

const FILE_NAME = "my-hayya";
const x = MyHayya;

const Summary = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);



  return (
    
    <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%    h-full w-full px-0 pb-10 2xl:px-40 xl:px-40 lg:px-40  md:px-10 sm:px-10 ">
     
    <div className="container mx-auto">
      <div className="text-center mx-auto py-10">
          <Image
              src="/img/star.svg"
              width={32}
              height={32}
              alt="Picture of the author"
              className="text-center mx-auto mb-3"
            />
            <p className="text-[26px] font-[500] text-white">{tr(x.LABELS_REQUEST_HAYYA)}</p>
      </div>
      <div className="bg-white border-solid border-2  border-gray-100 rounded-2xl p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
       <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div>
            <Image
                src="/img/client01.png"
                width={70}
                height={70}
                alt="Picture of the author"
                className=" rounded-full border-[#E9E9E9] border-4 mb-4"
              />
              <div>
                <div className="text-[26px] font-[700] ">{tr(x.LABELS_MY_HAYYA)}</div>
                <div className="text-[16px] font-[600] underline"> {tr(x.LABELS_SHARE_HAYYA_WITH_ME)}</div>
              </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex justify-between items-center sm:sm:flex-col sm:justify-start sm:inline-table border border-[#D2D2D2] rounded-2xl p-5 w-full sm:w-fit ">
            <Image
                  src="/img/dependants-01.svg"
                  width={21}
                  height={18}
                  alt="Picture of the author"
                  className=" mb-4 "
                />
                <p className="font-[600] mb-5 px-4 text-[12px] sm:text-[16px]">{tr(x.LABELS_MANAGE_DEPENDANTS)}</p>
                <button className="bg-[#222222] rounded-full flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 float-right"> <Image
                  src="/img/arrow-r.svg"
                  width={13}
                  height={11}
                  alt="Picture of the author"
                  className=""
                /></button>
            </div>
            <div className="flex justify-between items-center sm:sm:flex-col sm:justify-start sm:inline-table border border-[#D2D2D2] rounded-2xl p-5 w-full sm:w-fit ">
            <Image
                  src="/img/dependants-01.svg"
                  width={21}
                  height={18}
                  alt="Picture of the author"
                  className=" mb-4"
                />
                <p className="font-[600] mb-5 px-4 text-[12px] sm:text-[16px]">{tr(x.LABELS_VIEW_MY_APPLICATIONS)}</p>
                <button className="bg-[#222222] rounded-full flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 float-right"> <Image
                  src="/img/arrow-r.svg"
                  width={13}
                  height={11}
                  alt="Picture of the author"
                  className=""
                /></button>
            </div>
            <div className="flex justify-between items-center sm:sm:flex-col sm:justify-start sm:inline-table border border-[#D2D2D2] rounded-2xl p-5 w-full sm:w-fit ">
           <Image
                src="/img/dependants-01.svg"
                width={21}
                height={18}
                alt="Picture of the author"
                className=" mb-4"
              />
              <p className="font-[600] mb-5 px-4 text-[12px] sm:text-[16px]">{tr(x.LABELS_APPLY_FOR_NEW_HAYYA)}</p>
              <button className="bg-[#222222] rounded-full flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 float-right"> <Image
                src="/img/arrow-r.svg"
                width={13}
                height={11}
                alt="Picture of the author"
                className=""
              /></button>
           </div>
          </div>
       </div>
       <div className="border border-[#f0f0f0] my-4"></div>
       <Tabs defaultValue="summary" className=" w-full mt-6 bg-white">
        <TabsList className=" w-full h-auto flex flex-col sm:flex-row gap-1 sm:gap-4 bg-white">
          <TabsTrigger className="w-full p-3 text-[#000] bg-[#D5CC65] rounded-2xl border border-[#E9E9E9]" value="summary">{tr(x.LABELS_SUMMARY)}</TabsTrigger>
          <TabsTrigger className="w-full p-3 text-[#000]  rounded-2xl border border-[#E9E9E9]" value="application-history">{tr(x.LABELS_APPLICATION_HISTORY)}</TabsTrigger>
          <TabsTrigger className="w-full p-3 text-[#000]  rounded-2xl border border-[#E9E9E9]" value="accommodation">{tr(x.LABELS_ACCOMMODATION)}</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="bg-[#327886] rounded-2xl p-4 px-4 sm:px-10 mt-4">
             <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 my-1 sm:my-4">
                <div>
                  <Label htmlFor="email" className="text-[12px] font-[500] text-white uppercase">
                  {tr(x.LABELS_ENTRY_REF_NUMBER)}
                  </Label>
                  <Input
                    type="email"
                    disabled 
                    value="AF12345689"
                    className="p-0 rounded-2xl border-0 disable bg-transparent text-white text-[16px]"
                  />
                </div>
                <div>
                <Label htmlFor="email" className="text-[12px] font-[500] text-white uppercase">
                {tr(x.LABELS_STATUS)}
                  </Label>
                  <Input
                    type="email"
                    disabled 
                    value="Pending"
                    className="p-0 rounded-2xl border-0 disable bg-transparent text-white text-[16px]"
                  />
                </div>
                <div>
                <Label htmlFor="email" className="text-[12px] font-[500] text-white uppercase">
                 {tr(x.LABELS_EXPIRY_DATE)}
                  </Label>
                  <Input
                    type="email"
                    disabled 
                    value="n.a."
                    className="p-0 rounded-2xl border-0 disable bg-transparent text-white text-[16px]"
                  />
                </div>
             </div>
             <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 my-1 sm:my-4">
                <div>
                  <Label htmlFor="email" className="text-[12px] font-[500] text-white uppercase">
                  {tr(x.LABELS_HAYYA_NUMBER)}
                  </Label>
                  <Input
                    type="email"
                    disabled 
                    value="#1234567"
                    className="p-0 rounded-2xl border-0 disable bg-transparent text-white text-[16px]"
                  />
                </div>
                <div>
                <Label htmlFor="email" className="text-[12px] font-[500] text-white uppercase">
                 {tr(x.LABELS_TYPE)}
                  </Label>
                  <Input
                    type="email"
                    disabled 
                    value="Tourist Entry (A1)"
                    className="p-0 rounded-2xl border-0 disable bg-transparent text-white text-[16px]"
                  />
                </div>
                <div>
                <Label htmlFor="email" className="text-[12px] font-[500] text-white uppercase">
                {tr(x.LABELS_PURPOSE)}
                  </Label>
                  <Input
                    type="email"
                    disabled 
                    value="Leisure"
                    className="p-0 rounded-2xl border-0 disable bg-transparent text-white text-[16px]"
                  />
                </div>
             </div>
             <div className="border border-[#ffffff5b] my-4"></div>
             <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-10  gap-1 sm:gap-4 my-1 sm:my-4">

             <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mb-5 sm:mb-0">
              <div className="w-full sm:w-20">
                <ol className="flex flex-col justify-between h-full relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
                  <li className=" ml-6 flex items-center">            
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#42BE65] rounded-full -left-3 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                      <Image
                            src="/img/yes-t.svg"
                            width={10}
                            height={11}
                            alt="Picture of the author"
                            className=""
                          />
                      </span>
                      <h3 className="font-medium leading-tight text-[14px]">{tr(x.LABELS_ACCEPTED)}</h3>
                    
                  </li>
                  </ol>
              </div>
              <div className="w-full sm:w-96">
                 <div className="pb-0 sm:pb-4">
                      <p className="text-[14px] font-[500]">{tr(x.LABELS_SUBMISSION)}</p>
                      <p className="text-[14px] font-[400]">{tr(x.LABELS_SUBMISSION_SUMMARY)}</p>
                  </div>
              </div>
              <div className="flex sm:justify-center items-center w-full sm:w-20">
                <div className="text-[12px]">June 06, 2023</div>
              </div>
             </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mb-5 sm:mb-0">
              <div className="w-full sm:w-20">
                <ol className="flex flex-col justify-between h-full relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
                <li className=" ml-6 flex items-center">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#F4A118] rounded-full -left-3 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                          <Image
                            src="/img/time.svg"
                            width={12}
                            height={13}
                            alt="Picture of the author"
                            className=""
                          />
                      </span>
                      <h3 className="font-medium leading-tight text-[14px]">{tr(x.LABELS_PENDING)}</h3>
                  </li>
                  </ol>
              </div>
              <div className="w-full sm:w-96">
                  <div className="pb-0 sm:pb-4">
                      <p className="text-[14px] font-[500]">{tr(x.LABELS_ACCOMMODATION)} </p>
                        <p className="text-[14px] font-[400]"><Link href="/" className="underline font-[500]">{tr(x.LABELS_ACCOMMODATION_SUMMARY_LINK)}</Link>{tr(x.LABELS_ACCOMMODATION_SUMMARY)}</p>
                    </div>
              </div>
              <div className="flex sm:justify-center items-center w-full sm:w-20">
                <div className="text-[12px]">June 06, 2023</div>
              </div>
             </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mb-5 sm:mb-0">
              <div className="w-full sm:w-20">
                <ol className="flex flex-col justify-between h-full relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
                <li className=" ml-6 flex items-center">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-[#F4A118] rounded-full -left-3 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                          <Image
                            src="/img/time.svg"
                            width={12}
                            height={13}
                            alt="Picture of the author"
                            className=""
                          />
                      </span>
                      <h3 className="font-medium leading-tight text-[14px]">{tr(x.LABELS_PENDING)}</h3>
                  </li>
                  </ol>
              </div>
              <div className="w-full sm:w-96">
                 <div className="pb-0 sm:pb-4">
                      <p className="text-[14px] font-[500]">{tr(x.LABELS_PAYMENTS)} </p>
                      <p className="text-[14px] font-[400]">{tr(x.LABELS_PAYMENT_SUMMARY)} <Link href="/" className="underline font-[500]">{tr(x.LABELS_PAYMENT_SUMMARY_LINK)}</Link></p>
                  </div>
              </div>
              <div className="flex sm:justify-center items-center w-full sm:w-20">
                <div className="text-[12px]">June 06, 2023</div>
              </div>
             </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mb-5 sm:mb-0">
              <div className="w-full sm:w-20">
                <ol className="flex flex-col justify-between h-full relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
                <li className="ml-6 flex items-center">
                      <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <Image
                            src="/img/circle.svg"
                            width={24}
                            height={25}
                            alt="Picture of the author"
                            className=""
                          />
                      </span>
                      <h3 className="font-medium leading-tight text-[14px]"> </h3>
                  </li>
                  </ol>
              </div>
              <div className="w-full sm:w-96">
                 <div className="pb-0 sm:pb-4">
                      <p className="text-[14px] font-[500]">{tr(x.LABELS_HAYYA_DIGITAL_CARD)}</p>
                      <p className="text-[14px] font-[400]"></p>
                  </div>
              </div>
              <div className="flex sm:justify-center items-center w-full sm:w-20">
                <div className="text-[12px]">June 06, 2023</div>
              </div>
             </div>
 
             </div>

            
             
        </TabsContent>
        <TabsContent value="application-history">Change your password here.</TabsContent>
        <TabsContent value="accommodation">Make changes to your account here.</TabsContent>
      </Tabs>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-0 sm:px-40">
        <div className="w-full">
          <Button
            variant="outline"
            className="w-full p-6 rounded-2xl border-[#000]"
          >
           {tr(x.LABELS_UPDATE_APPLICATION)}
          </Button>
        </div>
        <div className="w-full">
          <Button
            variant="secondary"
            className="bg-[#e7e3aa] w-full p-6 rounded-2xl"
          >
         {tr(x.LABELS_DOWNLOAD_HAYYA)}
          </Button>
        </div>
      </div>
      <div className="border border-[#b2b2b25b] my-4"></div>
      <div className=" text-center text-[14px] px-0 sm:px-10 mt-5">{tr(x.LABELS_NOTE)} {tr(x.LABELS_HAYYA_PLATFORM_NODE_DESCRIPTION)} <Link href="/" className="underline font-[500]">{tr(x.LABELS_HAYYA_PLATFORM_NODE_DESCRIPTION_LINK)}</Link></div>
      </div>
    </div>
   
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

export default Summary;
