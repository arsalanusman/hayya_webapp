import SimpleBanner from "@/components/ui/simple-banner";
import TopBar from "@/components/ui/top-bar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import eventDtlImg from "../../../public/img/02.png";
import calendar from "../../../public/img/calendar.svg";
import clock from "../../../public/img/clock.svg";
import location from "../../../public/img/location.svg";

const WorldCup = () => {
  return (
    <>
      <Head>
        <title>World Cup</title>
        <link href="/styles/expo.css" rel="stylesheet" />
      </Head>
      <TopBar />
      <SimpleBanner />
      <div className="my-10">
        <div className="container">
          <div className="bg-[#F6F6F6] px-10 py-10 rounded-2xl">
            {/* <div className="px-20 text-[22px] text-center relative text-[#881A38] inline-block mx-auto table before:content-[''] before:md:block before:hidden before:h-[1px] before:lg:w-[286px] before:md:w-[210px] before:bg-[#881A38] before:absolute before:lg:left-[-100%] before:md:left-[-60%] before:top-0 before:bottom-0 before:my-auto after:content-[''] after:md:block after:hidden after:h-[1px] after:lg:w-[286px] after:md:w-[210px] after:bg-[#881A38] after:absolute after:lg:right-[-100%] after:md:right-[-60%] after:top-0 after:bottom-0 after:my-auto">
              Highlighted
            </div> */}
            <div className="px-[3.5rem] mb-6 text-[22px] text-center text-[#881A38] inline-block mx-auto table relative before:content-[''] before:md:block before:hidden before:h-[1px] before:lg:w-[286px] before:md:w-[210px]  before:bg-[#881A38] before:absolute before:lg:left-[-100%] before:md:left-[-60%] before:top-0 before:bottom-0 before:my-auto after:content-[''] after:md:block after:hidden after:h-[1px] after:lg:w-[286px] after:md:w-[210px] after:bg-[#881A38] after:absolute after:lg:right-[-100%] after:md:right-[-60%] after:top-0 after:bottom-0 after:my-auto">
              This Month Event
            </div>
            <div className="sm:grid block grid-cols-12 gap-x-8">
              <Link
                href="/world-cup/1"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/01.png)] bg-no-repeat bg-cover sm:bg-bottom bg-center min-h-[236px] rounded-3xl py-3 relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">Formula F1</h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/world-cup/2"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/02.png)] bg-no-repeat bg-cover  sm:bg-bottom bg-center min-h-[236px] py-3 rounded-3xl relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">
                      World Cup 2023
                    </h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/world-cup/3"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/03.png)] bg-no-repeat bg-cover  sm:bg-bottom bg-center min-h-[236px] py-3 rounded-3xl relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">Asian Games</h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/world-cup/4"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/01.png)] bg-no-repeat bg-cover sm:bg-bottom bg-center min-h-[236px] rounded-3xl py-3 relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">Formula F1</h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/world-cup/5"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/02.png)] bg-no-repeat bg-cover  sm:bg-bottom bg-center min-h-[236px] py-3 rounded-3xl relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">
                      World Cup 2023
                    </h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/world-cup/6"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/03.png)] bg-no-repeat bg-cover  sm:bg-bottom bg-center min-h-[236px] py-3 rounded-3xl relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">Asian Games</h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/01.png)] bg-no-repeat bg-cover sm:bg-bottom bg-center min-h-[236px] rounded-3xl py-3 relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">Formula F1</h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/02.png)] bg-no-repeat bg-cover  sm:bg-bottom bg-center min-h-[236px] py-3 rounded-3xl relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">
                      World Cup 2023
                    </h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="card mb-3 bg-[url(/img/03.png)] bg-no-repeat bg-cover  sm:bg-bottom bg-center min-h-[236px] py-3 rounded-3xl relative">
                  <div className="absolute bottom-[1rem] left-[1rem]">
                    <h3 className="text-[24px] text-[#ffffff] font-bold">Asian Games</h3>
                    <p className="text-[#ffffff] text-[14px]">
                      1st Feb - 4th Feb
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldCup;
