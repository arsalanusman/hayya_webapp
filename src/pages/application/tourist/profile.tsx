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
import { useState } from "react";
import Image from "next/image";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";

interface InformationTabProps {
  isActive: (e: any) => void; // A function that receives an event and returns void
  formType: string;
}
type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const Profile:  React.FC<InformationTabProps> = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
  { isActive, formType = 'tourist' }
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  const [type, setType] = useState("");
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
        <p className="text-[18px] font-[700]">Personal Photo</p>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-[14px] font-[400] ">
            Hayya type
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Tourist (A)"
            className="p-6 rounded-2xl mt-2 bg-[#f3f3f3] border-[#BABABA]"
            onChange={(e) => handleTypeChange(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Select
            defaultValue={selectedCategory}
            onValueChange={(value) => handleCategoryChange(value ?? "")}
          >
            <Label htmlFor="email" className="text-[14px] font-[400] ">
              Category
            </Label>
            <SelectTrigger className="mt-1.5 p-6 rounded-2xl text-left">
              <SelectValue placeholder="Select the category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tourist_entry">Tourist Entry (A1)</SelectItem>
              <SelectItem value="gcc_resident_entry">
                GCC Resident Entry (A2)
              </SelectItem>
              <SelectItem value="entry_with_eta">
                Entry with ETA (A3) (Holder of Schengen, USA, UK Visa/Residency)
              </SelectItem>
              <SelectItem value="entry_for_companion">
                Entry for Companion of the GCC Citizen (A4){" "}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            defaultValue={selectedPurpouse}
            onValueChange={(value) => handlePurpouseChange(value ?? "")}
          >
            <Label htmlFor="email" className="text-[14px] font-[400] ">
              Purpouse of visit
            </Label>
            <SelectTrigger className="mt-1.5 p-6 rounded-2xl">
              <SelectValue placeholder="Select the purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business_meeting">Business meeting</SelectItem>
              <SelectItem value="convention_participation">
                Convention participation
              </SelectItem>
              <SelectItem value="event_participation">
                Event participation
              </SelectItem>
              <SelectItem value="friend_visit">Friend visit</SelectItem>
              <SelectItem value="heritage_tourism">Heritage tourism</SelectItem>
              <SelectItem value="job_seeker">Job seeker</SelectItem>
              <SelectItem value="leisure">Leisure</SelectItem>
              <SelectItem value="medical_care">Medical care</SelectItem>
              <SelectItem value="shopping">Shopping</SelectItem>
              <SelectItem value="sports_event">Sports event</SelectItem>
              <SelectItem value="wedding_party">Wedding party</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {selectedPurpouse == "other" && (
        <>
          <br />
          <Label htmlFor="email" className="text-[14px] font-[400] ">
            Specify purpouse of visit
          </Label>
          <Textarea className="mt-1.5" placeholder="Type your message here." />
        </>
      )}
      {selectedCategory && selectedPurpouse && (
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
              You are ready to start!
            </div>
          </div>
          <div className="text-[14px] my-4 ">
            Before proceeding please keep this information at hand:
          </div>
          <ul className="list-disc pl-6 text-[14px]">
            <li className="mb-1">Digital photograph of yourself </li>
            <li className="mb-1">
              Valid ID (passport or Qatar ID). For passport holder the validity
              should be at least 6 months.
            </li>
            <li className="mb-1">Details of your onward travel</li>
            <li className="mb-1">
              Hotel booking for the duration of your stay*
            </li>
          </ul>
          <div className="text-[14px] my-4 ">
            * in case someone is hosting you, please be sure they register it on
            the portal
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

export default Profile;
