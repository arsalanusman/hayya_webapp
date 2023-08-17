import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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

const Setpassword = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  const Router = useRouter()
  return   <>
   <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%    h-full w-full px-0 pb-10 2xl:px-40 xl:px-40 lg:px-40  md:px-10 sm:px-10 ">
        <div className="container mx-auto">
        <Backbutton />
        <div className="bg-white border-solid border-2 border-gray-100 rounded-2xl mx-auto p-5 sm:p-10 md:p-10 lg:p-10 xl:p-20 2xl:p-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between ">
            <div className="pl-4 pr-4 md:pl-0 md:pr-10">
              <h1 className="text-[#327886] text-3xl sm:text-4xl mb-6 font-[600] ">{tr(x.SETUP_YOUR_PASSWORD)}</h1>
              <p className="mb-4 w ">{tr(x.SETUP_YOUR_PASSWORD_DESC)}</p>
            </div>
            <div className="pl-4 pr-4">
              <div className=" mb-4">
                <Label htmlFor="email" className="text-[14px] font-[400] ">{tr(x.PASSWORD)}</Label>
                <div className="flex justify-between i">
                <Input
                  type="text"
                  id="number"
                  placeholder={tr(x.PASSWORD_PLACEHOLDER)}
                  className="p-6 rounded-2xl mt-2 "
                />
                </div>
              </div>
              <div className="flex gap-2 text-[14px] mb-2"> 
                    <Image
                      src="/img/check-d.svg"
                      width={12}
                      height={12}
                      alt="Picture of the author"
                    />
                    <p>{tr(x.PASSWORD_VAL_1)}</p>
                </div>
                <div className="flex gap-2 text-[14px] mb-2"> 
                    <Image
                      src="/img/check-d.svg"
                      width={12}
                      height={12}
                      alt="Picture of the author"
                    />
                    <p>{tr(x.PASSWORD_VAL_2)}</p>
                </div>
                <div className="flex gap-2 text-[14px] mb-4"> 
                    <Image
                      src="/img/check-d.svg"
                      width={12}
                      height={12}
                      alt="Picture of the author"
                    />
                    <p>{tr(x.PASSWORD_VAL_3)}</p>
                </div>
                <div className=" mb-4">
                <Label htmlFor="email" className="text-[14px] font-[400] ">{tr(x.CONFIRM_PASSWORD)}</Label>
                <div className="flex  justify-between i">
                <Input
                  type="text"
                  id="number"
                  placeholder={tr(x.CONFIRM_PASSWORD_NEW_PLACEHOLDER)}
                  className="p-6 rounded-2xl mt-2 "
                />
                </div>
              </div>
            
              <Button
                className="bg-[#d5cc65] w-full mt-6 text-[16px] font-[600] rounded-2xl p-7 hover:bg-[#327886] hover:text-[#fff]"
                variant="outline"
                onClick={(e)=> Router.push('/auth/account-created')}
              >
                {tr(x.CREATE_ACCOUNT)}
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
</>;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default Setpassword;
