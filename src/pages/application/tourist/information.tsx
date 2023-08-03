import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";
import { useSelector } from "react-redux";


interface InformationTabProps {
  isActive: (e: any) => void; // A function that receives an event and returns void
  formType: string;
}

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const InformationTab:  React.FC<InformationTabProps>  = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
  { isActive, formType = 'tourist' }  
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
  const dataToSave = useSelector((state:any) => state.data.dataToSave);

  const [type, setType] = useState("");
  const [voucher, setVoucher] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPurpouse, setPurpouseCategory] = useState("");

  const handleCategoryChange = (selectedItem: string) => {
    localStorage.setItem("category", selectedItem);
    setSelectedCategory(selectedItem);
  };

  const handlePurpouseChange = (selectedItem: string) => {
    localStorage.setItem("purpouse", selectedItem);
    setPurpouseCategory(selectedItem);
  };

  const handleTypeChange = (selectedItem: string) => {
    localStorage.setItem("type", selectedItem);
    setType(selectedItem);
  };

  const handleVaucherChange = (selectedItem: string) => {
    setVoucher(selectedItem);
  };



    useEffect(()=>{
        if(type && selectedCategory && selectedPurpouse){
            isActive(true)
        }
    }, [type,selectedCategory,selectedPurpouse])

    return   <>  
        
           <div className="flex gap-2 mb-6">
            <Image
                src="/img/Stars.svg"
                width={20}
                height={20}
                alt="Picture of the author"
                className=" "
              />
              <p className="text-[18px] font-[700]">{tr(x.APPLICATION_INFO_TITLE)}</p>
           </div>
          {formType == 'tourist' && 
          <>
           <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {tr(x.APPLICATION_INFO_LABELS_HAYYA_TYPE)}
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Tourist (A)"
                disabled
                className="p-6 rounded-2xl mt-2 bg-[#f3f3f3] border-[#BABABA]"
                onChange={(e) => handleTypeChange(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Select
                onValueChange={(value) => handleCategoryChange(value ?? "")}
              >
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  {tr(x.APPLICATION_INFO_TOURIST_LABELS_CATEGORY)}
                </Label>
                <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
                  <SelectValue placeholder="Select the category " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tourist_entry">
                    {tr(x.CATEGORY_TOURIST_ENTRY_A1)}
                    Tourist Entry (A1)
                  </SelectItem>
                  <SelectItem value="gcc_resident_entry">
                    {tr(x.CATEGORY_GCC_RESIDENT_ENTRY_A2)}
                  </SelectItem>
                  <SelectItem value="entry_with_eta">
                    {tr(x.CATEGORY_ENTRY_WITH_ETA_A3)}
                  </SelectItem>
                  <SelectItem value="entry_for_companion">
                    {tr(x.CATEGORY_ENTRY_FOR_COMPANION_A4)}{" "}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                onValueChange={(value) => handlePurpouseChange(value ?? "")}
              >
                <Label htmlFor="email" className="text-[14px] font-[400] ">
                  {tr(x.APPLICATION_INFO_TOURIST_LABELS_PURPOSE_OF_VISIT)}
                </Label>
                <SelectTrigger className="mt-1.5 p-6 rounded-2xl">
                  <SelectValue
                    placeholder={tr(
                      x.APPLICATION_INFO_TOURIST_PLACEHOLDER_SELECT_THE_PURPOSE
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business_meeting">
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_BUSINESS_MEETING)}
                  </SelectItem>
                  <SelectItem value="convention_participation">
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_CONVENTION_PARTICIPATION)}
                  </SelectItem>
                  <SelectItem value="event_participation">
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_EVENT_PARTICIPATION)}
                  </SelectItem>
                  <SelectItem value="friend_visit">
                    {" "}
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_FRIEND_VISIT)}
                  </SelectItem>
                  <SelectItem value="heritage_tourism">
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_HERITAGE_TOURISM)}
                  </SelectItem>

                  <SelectItem value="leisure">
                    {" "}
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_LEISURE)}
                  </SelectItem>

                  <SelectItem value="shopping">
                    {" "}
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_SHOPPING)}
                  </SelectItem>
                  <SelectItem value="sports_event">
                    {" "}
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_SPORTS_EVENT)}
                  </SelectItem>
                  <SelectItem value="wedding_party">
                    {" "}
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_WEDDING_PARTY)}
                  </SelectItem>
                  <SelectItem value="other">
                    {" "}
                    {tr(x.DROPDOWN_PURPOSE_OF_VISIT_OTHER)}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </>
         }

         {formType == 'events' && 
          <>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {tr(x.APPLICATION_INFO_LABELS_HAYYA_TYPE)}
              </Label>
              <Input
                type="email"
                id="email"
                placeholder={tr(x.CATEGORY_CONFERENCE_AND_EVENTS_B)}
                className="p-6 rounded-2xl mt-2 bg-[#f3f3f3] border-[#BABABA]"
                disabled
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {tr(x.APPLICATION_INFO_LABELS_VOUCHER_CODE)}
              </Label>
              <Input
                type="text"
                id="voucher_code"
                placeholder="#"
                className="p-6 rounded-2xl mt-2 bg-[#f3f3f3] border-[#BABABA]"
                onChange={(e) => handleVaucherChange(e.target.value)}
              />
              </div>
            </div>
            </>
         }

         
        {formType == 'hayaWithMe' && 
          <>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {tr(x.APPLICATION_INFO_LABELS_HAYYA_TYPE)}
              </Label>
              <Input
                type="email"
                id="email"
                placeholder={tr(x.CATEGORY_HAYYA_WITH_ME_C)}
                className="p-6 rounded-2xl mt-2 bg-[#f3f3f3] border-[#BABABA]"
                disabled
              />
            </div>
          </div>{" "}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-[14px] font-[400] ">
                {tr(x.APPLICATION_INFO_LABELS_VOUCHER_CODE)}
              </Label>
              <Input
                type="text"
                id="voucher_code"
                placeholder="#"
                className="p-6 rounded-2xl mt-2 bg-[#f3f3f3] border-[#BABABA]"
                onChange={(e) => handleVaucherChange(e.target.value)}
              />
            </div>
          </div>
        </>
      }
      {selectedPurpouse == "other" && (
        <>
          <br />
          <Label htmlFor="email" className="text-[14px] font-[400] ">
            {tr(x.APPLICATION_INFO_TOURIST_LABELS_PURPOSE_OF_VISIT)}
          </Label>
          <Textarea
            className="mt-1.5"
            placeholder={tr(
              x.APPLICATION_INFO_TOURIST_LABELS_SPECIFY_PURPOSE_OF_VISIT
            )}
          />
        </>
      )}
      {((selectedCategory && selectedPurpouse) || voucher) && (
        <div className="bg-[#FAF3DD] rounded-2xl p-8 border border-[#D2D2D2] mt-4">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/img/yes.png"
                width={21}
                height={22}
                alt="Picture of the author"
                className=" "
              />
            </div>
            <div className="font-[600] text-[14px]">
              {formType == "hayaWithMe"
                ? tr(
                    x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_YOUR_VOUCHER_CODE_IS_VALID_TITLE
                  )
                : formType == "events"
                ? tr(
                    x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_YOUR_VOUCHER_CODE_IS_VALID_TITLE
                  )
                : tr(
                    x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_TITLE
                  )}
            </div>
          </div>

              {formType == 'hayaWithMe' ?
                <>
                  <div className="text-[14px] my-4 ">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_DESCRIPTION)}</div>
                  <ul className="list-disc pl-6 text-[14px]">
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_1)} </li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_2)}</li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_3)}</li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_4)}</li>
                  </ul>
                  <div className="text-[14px] my-4 ">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_SUMMARY)}</div>
                </>
              :  formType == 'events' ?  
              <>
              <div className="text-[14px] my-4 ">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_DESCRIPTION)}</div>
                <ul className="list-disc pl-6 text-[14px]">
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_1)} </li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_2)}</li>
                </ul>
              </>
              
              :
              <>
               
               <div className="text-[14px] my-4 ">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_DESCRIPTION)}</div>
                  <ul className="list-disc pl-6 text-[14px]">
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_1)} </li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_2)}</li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_3)}</li>
                    <li className="mb-1">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_POINT_4)}</li>
                  </ul>
                  <div className="text-[14px] my-4 ">{tr(x.APPLICATION_INFO_TOURIST_MESSAGES_SUCCESS_READY_TO_START_NOTE_SUMMARY)}</div>
              </>
            }
            </div>
           ) }
         


    </>
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default InformationTab;
