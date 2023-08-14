import SimpleBanner from "@/components/ui/simple-banner";
import TopBar from "@/components/ui/top-bar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import eventDtlImg from "../../../../public/img/02.png";
import calendar from "../../../../public/img/calendar.svg";
import clock from "../../../../public/img/clock.svg";
import location from "../../../../public/img/location.svg";
import stedium from "../../../../public/img/stadium.png"
import { useRouter } from "next/navigation";

import Backbutton from "@/components/ui/backhomebuuton";
import { useEffect, useState } from "react";
import moment from "moment";

const WorldCupById = ({ event }:any) => {
  const Router = useRouter();

  const [adult,setAdult] = useState(0)
  const [child,setChild] = useState(0)
  const [infant,setInfant] = useState(0)
  const [session,setSession]:any = useState(null)
  const [ticketCategory,setTicketCategory] = useState({})
  const [ticketsInfo, setTicketsInfo] = useState([]);
  const [selectedSessionTickets, setSelectedSessionTickets]:any = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Fetch additional data after the component mounts
    async function fetchTicketsInfo() {
      try {
        const response = await fetch(`http://ems-api-dev.microsysx.com/api/eventsession/ticketsinfobyeid/${event.id}`);
        const ticketsData = await response.json();
        setTicketsInfo(ticketsData); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching tickets info:', error);
      }
    }

    fetchTicketsInfo();
  }, []); // The empty array [] as the second argument ensures the effect runs only once after mount

  const handleSessionClick = (selectedSession:any) => {
     setSession(selectedSession);
  };
  
  const handleSelectCategory = (event:any) => {
    console.log(event)
    setSelectedSessionTickets(event)
  }

  return (
    <>
      <Head>
        <title>World Cup</title>
        <link href="/styles/expo.css" rel="stylesheet" />
      </Head>
      {console.log(event,'event')}

      <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
        <Backbutton />
        <div className="bg-white border-solid border-2  border-gray-100 rounded-2xl  mx-0  p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
          <TopBar />
          <SimpleBanner />
         
          <div className="my-10">
            <div className="container">
              <div className="bg-[#F6F6F6] px-8 py-10 rounded-2xl">
                <button
                  className="text-[#881A38] ml-auto  block inria-serif-font text-[28px]"
                  onClick={() => Router.push("/event")}
                >
                  Back
                </button>
                <p className="text-[#881A38] mb-6  text-center md:text-left inria-serif-font text-[28px]">
                  Event Information
                </p>
                <div className="sm:grid block grid-cols-12 sm:gap-y-0 gap-y-5 gap-x-10 mb-5">
                  <div className="sm:col-span-4 col-span-12">
                   {event && event.gallery &&  event.gallery.length ?  <img
                      src={event.gallery[0].mediaUrl}
                      alt="eventDtlImg"
                      className="w-full sm:mb-0 mb-5 rounded-lg"
                    /> : <Image
                      src={eventDtlImg}
                      alt="eventDtlImg"
                      className="w-full sm:mb-0 mb-5"
                    />}
                  </div>
                  <div className="lg:col-span-4 sm:col-span-8 col-span-12 inria-serif-font">
                    <div>
                      <h3 className="text-[#881A38] mb-10  text-[22px]">
                        {event.title}
                      </h3>
                      <p className="mb-3 text-[22px]">
                       {event.summary}
                      </p>
                      <ul className="px-6 text-[22px]">
                        <li className="flex items-center gap-3 mb-2">
                          <Image src={calendar} alt="calendar" />
                          <span>{moment(event.eventStart).format('Do MMMM YYYY')}</span>
                        </li>
                        <li className="flex items-center gap-3 mb-2">
                          <Image src={clock} alt="clock" />
                          <span>{moment(event.eventStart).format('hh:mm A')}</span>
                        </li>
                        <li className="flex items-center gap-3 mb-2">
                          <Image src={location} alt="location" />
                          <span>{event?.venue?.name}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div  className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">
                  <div className="col-span-2">
                  {!success ? 
                  <>
                  <div> 
                      <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                      Session
                      </p>
                      <ul className="grid grid-cols-1   sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {ticketsInfo.length && ticketsInfo.map((item:any,index:any)=>
                            <li  onClick={() => handleSessionClick(item)} key={index} className={"border rounded-md hover:border-4 p-2 bg-white cursor-pointer " + (session && item.id == session['id'] ? "border-4 border-red-900":"border-2")} >
                                <h4 className="text-lg">{item.title}</h4>
                                <p className="text-sm text-slate-400">{moment(item.sessionStart).format('D MMM')} <br /> 
                                  {moment(item.sessionStart).format('hh:mm A')} -{' '}
                                  {moment(item.sessionEnd).format('hh:mm A')}</p>
                            </li>
                          )}
                      </ul>
                  </div>
                  {session && session?.ticketsInfo?.ticketPackages?.length ? 
                  <>
                  <div> 
                      <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                      Ticket Category
                      </p>
                      
                      <ul className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {session?.ticketsInfo?.ticketPackages.map((item:any,index:number)=>
                          <li key={index} onClick={()=>handleSelectCategory(item)} className={"border hover:border-4 rounded-md text-center p-2 bg-white cursor-pointer " + (selectedSessionTickets && item.id == selectedSessionTickets.id ? "border-4 border-red-900":"border-2")}>
                            <h4 className="text-lg">{item.title}</h4>
                            </li>
                          )}
                      </ul>
                  </div>


                  {selectedSessionTickets && 
                  <div> 
                      <p className="text-[#881A38] mb-6 inria-serif-font text-[28px]">
                      Ticket
                      </p>
                      <ul className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {selectedSessionTickets.tickets.length && selectedSessionTickets.tickets.map((item:any,index:number)=>
                            <li key={index} className="border border-2 hover:border-4 grid grid-cols-2 rounded-md text-center p-2 bg-white">
                                <div className="">
                                    <h4 className="text-md">{item.title}</h4>
                                    <p className="text-lg font-bold">{item.price} QAR</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>adult > 0 && setAdult(adult - 1)}>-</button>
                                    <input type="number" className="w-10 text-center border border-gray-300 focus:outline-none" value={adult} />
                                    <button className="px-2 bg-gray-400 text-white focus:outline-none" onClick={()=>setAdult(adult + 1)}>+</button>
                                </div>
                            </li>
                          )}
                      </ul>
                  </div>}
                  </> 
                  : <p>No Tickets Avalable</p>
                  
                }
                </> : <div> <br ></br><h3 className="text-[#881A38] mb-20 mt-20 text-center text-[22px]">
                          Successfully Book you Tickets 
                        </h3><br ></br></div>
                }</div>
                <div><Image src={stedium} alt="stedium"/></div>
              </div>
                <div className="text-center py-5">
                <button onClick={()=>setSuccess(true)} className="bg-[#881A38] text-white py-3 px-[60px] rounded-[20px]">
                    Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context:any) {
  console.log(context,'context')
  // Fetch event details using the provided API endpoint and event ID
  const eventId = context.query.cupId; // Update with the specific event ID
  const response = await fetch(`http://ems-api-dev.microsysx.com/api/event/${eventId}`);
  const event = await response.json();

  return {
    props: {
      event, // Pass the event details as props to the component
    },
  };
}

export default WorldCupById;