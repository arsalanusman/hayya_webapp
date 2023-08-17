import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Backbutton from "@/components/ui/backhomebutton";
import { useRouter } from "next/router";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTranslation } from "../../../helper/utilities";
import { Authentication } from "@/helper/enums/authentication";



type Props = {};
const FILE_NAME = "authentication";
const x = Authentication;
const Verification = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const Router = useRouter()
  
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  return (
    <>
      <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%    h-full w-full px-0 pb-10 2xl:px-40 xl:px-40 lg:px-40  md:px-10 sm:px-10 ">
        <div className="container mx-auto">
        <Backbutton />
      <div className="bg-white border-solid border-2 border-gray-100 rounded-2xl mx-auto pt-6 pb-6 p-2 sm:p-4 md:p-10 lg:p-10 xl:p-20 2xl:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="pl-4 pr-4 lg:pl-0 lg:pr-10">
            <h1 className="text-[#327886] text-4xl mb-6 font-[600]">{tr(x.VERIFY_CODE)} <br ></br> {tr(x.VERIFY_EMAIL_ADDRESS)} </h1>
            <p className="mb-4 w ">{tr(x.VERIFY_EMAIL_ADDRESS_DESC)}</p>
           
           
          </div>
          <div className="pl-4 pr-4">
            <div className=" mb-4">
              <Label htmlFor="email" className="text-[14px] font-[400] "> {tr(x.VERIFICATION_CODE)}</Label>
              <div className="flex justify-between i">
              <Input
                type="text"
                id="number"
                placeholder="0"
                className="p-1 rounded-2xl mt-2 w-10 h-10 sm:w-12 sm:h-12 text-center"
                maxLength={1} 
              />
               <Input
                type="text"
                id="number"
                placeholder="0"
                className="p-1 rounded-2xl mt-2 w-10 h-10 sm:w-12 sm:h-12 text-center"
                maxLength={1} 
              />
                 <Input
                type="text"
                id="number"
                placeholder="0"
                className="p-1 rounded-2xl mt-2 w-10 h-10 sm:w-12 sm:h-12 text-center"
                maxLength={1} 
              />
                 <Input
                type="text"
                id="number"
                placeholder="0"
                className="p-1 rounded-2xl mt-2 w-10 h-10 sm:w-12 sm:h-12 text-center"
                maxLength={1} 
              />
                 <Input
                type="text"
                id="number"
                placeholder="0"
                className="p-1 rounded-2xl mt-2 w-10 h-10 sm:w-12 sm:h-12 text-center"
                maxLength={1} 
              />
                 <Input
                type="text"
                id="number"
                placeholder="0"
                className="p-1 rounded-2xl mt-2 w-10 h-10 sm:w-12 sm:h-12 text-center"
                maxLength={1} 
              />
              </div>
            </div>
           
            

           
            <Button
              className="bg-[#d5cc65] w-full mt-6 text-[16px] font-[600] rounded-2xl p-7 hover:bg-[#327886] hover:text-[#fff]"
              variant="outline"
              onClick={(e)=>Router.push('/auth/set-password')}
            >
          {tr(x.VERIFY_CODE)}
            </Button>
            
           
            <div className="text-center mt-6 ">{tr(x.HAVE_YOU_RECEIVE_CODE)}<br></br><Link href="/" className="underline font-[600]">{tr(x.SEND_A_NEW_CODE)}</Link></div>
          </div>
        </div>
      </div>
      </div>
        </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default Verification;
