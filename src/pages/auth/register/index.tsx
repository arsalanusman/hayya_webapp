import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTranslation } from "../../../helper/utilities";
import { HayyaWithMe } from "../../../helper/enums/hayya-with-me";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Backbutton from "@/components/ui/backhomebuuton";
import { Router, useRouter } from "next/router";
import { Authentication } from "@/helper/enums/authentication";

type Props = {};

const FILE_NAME = "authentication";
const x = Authentication;

const Login = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const Router = useRouter();
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  return (
    <>
      {/* {tr(x.REQUEST_HAYYA)}
      {tr(x.FORM_1_CONFERENCE_AND_EVENTS)} */}
       <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%    h-full w-full px-0 pb-10 2xl:px-40 xl:px-40 lg:px-40  md:px-10 sm:px-10 ">
        <div className="container mx-auto">
        <Backbutton />
       <div className="bg-white border-solid border-2 border-gray-100 rounded-2xl mx-auto p-5 sm:p-10 md:p-10 lg:p-10 xl:p-20 2xl:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
          <div className="pr-4 md:pr-10">
            <h1 className="text-[#327886] text-4xl mb-6 font-[600]">{tr(x.REGISTER_TITLE)}</h1>
            <p className="mb-4 w ">{tr(x.REGISTER_SUB_HEADING)}</p>
            <Image
            src="/img/register-l.png"
            width={213}
            height={330}
            alt="Picture of the author"
            className="mx-auto sm:mx-0 mb-6 sm:mb-0"
          />
          </div>
          <div className="px-4">
            <div className=" mb-4">
              <Label htmlFor="email" className="text-[14px] font-[400] "> {tr(x.EMAIL)}</Label>
              <Input
                type="email"
                id="email"
                placeholder={tr(x.EMAIL_PLACEHOLDER)}
                className="p-6 rounded-2xl mt-2"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="text-[14px] font-[400] ">{tr(x.FIRST_NAME)}</Label>
              <Input
                type="name"
                id="email"
                placeholder={tr(x.FIRST_NAME_PLACEHOLDER)}
                className="p-6 rounded-2xl mt-2"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="text-[14px] font-[400] ">{tr(x.LAST_NAME)}</Label>
              <Input
                type="name"
                id="email"
                placeholder={tr(x.LAST_NAME_PLACEHOLDER)}
                className="p-6 rounded-2xl mt-2"
              />
            </div>

            <div className="flex justify-between mt-6">
              <div className="flex items-center space-x-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className=" text-[14px] font-[400] leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 {tr(x.REGISTER_TERM_AGREE)}  </label>
              </div>
             
            </div>
            <Button
              className="bg-[#d5cc65] w-full mt-6 text-[14px] font-[600] rounded-2xl p-6 hover:bg-[#327886] hover:text-[#fff]"
              variant="outline"
              onClick={(e)=>Router.push('/auth/verification')}
            >{tr(x.SEND_VERIFICATION_CODE)} 
             
            </Button>
            {/* <div className="text-center mt-6 mb-6 before-login-with relative"><p>Or register with</p></div>
            <Button
              className="bg-[#1877F2] text-white w-full mt-3 text-[14px] font-[600] rounded-2xl p-7 flex gap-4 hover:bg-[#00459f] hover:text-[#fff]"
              variant="outline"
            >
              <Image
                src="/img/fb.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              Continue with Facebook
            </Button>
            <Button
              className="bg-[#fff] text-gray-500 w-full mt-3 text-[14px] font-[600] rounded-2xl p-7 flex gap-4 drop-shadow"
              variant="outline"
            >
              <Image
                src="/img/google.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              Continue with Facebook
            </Button>
            <Button
              className="bg-[#000000] text-white w-full mt-3 text-[14px] font-[600] rounded-2xl p-7 flex gap-4 drop-shadow hover:bg-[#838383]"
              variant="outline"
            >
              <Image
                src="/img/apple.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
             Continue with Apple
            </Button> */}
            <div className="text-center mt-6 ">{tr(x.ALREADY_REGISTERED)}  <Link href="/auth/login" className="underline font-[600]"> {tr(x.ALREADY_REGISTERED_LOGIN)} </Link></div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default Login;
