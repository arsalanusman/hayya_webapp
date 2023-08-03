"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";


import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTranslation } from "../../../helper/utilities";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const Verification = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  const Router = useRouter()
  return (
    <>
    {/* {tr(x.LABELS_REQUEST_HAYYA)} */}
      <div className="bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto p-5 md:p-10 h-[100vh]">
         <div className=" ">
         <Image
                src="/img/account-created-bg2.svg"
                width={500}
                height={596}
                alt="Picture of the author"
                className="text-center mx-auto mt-[0px] "
              />
         </div>
         <div className="relative top-[-110px] sm:top-[-160px] text-center w-100 sm:w-80 mx-auto w30">
          <h1 className="text-white text-4xl mb-3">{t(x.SUCCESS_PAGE_LABELS_YOU_ARE_DONE)}</h1>
          <p className="text-white text-[16px] tracking-widest mb-3"><b>{t(x.SUCCESS_PAGE_LABELS_YOU_ARE_DONE_SUMMARY)}</b></p><br />
          <p className="text-yellow text-[18px] tracking-widest mb-3">{t(x.SUCCESS_PAGE_LABELS_REFERENCE_NO)} 1234567</p><br />
          <p className="text-white text-[12px] tracking-widest mb-3">{t(x.SUCCESS_PAGE_LABELS_GO_TO_HAYYA_GUIDE)}
</p>
          
          <Button
              className="bg-[#000000] text-[#d5cc65] w-full mt-3 text-[14px] font-[600] rounded-2xl p-6 flex gap-4 drop-shadow hover:bg-[#838383] boder-0"
              onClick={(e)=>Router.push('/application/summary')}
            >
            {t(x.SUCCESS_PAGE_LABELS_VIEW_ACCOUNT)}
            </Button>
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

export default Verification;