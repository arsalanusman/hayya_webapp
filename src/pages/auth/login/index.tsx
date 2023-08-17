import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { getTranslation } from "../../../helper/utilities";
import { Authentication } from "../../../helper/enums/authentication";
import Backbutton from "@/components/ui/backhomebutton";

type Props = {};

const FILE_NAME = "authentication";
const x = Authentication;

const Login = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  return (
    <>
     <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100% h-full w-full px-0 pb-10 2xl:px-40 xl:px-40 lg:px-40  md:px-10 sm:px-10 ">
     <div className="container mx-auto">
     <Backbutton />
      <div
        className={
          "bg-white border-solid border-2 border-gray-100 mx-auto rounded-2xl p-5 2xl:p-20 xl:p-20 lg:p-10  md:p-10 sm:p-5"
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
          <div className=" ">
            <h1 className="text-[#327886] text-4xl mb-6 font-[600]">
              {tr(x.LOGIN_TITLE)}
            </h1>
            <p className="mb-4 w "> {tr(x.LOGIN_SUB_HEADING)}</p>
            <Image
              src="/img/login-l.png"
              width={213}
              height={330}
              alt="Picture of the author"
              className="mx-auto sm:mx-0 mb-6 sm:mb-0"
            />
          </div>
          <div className="pl-0 pr-0 sm:pl-4 sm:pr-4">
            <div className=" mb-4">
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {" "}
                {tr(x.EMAIL)}
              </Label>
              <Input
                type="email"
                id="email"
                placeholder={tr(x.EMAIL_PLACEHOLDER)}
                className="p-6 rounded-2xl mt-2"
              />
            </div>
            <div className="">
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {tr(x.PASSWORD)}
              </Label>
              <Input
                type="password"
                id="email"
                placeholder={tr(x.PASSWORD_PLACEHOLDER)}
                className="p-6 rounded-2xl mt-2"
              />
            </div>

            <div className="flex justify-between mt-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className=" text-[14px] font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tr(x.REMEMBER_ME)}
                </label>
              </div>
              <div>
                <label
                  htmlFor="terms"
                  className=" text-[14px] font-[500]  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 underline"
                >
                  {tr(x.FORGOT_PASSWORD)}
                </label>
              </div>
            </div>
            <Button
              className="bg-[#d5cc65] w-full mt-6 text-[16px] font-[600] rounded-2xl p-6 hover:bg-[#327886] hover:text-[#fff]"
              variant="outline"
            >
              {tr(x.LOGIN_BTN)}
            </Button>
            <div className="flex justify-between gap-6 mt-6">
              <Image
                src="/img/explanation.svg"
                width={16}
                height={17}
                alt="Picture of the author"
              />
              <p className="text-[14px] ">{tr(x.LOGIN_DESCRIPTION)}</p>
            </div>
            <div className="text-center mt-6 ">
              {tr(x.HAVE_AN_ACCOUNT)}{" "}
              <Link href="/auth/register" className="underline font-[600]">
                {tr(x.HAVE_AN_ACCOUNT_SIGN_UP)}
              </Link>
            </div>
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