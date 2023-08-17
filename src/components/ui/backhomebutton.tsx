import Image from "next/image";
import Link from "next/link";
import enHeader from "../../../public/locales/en/header.json";
import arHeader from "../../../public/locales/ar/header.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function backhomebutton() {
  const router = useRouter();
  const { t } = useTranslation("header");
  const footerLanguage: any = router.locale === "ar" ? arHeader : enHeader;

  return (
    <Link href="/">
      {" "}
      <div className="pt-10 pb-10 flex items-center gap-2 backbutton w-fit">
        {" "}
        <span className="bg-[#ffffff]  flex justify-center items-center p-1.5 w-8 h-8 rounded-full ">
          {" "}
          <Image
            src="/img/Arrow_Left.svg"
            width={12}
            height={10}
            alt="Picture of the author"
          />
        </span>{" "}
        <p className="text-white ">{t(footerLanguage["back-to-home-page"])}</p>
      </div>{" "}
    </Link>
  );
}
