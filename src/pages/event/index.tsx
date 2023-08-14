import SimpleBanner from "@/components/ui/simple-banner";
import TopBar from "@/components/ui/top-bar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Backbutton from "@/components/ui/backhomebuuton";
import moment from "moment";
// ... (other imports)

const WorldCup = ({ events }: any) => {
  return (
    <>
      {/* ... (head and styling code) */}
      <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
        <Backbutton />
        <div className="bg-white border-solid border-2 border-gray-100 rounded-2xl mx-0 p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
          <TopBar />
          <SimpleBanner />

          {/* ... (TopBar, SimpleBanner, and other elements) */}
          <div className="sm:grid block my-10 grid-cols-12 gap-x-8">
            {events.length &&
              events.map((event: any) => (
                <Link
                  key={event.id}
                  href={`/event/${event.id}`}
                  className="lg:col-span-4 sm:col-span-6 col-span-12"
                >
                  <div
                    className="card mb-3  bg-[url(/img/01.png)] overflow-hidden bg-no-repeat bg-cover sm:bg-bottom bg-center min-h-[236px] rounded-3xl relative"
                    // style={{ backgroundImage: `url(${event.gallery[0].mediaUrl})` }}
                  >
                    <div className="absolute bottom-[0rem] px-4 py-3 w-full bg-[#000] bg-opacity-70">
                      <h3 className="text-[24px] text-[#ffffff] font-bold">
                        {event.title}
                      </h3>
                      <p className="text-[#ffffff] text-[14px]">
                        {moment(event.eventStart).format("D MMM")} | 
                        {moment(event.eventStart).format("hh:mm A")} -{" "}
                        {moment(event.eventEnd).format("hh:mm A")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch events from the API
  const response = await fetch("http://ems-api-dev.microsysx.com/api/event");
  const data = await response.json();

  return {
    props: {
      events: data, // Pass the events as props to the component
    },
  };
}

export default WorldCup;
