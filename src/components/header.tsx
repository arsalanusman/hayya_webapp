import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import enHeader from "../../public/locales/en/header.json";
import arHeader from "../../public/locales/ar/header.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


export default function Header() {
  const router = useRouter();
  const { t } = useTranslation('footer');
  console.log(router,'router')
  const findPath = router?.asPath?.split('/')

  const footerLanguage:any = router.locale === 'ar' ? arHeader : enHeader;
  return (
    <div className={"container-fluid mx-auto px-4 sm:px-20 p-4  grid grid-cols-[20%_minmax(20%,_1fr)]  justify-between items-center border-b-[1px] border-[#ffffff3b] header   " + (router.pathname ? router.pathname.replace('/','') : '') + (findPath.includes('application') ? ' application' : '')}>
      <div className="">
        <Link href="/">
          {" "}
          <Image
            src="/img/logo_old.png"
            width={122}
            height={28}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="flex items-end justify-end">
        <div className="xl:block 2xl:block lg:block md:block  sm:block hidden">
        <ul className=" flex justify-between items-center gap-3 text-sm text-white">
          <li className="hover:text-[#d5cc65] " >
            <Link href={'/'}>{t(footerLanguage["menu-item-1"])}</Link>
          </li>
          <li className="flex justify-center align-middle ">
            <Image
              src="/img/Stars.svg"
              width={8}
              height={8}
              alt="Picture of the author"
            />
          </li>
          {/* <li className="hover:text-[#d5cc65] ">
            <Link href={'/faq'}>{t(footerLanguage["menu-item-2"])}</Link>
          </li> */}
          <li className="hover:text-[#d5cc65] ">
            <Link href="/profile">{t(footerLanguage["menu-item-3"])}</Link>
          </li>
          {/* <li className="flex justify-center align-middle ">
            <Image
              src="/img/Stars.svg"
              width={8}
              height={8}
              alt="Picture of the author"
            />
          </li> */}
          <li className="bg-[#d5cc65]  gap-2 text-black p-3 transition delay-[3000ms] duration-300 ease-in-out  font-semibold rounded-2xl 	hover:bg-[#222222] hover:text-[#fff]">
            <Link href={'/auth/login'} className="p-3 pl-8 pr-8">{t(footerLanguage["menu-item-0"])}</Link>
          </li>
        </ul>
        </div>
        <div className="sm:invisible mobile_menu">
          <Sheet >
            <SheetTrigger> 
              <Image
              src="/img/menu-icon.svg"
              width={16}
              height={16}
              alt="Picture of the author"
            />
          </SheetTrigger>
        
            <SheetContent>
              <SheetHeader>
               
                <SheetDescription>
                <ul className="text-sm text-black text-left mt-6">
                    <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                      <Link href="/">{t(footerLanguage["menu-item-1"])}</Link>
                    </li>
                    <li className="hover:text-[#d5cc65] ">
                      <Link href="/profile">{t(footerLanguage["menu-item-2"])}</Link>
                    </li>
                    <li className="hover:text-[#d5cc65] ">
                      <Link href="/profile">{t(footerLanguage["menu-item-3"])}</Link>
                    </li>
                    {/* <li className="flex justify-center align-middle">
                    <Image
                      src="/img/Stars.svg"
                      width={8}
                      height={8}
                      alt="Picture of the author"
                    />
                  </li> */}
                  <br></br>
                    <li className="bg-[#d5cc65] text-center text-black p-3 transition delay-[3000ms] duration-300 ease-in-out  font-semibold rounded-2xl 	hover:bg-[#222222] hover:text-[#fff]">
                    <Link href="/auth/login" className="p-3 pl-8 pr-8">{t(footerLanguage["menu-item-0"])}</Link>
                  </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
