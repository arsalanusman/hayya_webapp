
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import enFooter from "../../public/locales/en/footer.json";
import arFooter from "../../public/locales/ar/footer.json";
import { useRouter } from "next/router";


export default function Footer() {
  const router = useRouter();
  const { t } = useTranslation('footer');

  const footerLanguage:any = router.locale === 'ar' ? arFooter : enFooter;


  return (
    <div className="bg-[#222222] container-fluid mx-auto px-10 sm:px-20 p-10 ">
       <div className="flex gap-20 sm:gap-40  mb-8">
        <div>
          <p className=" text-white text-[12px] tracking-[.10em] uppercase mb-4 boder-heading-style relative">{t(footerLanguage["legal-terms"])}</p>
            <ul className=" text-white">
                <li className="mb-2">
                  <Link href="/" >{t(footerLanguage["f-col-1-menu-item-1"])}</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">{t(footerLanguage["f-col-1-menu-item-2"])}</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">{t(footerLanguage["f-col-1-menu-item-3"])}</Link>
                </li>
              </ul>
        </div>
        <div>
          <p className=" text-white text-[12px] tracking-[.10em] uppercase mb-4 boder-heading-style relative">{t(footerLanguage["support"])}</p>
            <ul className=" text-white">
            <li className="mb-2">
                  <Link href="/">{t(footerLanguage["f-col-2-menu-item-1"])}</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">{t(footerLanguage["f-col-2-menu-item-2"])}</Link>
                </li>
              
              </ul>
        </div>
      </div>

      <div className="inline-grid sm:flex gap-6 justify-between items-center mx-auto w-full pt-10 border-t-[1px] border-[#ffffff3b]">
        <div>
          <Link href="/">
            {" "}
            <Image
              src="/img/footer-logo.svg"
              width={90}
              height={20}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="text-[12px] font-[400] text-white tracking-[.10em]">
        {t(footerLanguage["copyright"])}
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 text-sm text-white">
            <li>
              <Link href="/"><Image
              src="/img/fb-footer.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            /></Link>
            </li>
            <li>
              <Link href="/"><Image
              src="/img/instagram-footer.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            /></Link>
            </li>
            <li>
              <Link href="/"><Image
              src="/img/youtube-icon.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            /></Link>
            </li>
            <li>
              <Link href="/"><Image
              src="/img/twitter-footer.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
