"use Client";
import { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const Summary: React.FC<InformationTabProps> = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
  { isActive }
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  const [editStep, setEditStep] = useState(0);
  const [editsForm, setEditForm] = useState({
    type: true,
    category: true,
    purpouse: true,
    specify: true,
    personalPhoto: true,
    passport: true,
    passportNumber: true,
    passportType: true,
    expiryDate: true,
    issuingCountry: true,
    nationality: true,
    gender: true,
    firstName: true,
    lastName: true,
    phone: true,
    emergencyNumber: true,
    emergencyPhone: true,
    countryBirth: true,
    countryResidency: true,
    citizen: true,
    nationalityRe: true,
    gccResident: true,
    jobTitle: true,
    stay: true,
    accomo: true,
  });

  const handlerEditForm = (value: any) => {
    setEditForm((prevEditForm: any) => {
      const updatedEditForm: any = { ...prevEditForm };
      value.forEach((key: any) => {
        updatedEditForm[key] = !prevEditForm[key];
      });
      return updatedEditForm;
    });
  };

  return (
    <>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>{tr(x.APPLICATION_INFO_TITLE)}</AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400]">

                  {tr(x.APPLICATION_INFO_LABELS_HAYYA_TYPE)}
                </Label>
                <Input
                  type="email"
                  disabled={editsForm.type}
                  defaultValue="Tourist (A)"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  {tr(x.APPLICATION_INFO_TOURIST_LABELS_CATEGORY)}

                </Label>
                <Input
                  type="email"
                  disabled={editsForm.category}
                  defaultValue="Tourist Entry (A1)"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_INFO_TOURIST_LABELS_PURPOSE_OF_VISIT)}
                </Label>
                <Input
                  type="email"
                  disabled={editsForm.purpouse}
                  defaultValue="Other"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_INFO_TOURIST_LABELS_SPECIFY_PURPOSE_OF_VISIT)}
                </Label>
                <Input
                  type="email"
                  disabled={editsForm.specify}
                  defaultValue="Lorem ipsum dolor sit amet"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="gap-4 mt-4">
              <div className="w-full">
                <Button
                  variant="outline"
                  className="w-full p-6 rounded-2xl border-[#000] flex gap-2"
                  onClick={(e) => {
                    handlerEditForm([
                      "type",
                      "category",
                      "purpouse",
                      "specify",
                    ]);
                    setEditStep(editStep == 1 ? 0 : 1);
                  }}
                >
                  <Image
                    src="/img/edit.svg"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  {editStep === 1 ? (
                    <p>Save Application information  </p>
                  ) : (
                    <p> {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_EDIT_APP_INFO)}</p>
                  )}
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_DOCUMENT_INFO)} </AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_PERSONAL_PHOTO)}
                </Label>
                <div className="flex items-center gap-2">
                  <Image
                    src="/img/yes.png"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  <Input
                    type="email"
                    disabled
                    value="Name_surnamePic.jpg"
                    className="p-0 rounded-2xl border-0 disable"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_PASSPORT_FRONT_PAGE)}
                </Label>
                <div className="flex items-center gap-2">
                  <Image
                    src="/img/yes.png"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  <Input
                    type="email"
                    disabled
                    value="Name_surnamePassport.jpg"
                    className="p-0 rounded-2xl border-0 disable"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_PASSPORT_NUMBER)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="123456789"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_PASSPORT_TYPE)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Lorem ipsum"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_EXPIRY_DATE)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="11/01/2024"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_ISSUING_COUNTRY)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="United States of America"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_ISSUING_COUNTRY)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="United States of America"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_NATIONALITY)}

                </Label>
                <Input
                  type="email"
                  disabled
                  value="United States of America"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  Gender

                </Label>
                <Input
                  type="email"
                  disabled
                  value="Female"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_FIRST_NAME)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Nadira"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_LAST_NAME)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Red"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[16px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_CONTACT_INFORMATION)}
                </Label>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_PHONE_NUMBER)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="+974 000 00 00"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_EMERGENCY_CONTACT_NAME)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Lorem ipsum dolor "
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.PERSONAL_INFO_TOURIST_LABELS_EMERGENCY_CONTACT_PHONE)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="+974 000 00 00 "
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="gap-4 mt-4">
              <div className="w-full">
                <Button
                  variant="outline"
                  className="w-full p-6 rounded-2xl border-[#000] flex gap-2"
                >
                  <Image
                    src="/img/edit.svg"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  <p>{tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_EDIT_APP_INFO)}</p>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_RESIDENCE_INFO)} </AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.RESIDENCE_INFO_TOURIST_LABELS_COUNTRY_OF_BIRTH)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="State name"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.RESIDENCE_INFO_TOURIST_LABELS_COUNTRY_OF_RESIDENCY)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="State name"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_PREV_OTHER_CITIZEN)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Yes"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.RESIDENCE_INFO_TOURIST_LABELS_NATIONALITY)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="United Kingdom"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.RESIDENCE_INFO_TOURIST_LABELS_UPLOAD_GCC_RESIDENT_PERMIT_DOC)}
                </Label>
                <div className="flex items-center gap-2">
                  <Image
                    src="/img/yes.png"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  <Input
                    type="email"
                    disabled
                    value="Permit.jpg"
                    className="p-0 rounded-2xl border-0 disable"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.RESIDENCE_INFO_TOURIST_LABELS_JOB_TITLE)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Biology teacher"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="gap-4 mt-4">
              <div className="w-full">
                <Button
                  variant="outline"
                  className="w-full p-6 rounded-2xl border-[#000] flex gap-2"
                >
                  <Image
                    src="/img/edit.svg"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  <p>{tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_EDIT_APP_INFO)}</p>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>  {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_ACCOMMODATION)} </AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.ACCOMMODATION_INFO_TOURIST_LABELS_WHERE_ARE_YOU_STAYING)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Other accomodation"
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[14px] font-[400] ">

                  {tr(x.ACCOMMODATION_INFO_TITLE)}
                </Label>
                <Input
                  type="email"
                  disabled
                  value="Lorem ipsum dolor "
                  className="p-0 rounded-2xl border-0 disable"
                />
              </div>
            </div>
            <div className="gap-4 mt-4">
              <div className="w-full">
                <Button
                  variant="outline"
                  className="w-full p-6 rounded-2xl border-[#000] flex gap-2"
                >
                  <Image
                    src="/img/edit.svg"
                    width={16}
                    height={16}
                    alt="Picture of the author"
                    className=""
                  />
                  <p>{tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_EDIT_APP_INFO)}</p>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="bg-[#FAF3DD] border border-[#D2D2D2] rounded-2xl flex gap-4  py-6 px-6 mt-4">
        <div>
          <Image
            src="/img/Union.svg"
            width={16}
            height={17}
            alt="Picture of the author"
            className=""
          />
        </div>
        <div>
          <p className="font-[600] text-[14px]">

            {tr(x.APPLICATION_SUMMARY_TOURIST_MESSAGES_INFO_GENERAL_ENTRY_PERMIT_TITLE)}
          </p>
          <p className="font-[400] text-[14px] my-3">

            {tr(x.APPLICATION_SUMMARY_TOURIST_MESSAGES_INFO_GENERAL_ENTRY_PERMIT_DESCRIPTION_SUMMARY)}
          </p>
          <ul className="font-[400] text-[14px] list-disc pl-3">
            <li className="mb-1"> {tr(x.APPLICATION_SUMMARY_TOURIST_MESSAGES_INFO_GENERAL_ENTRY_PERMIT_DESCRIPTION_POINT_1)}</li>
            <li className="mb-1">{tr(x.APPLICATION_SUMMARY_TOURIST_MESSAGES_INFO_GENERAL_ENTRY_PERMIT_DESCRIPTION_POINT_2)}</li>
            <li className="mb-1">{tr(x.APPLICATION_SUMMARY_TOURIST_MESSAGES_INFO_GENERAL_ENTRY_PERMIT_DESCRIPTION_POINT_3)}</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-2 py-6">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className=" text-[14px] font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_I_HAVE_READ_TERMS_DESCRIPTION)}
          {" "}
          <Link href="/" className="underline font-[500]">
            {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_I_HAVE_READ_TERMS_LINK_TERMS_OF_USE)}
          </Link>
          {" "}
          {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_I_HAVE_READ_TERMS_AND)}
          {" "}
          <Link href="/" className="underline font-[500]">
            {tr(x.APPLICATION_SUMMARY_TOURIST_LABELS_I_HAVE_READ_TERMS_PRIVACY_POLICY)}
          </Link>
        </label>
      </div>
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

export default Summary;
