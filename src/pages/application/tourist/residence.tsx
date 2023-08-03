"use client";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";

interface InformationTabProps {
  isActive: (e: any) => void; // A function that receives an event and returns void
}

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const Residence:  React.FC<InformationTabProps> = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
  { isActive}
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  const countryList: any = [
    { value: "USA", label: "United States of America" },
    { value: "CAN", label: "Canada" },
    { value: "UK", label: "United Kingdom" },
  ];

  const residencyOptions: any = {
    USA: [
      { value: "NY", label: "New York" },
      { value: "CA", label: "California" },
    ],
    UK: [
      { value: "LON", label: "London" },
      { value: "MAN", label: "Manchester" },
    ],
    // Add residency options for other countries as needed...
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedResidency, setSelectedResidency] = useState("");
  const [
    residencyOptionsForSelectedCountry,
    setResidencyOptionsForSelectedCountry,
  ] = useState([]);
  const [citizenship, setCitizenship] = useState("no");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCountryChange = (event: any) => {
    const selectedCountryValue = event;
    setSelectedCountry(selectedCountryValue);

    if (selectedCountryValue in residencyOptions) {
      setResidencyOptionsForSelectedCountry(
        residencyOptions[selectedCountryValue]
      );
      setSelectedResidency("");
    } else {
      setResidencyOptionsForSelectedCountry([]);
    }
  };

  const handleResidencyChange = (event: any) => {
    setSelectedResidency(event);
  };

  const handlerCitizenChange = (event: any) => {
    setCitizenship(event);
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      isActive(true);
    } else {
      setSelectedFile(null);
      alert("Only JPEG and PNG files are allowed.");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <div className="flex gap-2 mb-6">
        <Image
          src="/img/Stars.svg"
          width={20}
          height={20}
          alt="Picture of the author"
          className=" "
        />
        <p className="text-[18px] font-[700]"> {tr(x.RESIDENCE_INFO_TITLE)} </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Select onValueChange={(value) => handleCountryChange(value ?? "")}>
            <Label htmlFor="countryOfBirth" className="text-[14px] font-[400]">
            {tr(x.RESIDENCE_INFO_TOURIST_LABELS_COUNTRY_OF_BIRTH)}
            </Label>
            <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
              <SelectValue placeholder="Select the Country of birth" />
            </SelectTrigger>
            <SelectContent>
              {countryList.map((country: any) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          {residencyOptionsForSelectedCountry.length > 0 && (
            <Select
              onValueChange={(value) => handleResidencyChange(value ?? "")}
            >
              <Label
                htmlFor="countryOfResidency"
                className="text-[14px] font-[400]"
              >
                Country of residency
              </Label>
              <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
                <SelectValue placeholder="Select the Country of residency" />
              </SelectTrigger>
              <SelectContent>
                {residencyOptionsForSelectedCountry.map((residency: any) => (
                  <SelectItem key={residency.value} value={residency.value}>
                    {residency.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="my-4">
          <Label htmlFor="email" className="text-[14px] font-[400] ">
          {tr(x. RESIDENCE_INFO_TOURIST_LABELS_HAVE_PREV_CITIZENSHIP)}
          </Label>
          <RadioGroup
            defaultValue="no"
            onValueChange={(e) => handlerCitizenChange(e)}
            className="flex gap-6 my-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes"> {tr(x.SHARED_LABELS_YES )}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">{tr(x.SHARED_LABELS_NO )}</Label>
            </div>
          </RadioGroup>
        </div>

        {selectedResidency && (
          <div className="my-4">
            <Select>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                Nationality
              </Label>
              <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
                <SelectValue placeholder="Select the Nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Tourist Entry (A1)</SelectItem>
                <SelectItem value="2">GCC Resident Entry (A2)</SelectItem>
                <SelectItem value="3">Entry with ETA (A3)</SelectItem>
                <SelectItem value="4">
                  Entry for Companion of the GCC Citizen (A4){" "}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {citizenship == "yes" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 pb-8">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className=" text-[14px] font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have reviewed the{" "}
              <Link href="/" className="underline font-[500]">
                instructions to upload GCC resident permit docment
              </Link>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-[14px] font-[400]" htmlFor="picture">
              Upload GCC resident permit document
            </Label>
            <div className="relative">
              {!selectedFile ? (
                <Input
                  className="rounded-2xl py-4 h-auto cursor-pointer"
                  id="picture"
                  type="file"
                  onChange={handleFileChange}
                />
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
                    x
                  </button>
                </div>
              )}
            </div>
            <p className="text-[#9B9A9A] text-[12px]">
              Only image file (.jpg or .jpeg) are allowed. Max file size 1MB.
              Only the following special characters are allowed in the file name
              . - _
            </p>
          </div>
        </div>
      )}

      {selectedFile && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="my-4">
            <Select>
              <Label
                htmlFor="email"
                className="text-[14px] font-[400] flex gap-1"
              >
                Job title
                <Image
                  src="/img/Help.svg"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                  className=""
                />
              </Label>
              <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
                <SelectValue placeholder="Biology teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Tourist Entry (A1)</SelectItem>
                <SelectItem value="2">GCC Resident Entry (A2)</SelectItem>
                <SelectItem value="3">Entry with ETA (A3)</SelectItem>
                <SelectItem value="4">
                  Entry for Companion of the GCC Citizen (A4){" "}
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-[#9B9A9A] text=[10px] mt-2">
              Select job title as on the ID document
            </p>
          </div>
          <div className="bg-[#FAF3DD] border border-[#D2D2D2] rounded-2xl grid grid-cols-[10%_minmax(90%,_1fr)] py-3 px-6 my-4">
            <div>
              <Image
                src="/img/Union.svg"
                width={19}
                height={19}
                alt="Picture of the author"
                className=""
              />
            </div>
            <div>
              <p className="text-[16px] font-[600] mb-2">Job Title</p>
              <ul className="text-[14px] ">
                <li>
                  {" "}
                  If the Job Title does not match the Job Title in your
                  Residency Permit you will not be allowed to enter Qatar
                </li>
                <li>
                  If you do not find your Job Title please use another Hayya
                  category
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default Residence;
