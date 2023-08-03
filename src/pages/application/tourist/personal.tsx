"use Client";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import "react-phone-number-input/style.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "../../../lib/utils"
import PhoneInput from 'react-phone-number-input'


import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";

interface InformationTabProps {
  isActive: (e: any) => void; // A function that receives an event and returns void
  isValidate: (e: any) => void;
  success: boolean;
  isSuccess: (e: any) => void;
}

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const Personal:  React.FC<InformationTabProps> = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
  { isActive, isValidate, success, isSuccess  }
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
    
  

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [value, setValue] = useState<string>();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPassport, setSelectedPassport] = useState(null);
  const [applyForVerification, setApplyForVerification] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      applyVerfication(file, selectedPassport);
    } else {
      setSelectedFile(null);
      alert(tr(x.PERSONAL_INFO_TOURIST_HINTS_BROWSE_FOR_PIC_HINT));
    }
  };

  const handlePassportChange = (event: any) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedPassport(file);
      applyVerfication(selectedFile, file);
    } else {
      setSelectedPassport(null);
      alert(tr(x.PERSONAL_INFO_TOURIST_HINTS_BROWSE_FOR_PIC_HINT));
    }
  };


  const applyVerfication = (file:any,passport:any) => {
    setTimeout(()=>{
      (file && passport) ? setApplyForVerification(true) : setApplyForVerification(false)
      isValidate(true)
      isSuccess(false)
    },1000)
   }

  const handleReset = () => {
    setSelectedFile(null);
    applyVerfication(selectedFile, selectedPassport);
  };

  const handlePassportReset = () => {
    setSelectedPassport(null);
    applyVerfication(selectedFile, selectedPassport);
  };

    return   <>  
    
          

              <div className="flex gap-2 mb-6">
                <Image
                  src="/img/Stars.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className=" "
                />
                <p className="text-[18px] font-[700]"> {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_PERSONAL_PHOTO)}</p>
              </div>

      <div className="flex items-center space-x-2 pb-8">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className=" text-[14px] font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {tr(x.PERSONAL_INFO_TOURIST_LABELS_REVIEW_CHECKBOX)}{" "}
          <Link href="/" className="underline font-[500]">
            {tr(x.PERSONAL_INFO_TOURIST_LABELS_REVIEW_CHECKBOX_LINK)}{" "}
          </Link>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[50%_minmax(40%,_1fr)] items-center justify-between gap-4">
        <div className={"" + (selectedFile ? " uploaded" : "")}>
          <Label className="text-[14px] font-[400]" htmlFor="picture">
          {tr(x.PERSONAL_INFO_TOURIST_LABELS_UPLOAD_PERSONAL_INFO_PHOTO)}
          </Label>
          <div className="relative pt-2">
            {!selectedFile ? (
            <div className="rounded-2xl py-3 px-4 h-auto cursor-pointer border border-[#cc] flex justify-between items-center" >
              <Input
                 className="border-0 p-0 h-auto"
                id="picture"
                type="file"
                onChange={handleFileChange}
              />
              <Image
              src="/img/Folder_Upload.svg"
              width={24}
              height={24}
              alt="Picture of the author"
              className=""
            />
            </div>
            ) : (
              <div className="relative">
                <p className="rounded-2xl p-4 h-auto cursor-pointer border border-[#dbdbdb] text-[14px] flex items-center gap-2   ">
                  <Image
                    src="/img/yes.png"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=" "
                  />
                  <p className="truncate max-w-[110px] sm:max-w-[250px]">
                    {" "}
                    {selectedFile["name"]}
                  </p>
                </p>
                <button
                  className="absolute right-5 top-4"
                  onClick={handleReset}
                >
                  X
                </button>
              </div>
            )}
          </div>
          <p className="text-[#9B9A9A] text-[12px] mt-1">
          {tr(x.PERSONAL_INFO_TOURIST_HINTS_BROWSE_FOR_PIC_HINT)}
         
          </p>
        </div>

        {applyForVerification && (
          <div className="flex items-center justify-center gap-2">
            <div>
              <Image
                src="/img/client01.png"
                width={120}
                height={111}
                alt="Picture of the author"
                className=" rounded-2xl"
              />
            </div>
            <div className="bg-[#FAF3DD] rounded-2xl p-4 flex items-center gap-3">
              <Image
                src="/img/yes-s.svg"
                width={17}
                height={16}
                alt="Picture of the author"
                className=""
              />
              <p className="text-[14px]">The image is OK</p>
            </div>
          </div>
        )}
      </div>

      <div className="border border-[#dbdbdb] my-4"></div>

      <div className="flex gap-2 mb-6">
        <Image
          src="/img/Stars.svg"
          width={20}
          height={20}
          alt="Picture of the author"
          className=" "
        />
        <p className="text-[18px] font-[700]">{tr(x. PERSONAL_INFO_TOURIST_LABELS_IDENTIFICATION_DOCUMENT)}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-[14px] font-[400]" htmlFor="picture">
         
            {tr(x.PERSONAL_INFO_TOURIST_LABELS_UPLOAD_PASSPORT_FRONT_PAGE)}
          </Label>
          <div className="relative">
            {!selectedPassport ? (
              <div className="rounded-2xl py-3 px-4 h-auto cursor-pointer border border-[#cc] flex justify-between items-center" >
                <Input
                  className="border-0 p-0 h-auto"
                  id="picture"
                  type="file"
                  onChange={handlePassportChange}
                 
                />
                <Image
                  src="/img/Folder_Upload.svg"
                  width={24}
                  height={24}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            ) : (
              <div className="relative">
                <p className="rounded-2xl p-4 h-auto cursor-pointer border border-[#dbdbdb] text-[14px] flex items-center gap-2   ">
                  <Image
                    src="/img/yes.png"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=" "
                  />
                  <p className="truncate max-w-[110px] sm:max-w-[250px]">
                    {" "}
                    {selectedPassport["name"]}
                  </p>
                  <button
                    className="absolute right-5 top-4"
                    onClick={handlePassportReset}
                  >
                    X
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <Select>
            <Label htmlFor="email" className="text-[14px] font-[400] ">
            {tr(x.PERSONAL_INFO_TOURIST_LABELS_PASSPORT_TYPE)}
            </Label>
            <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
              <SelectValue placeholder="Choose type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Tourist Entry (A1)</SelectItem>
              <SelectItem value="2">GCC Resident Entry (A2)</SelectItem>
              <SelectItem value="3">
                Entry with ETA (A3) (Holder of Schengen, USA, UK Visa/Residency)
              </SelectItem>
              <SelectItem value="4">
                Entry for Companion of the GCC Citizen (A4){" "}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {!applyForVerification && (
        <div className="bg-[#FAF3DD] border border-[#D2D2D2] rounded-2xl flex items-center gap-3 py-3 px-6 mt-4">
          <Image
            src="/img/explanation.svg"
            width={16}
            height={17}
            alt="Picture of the author"
            className=""
          />
          <p>
          {tr(x.PERSONAL_INFO_TOURIST_MESSAGES_INFO_AFTER_UPLOAD_ID_NOTE)}
           
          </p>
        </div>
      )}

      {applyForVerification && (
        <>
          <div className="bg-[#FAF3DD] border border-[#D2D2D2] rounded-2xl flex items-center gap-3 py-3 px-6 my-4">
            <Image
              src="/img/explanation.svg"
              width={16}
              height={17}
              alt="Picture of the author"
              className=""
            />
            <p className="text-[14px] font-[600]">
              Kindly re-check the auto-filled fields before proceeding,
              otherwise it might get rejected.
            </p>
          </div>

          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  Passport number
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Number"
                  className="p-6 rounded-2xl mt-2"
                />
              </div>
            </div>
            <div className=" grid">
              <Popover>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  Expiry date
                </Label>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "p-6 rounded-2xl mt-2 justify-between text-left font-normal",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Select>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  Issuing country
                </Label>
                <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
                  <SelectValue placeholder="Select the country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Tourist Entry (A1)</SelectItem>
                  <SelectItem value="2">GCC Resident Entry (A2)</SelectItem>
                  <SelectItem value="3">
                    Entry with ETA (A3) (Holder of Schengen, USA, UK
                    Visa/Residency)
                  </SelectItem>
                  <SelectItem value="4">
                    Entry for Companion of the GCC Citizen (A4){" "}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  Nationality
                </Label>
                <SelectTrigger className="mt-1.5 p-6 rounded-2xl">
                  <SelectValue placeholder="Select the Nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Business meeting </SelectItem>
                  <SelectItem value="2">Convention participation </SelectItem>
                  <SelectItem value="3"> Event participation</SelectItem>
                  <SelectItem value="4">Friend visit </SelectItem>
                  <SelectItem value="5"> Heritage tourism</SelectItem>
                  <SelectItem value="6">Job seeker </SelectItem>
                  <SelectItem value="7">Leisure </SelectItem>
                  <SelectItem value="8">Medical care </SelectItem>
                  <SelectItem value="9">Shopping </SelectItem>
                  <SelectItem value="10">Sports event </SelectItem>
                  <SelectItem value="11">Wedding party </SelectItem>
                  <SelectItem value="12"> Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="border border-[#dbdbdb] my-4"></div>

          <div className="flex gap-2 mb-6">
            <Image
              src="/img/Stars.svg"
              width={20}
              height={20}
              alt="Picture of the author"
              className=" "
            />
            <p className="text-[18px] font-[700]">Personal information</p>
          </div>

          <RadioGroup defaultValue="option-one" className="flex gap-6 my-8">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Female</Label>
            </div>
          </RadioGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                First name
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter name"
                className="p-6 rounded-2xl mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                Last name
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Last name"
                className="p-6 rounded-2xl mt-2"
              />
            </div>
          </div>
          <div className="my-6">
            <Label htmlFor="email" className="text-[14px] font-[400] ">
              Second name (optional)
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter name"
              className="p-6 rounded-2xl mt-2"
            />
          </div>
          <div className="my-6">
            <Label htmlFor="email" className="text-[14px] font-[400] ">
              Third name (optional)
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter name"
              className="p-6 rounded-2xl mt-2"
            />
          </div>
          <div className="my-6">
            <Label htmlFor="email" className="text-[14px] font-[400] ">
              Fourth name (optional)
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter name"
              className="p-6 rounded-2xl mt-2"
            />
          </div>
          <div className="border border-[#dbdbdb] my-4"></div>
          <div className="flex gap-2 mb-1">
            <Image
              src="/img/Stars.svg"
              width={20}
              height={20}
              alt="Picture of the author"
              className=" "
            />
            <p className="text-[18px] font-[700]">Contact information</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="my-4">
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                Phone number
              </Label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                defaultCountry="QA"
                international
                className="p-3 px-5 rounded-2xl mt-2 border border-[#dbdbdb] focus:outline-none text-[14px]"
                onChange={setValue}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                Emergency contact name
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter name"
                className="p-6 rounded-2xl mt-2"
              />
            </div>
            <div className="">
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                Emergency contact phone number
              </Label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                defaultCountry="QA"
                international
                className="p-3 px-5 rounded-2xl mt-2 border border-[#dbdbdb] focus:outline-none text-[14px]"
                onChange={setValue}
              />
            </div>
          </div>

          {success && (
            <div className="bg-[#FAF3DD] border border-[#D2D2D2] rounded-2xl flex items-center gap-3 py-3 px-6 my-4">
              <Image
                src="/img/yes.png"
                width={16}
                height={17}
                alt="Picture of the author"
                className=""
              />
              <p className="text-[14px] font-[600]">
                Your ID has been validate!
              </p>
            </div>
          )}
        </>
      )}
    </>
  
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default Personal;
