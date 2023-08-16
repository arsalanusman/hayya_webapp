import SimpleBanner from "@/components/ui/simple-banner";
import TopBar from "@/components/ui/top-bar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Backbutton from "@/components/ui/backhomebuuton";
import moment from "moment";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// ... (other imports)

const WorldCup = ({ events }: any) => {
  console.log("events", events);
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      {/* ... (head and styling code) */}
      <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#1b123e] to-[#6b57d4] to-100%  mx-auto  h-full w-full ">
        <Backbutton />
        <div className="bg-white border-solid border-2 border-gray-100 rounded-2xl mx-0 p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
          <TopBar />
          <SimpleBanner />

          <div className="flex">
            <div className="flex-1 p-4">
              {" "}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="afghanistan">Afghanistan</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="bahrain">Bahrain</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="chinese-taipei">Chinese Taipei</SelectItem>
                  <SelectItem value="hong-kong">Hong Kong</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="indonesia">Indonesia</SelectItem>
                  <SelectItem value="iran">Iran</SelectItem>
                  <SelectItem value="iraq">Iraq</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="jordan">Jordan</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="kyrgyzstan">Kyrgyzstan</SelectItem>
                  <SelectItem value="lebanon">Lebanon</SelectItem>
                  <SelectItem value="maldives">Maldives</SelectItem>
                  <SelectItem value="myanmar">Myanmar</SelectItem>
                  <SelectItem value="nepal">Nepal</SelectItem>
                  <SelectItem value="north-korea">North Korea</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                  <SelectItem value="palestine">Palestine</SelectItem>
                  <SelectItem value="philippines">Philippines</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="south-korea">South Korea</SelectItem>
                  <SelectItem value="syria">Syria</SelectItem>
                  <SelectItem value="tajikistan">Tajikistan</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="turkmenistan">Turkmenistan</SelectItem>
                  <SelectItem value="united-arab-emirates">
                    United Arab Emirates
                  </SelectItem>
                  <SelectItem value="uzbekistan">Uzbekistan</SelectItem>
                  <SelectItem value="vietnam">Vietnam</SelectItem>
                  <SelectItem value="yemen">Yemen</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 p-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Stadium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lusail-stadium">Lusail Stadium</SelectItem>
                  <SelectItem value="al-bayt-stadium">
                    Al Bayt Stadium
                  </SelectItem>
                  <SelectItem value="al-janoub-stadium">
                    Al Janoub Stadium
                  </SelectItem>
                  <SelectItem value="ahmad-bin-ali-stadium">
                    Ahmad Bin Ali Stadium
                  </SelectItem>
                  <SelectItem value="khalifa-international-stadium">
                    Khalifa International Stadium
                  </SelectItem>
                  <SelectItem value="education-city-stadium">
                    Education City Stadium
                  </SelectItem>
                  <SelectItem value="al-thumama-stadium">
                    Al Thumama Stadium
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 p-4">
              <Popover>
                <PopoverTrigger asChild className="w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "p-3 rounded-1xl  justify-between text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="mr-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* ... (TopBar, SimpleBanner, and other elements) */}
          <div className="sm:grid block my-10 grid-cols-12 gap-x-8">
            {events.length &&
              events.map((event: any) => (
                <Link
                  key={event.id}
                  href={`/event_1/${event.id}`}
                  className="lg:col-span-4 sm:col-span-6 col-span-12"
                >
               
                    {event.gallery && event.gallery.length > 0 ? (
                      <div
                      className="card mb-3 overflow-hidden bg-no-repeat bg-cover sm:bg-bottom bg-center min-h-[236px] rounded-3xl relative"
                        style={{
                          backgroundImage: `url(${event.gallery[0].mediaUrl})`,
                        }}
                      >
                        <div className="absolute bottom-[0rem] px-4 py-3 w-full bg-[#000] bg-opacity-70">
                          <h3 className="text-[24px] text-[#ffffff] font-bold">
                            {event.title}
                          </h3>
                          <p className="text-[#ffffff] text-[14px]">
                            {moment(event.eventStart).format("D MMM")} |{" "}
                            {moment(event.eventStart).format("hh:mm A")} -{" "}
                            {moment(event.eventEnd).format("hh:mm A")}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                      className="card mb-3 overflow-hidden bg-no-repeat bg-cover sm:bg-bottom bg-center min-h-[236px] rounded-3xl relative"
                       style={{ backgroundImage: `url(/img/fallback.png)` }}>
                        <div className="absolute bottom-[0rem] px-4 py-3 w-full bg-[#000] bg-opacity-70">
                          <h3 className="text-[24px] text-[#ffffff] font-bold">
                            {event.title}
                          </h3>
                          <p className="text-[#ffffff] text-[14px]">
                            {moment(event.eventStart).format("D MMM")} |{" "}
                            {moment(event.eventStart).format("hh:mm A")} -{" "}
                            {moment(event.eventEnd).format("hh:mm A")}
                          </p>
                        </div>
                      </div>
                    )}
                  
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const headers = {
    headers: {
      clientType: "web",
    },
  };

  // Fetch events from the API with the specified headers
  const response = await fetch(
    "http://ems-api-dev.microsysx.com/api/event",
    headers
  );
  const data = await response.json();

  return {
    props: {
      events: data, // Pass the events as props to the component
    },
  };
}

export default WorldCup;
