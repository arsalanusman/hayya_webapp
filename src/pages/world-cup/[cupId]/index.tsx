import SimpleBanner from "@/components/ui/simple-banner";
import TopBar from "@/components/ui/top-bar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import eventDtlImg from "../../../../public/img/02.png";
import calendar from "../../../../public/img/calendar.svg";
import clock from "../../../../public/img/clock.svg";
import location from "../../../../public/img/location.svg";
import { useRouter } from "next/navigation";

const WorldCupById = () => {
    const Router = useRouter()
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
          <div className="bg-[#F6F6F6] px-8 py-10 rounded-2xl">
            <button className="text-[#881A38] ml-auto block inria-serif-font text-[28px]" onClick={()=>Router.push('/world-cup')}>Back</button>
            <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">Event Information</p>
            <div className="sm:grid block grid-cols-12 sm:gap-y-0 gap-y-5 gap-x-10 mb-5">
              <div className="sm:col-span-4 col-span-12">
                <Image src={eventDtlImg} alt="eventDtlImg" className="w-full sm:mb-0 mb-5" />
              </div>
              <div className="lg:col-span-4 sm:col-span-8 col-span-12 inria-serif-font">
                <div>
                  <h3 className="text-[#881A38] mb-10 text-[22px]">
                    Football World Cup 2022
                  </h3>
                  <p className="mb-3 text-[22px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <ul className="px-6 text-[22px]">
                    <li className="flex items-center gap-3 mb-2">
                      <Image src={calendar} alt="calendar" />
                      <span>24th- December-2023</span>
                    </li>
                    <li className="flex items-center gap-3 mb-2">
                      <Image src={clock} alt="clock" />
                      <span>08:00 PM</span>
                    </li>
                    <li className="flex items-center gap-3 mb-2">
                      <Image src={location} alt="location" />
                      <span>Doha Qatar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>  
            <div>
              <h3 className="text-[#881A38] mb-10 inria-serif-font text-[28px]">Select Session</h3>
              <div className="grid gap-y-4">
                <div>
                  <a className="card session-img-shape bg-[url(/img/session-img-1.png)] bg-no-repeat bg-cover w-full min-h-[164px] text-white block py-4 px-8">
                    <h4 className="text-[28px] font-bold">Session Day 1</h4>
                    <h5 className="text-[18px] font-bold">DOHA QATAR</h5>
                    <p className="text-[18px] font-bold">8th August 2023</p>
                  </a>
                </div>
                <div>
                  <a className="card session-img-shape bg-[url(/img/session-img-2.png)] bg-no-repeat bg-cover w-full min-h-[164px] text-white block py-4 px-8">
                  <h4 className="text-[28px] font-bold">Session Day 1</h4>
                    <h5 className="text-[18px] font-bold">DOHA QATAR</h5>
                    <p className="text-[18px] font-bold">8th August 2023</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorldCupById;