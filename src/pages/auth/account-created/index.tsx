import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Authentication } from "@/helper/enums/authentication";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

type Props = {};

const FILE_NAME = "authentication";
const x = Authentication;

const CreateAccount = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
  },[])

  return (
    <>
    {loading && 
      <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto p-2 md:p-20 h-[100vh]">
         <div className=" ">
         <Image
                src="/img/account-created-bg.svg"
                width={500}
                height={596}
                alt="Picture of the author"
                className="text-center mx-auto mt-[0px] "
              />
         </div>
         <div className="relative top-[-110px] sm:top-[-160px] text-center w-100 sm:w-80 mx-auto ">
          <h1 className="text-white text-3xl mb-3">{tr(x.ACCOUNT_CREATED_SUCCESS)}</h1>
          <p className="text-white text-[12px] tracking-widest mb-3">{tr(x.ACCOUNT_CREATED_SUCCESS_DESC)}</p>
          <Button
              className="bg-[#000000] text-[#d5cc65] w-full mt-3 text-[12px] font-[600] rounded-2xl p-6 flex gap-4 drop-shadow hover:bg-[#838383] boder-0"
             
            >
             
             {tr(x.LOGIN_BTN)}
            </Button>
         </div>
      </div>
      }
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

export default CreateAccount;