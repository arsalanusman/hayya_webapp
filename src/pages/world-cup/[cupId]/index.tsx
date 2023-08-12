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

import Backbutton from "@/components/ui/backhomebuuton";
import { useState } from "react";

const WorldCupById = () => {
  const Router = useRouter();

  const [adult,setAdult] = useState(0)
  const [child,setChild] = useState(0)
  const [infant,setInfant] = useState(0)
  const [session,setSession] = useState(0)
  const [ticketCategory,setTicketCategory] = useState('')

  return (
    <>
      <Head>
        <title>World Cup</title>
        <link href="/styles/expo.css" rel="stylesheet" />
      </Head>
      <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
        <Backbutton />
        {/* <div className="text-center mx-auto mb-6">
                <Image
                    src="/img/star.svg"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                    className="text-center mx-auto mb-3"
                />
                <p className="text-[26px] font-[500] text-white">Back to Home Page</p>
            </div> */}

        <div className="bg-white border-solid border-2  border-gray-100 rounded-2xl  mx-0  p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
          <TopBar />
          <SimpleBanner />
          <div className="my-10">
            <div className="container">
              <div className="bg-[#F6F6F6] px-8 py-10 rounded-2xl">
                <button
                  className="text-[#881A38] ml-auto block inria-serif-font text-[28px]"
                  onClick={() => Router.push("/world-cup")}
                >
                  Back
                </button>
                <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                  Event Information
                </p>
                <div className="sm:grid block grid-cols-12 sm:gap-y-0 gap-y-5 gap-x-10 mb-5">
                  <div className="sm:col-span-4 col-span-12">
                    <Image
                      src={eventDtlImg}
                      alt="eventDtlImg"
                      className="w-full sm:mb-0 mb-5"
                    />
                  </div>
                  <div className="lg:col-span-4 sm:col-span-8 col-span-12 inria-serif-font">
                    <div>
                      <h3 className="text-[#881A38] mb-10 text-[22px]">
                        Football World Cup 2022
                      </h3>
                      <p className="mb-3 text-[22px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
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
                    <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                     Session
                    </p>
                    <ul className="grid grid-cols-5 gap-4 mb-6">
                        <li className={"border rounded-md hover:border-4 p-2 bg-white cursor-pointer " + (session == 1? "border-4":"border-2")}   onClick={()=>setSession(1)}>
                            <h4 className="text-lg">Day 1</h4>
                            <p className="text-sm text-slate-400">8 Aug <br /> 10:00 - 18:00</p>
                        </li>
                        <li className={"border rounded-md hover:border-4 p-2 bg-white cursor-pointer " + (session == 2? "border-4":"border-2")}   onClick={()=>setSession(2)}>
                            <h4 className="text-lg">Day 1</h4>
                            <p className="text-sm text-slate-400">8 Aug <br /> 10:00 - 18:00</p>
                        </li>
                        <li className={"border rounded-md hover:border-4 p-2 bg-white cursor-pointer " + (session == 3? "border-4":"border-2")}  onClick={()=>setSession(3)}>
                            <h4 className="text-lg">Day 1</h4>
                            <p className="text-sm text-slate-400">8 Aug <br /> 10:00 - 18:00</p>
                        </li>
                    </ul>
                </div>
                <div> 
                    <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                     Ticket Category
                    </p>
                    
                    <ul className="grid grid-cols-5 gap-4 mb-6">
                        <li className={"border hover:border-4 rounded-md text-center p-2 bg-white cursor-pointer " + (ticketCategory == 'general'? "border-4":"border-2")} onClick={()=>setTicketCategory('general')}>
                            <h4 className="text-lg">General</h4>
                        </li>
                        <li className={"border hover:border-4 rounded-md text-center p-2 bg-white cursor-pointer " + (ticketCategory == 'vip'? "border-4":"border-2")}  onClick={()=>setTicketCategory('vip')}>
                            <h4 className="text-lg">VIP</h4>
                        </li>
                    </ul>
                </div>
                <div> 
                    <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                     Ticket
                    </p>
                    <ul className="grid grid-cols-4 gap-4 mb-6">
                        <li className="border border-2 hover:border-4 grid grid-cols-2 rounded-md text-center p-2 bg-white">
                            <div className="">
                                <h4 className="text-md">Adult</h4>
                                <p className="text-lg font-bold">100 QAR</p>
                            </div>
                            <div className="flex items-center">
                                <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>adult > 0 && setAdult(adult - 1)}>-</button>
                                <input type="number" className="w-10 text-center border border-gray-300 focus:outline-none" value={adult} />
                                <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>setAdult(adult + 1)}>+</button>
                            </div>
                        </li>
                        <li className="border border-2 hover:border-4 grid grid-cols-2 rounded-md text-center p-2 bg-white">
                            <div className="">
                                <h4 className="text-md">Child</h4>
                                <p className="text-lg font-bold">50 QAR</p>
                            </div>
                            <div className="flex items-center">
                                <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>child > 0 && setChild(child - 1)}>-</button>
                                <input type="number" className="w-10 text-center border border-gray-300 focus:outline-none" value={child} />
                                <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>setChild(child + 1)}>+</button>
                            </div>
                        </li>
                        <li className="border border-2 hover:border-4 grid grid-cols-2 rounded-md text-center p-2 bg-white">
                            <div className="">
                                <h4 className="text-md">Infant</h4>
                                <p className="text-lg font-bold">0 QAR</p>
                            </div>
                            <div className="flex items-center">
                                <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>infant > 0 && setInfant(infant - 1)}>-</button>
                                <input type="number" className="w-10 text-center border border-gray-300 focus:outline-none" value={infant} />
                                <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>setInfant(infant + 1)}>+</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="text-center py-5">
                <button className="bg-[#881A38] text-white py-3 px-[60px] rounded-[20px]">
                    Checkout</button>
                </div>
                {/* <div>
                  <h3 className="text-[#881A38] mb-10 inria-serif-font text-[28px]">
                    Select Session
                  </h3>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldCupById;
