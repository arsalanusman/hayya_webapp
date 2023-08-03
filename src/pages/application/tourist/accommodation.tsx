"use Client";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

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

const Accommodation:  React.FC<InformationTabProps> = ({ isActive }) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  const [selectedAccomo, setAccomoCountry] = useState("");

  const handlerAccomodationChange = (event: any) => {
    setAccomoCountry(event);
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
        <p className="text-[18px] font-[700]">
          {" "}
          {t(x.ACCOMMODATION_INFO_TITLE)}
        </p>
      </div>

      <div className="my-10">
        <Label htmlFor="email" className="text-[14px] font-[400] ">
          {t(x.ACCOMMODATION_INFO_TOURIST_LABELS_WHERE_ARE_YOU_STAYING)}
        </Label>
        <RadioGroup
          onValueChange={(e) => handlerAccomodationChange(e)}
          className="grid grid-cols-1 sm:grid-cols-2 justify-start gap-6 my-8"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="option-one" />
            <Label htmlFor="option-one">
              {t(x.ACCOMMODATION_INFO_TOURIST_LABELS_OTHER_ACCOMMODATION)}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hosted" id="option-two" />
            <Label htmlFor="option-two">
              {t(x.ACCOMMODATION_INFO_TOURIST_LABELS_HOSTED_BY_FAMILY)}
            </Label>
          </div>
        </RadioGroup>
      </div>

      {selectedAccomo == "other" && (
        <div className="my-10">
          <Label htmlFor="" className="text-[14px] font-[400] ">
            {t(
              x.ACCOMMODATION_INFO_TOURIST_LABELS_SPECIFY_ACCOMMODATION_INFO_NAME
            )}
          </Label>
          <Textarea
            className="mt-2"
            placeholder={t(
              x.ACCOMMODATION_INFO_TOURIST_PLACEHOLDER_SPECIFY_ACCOMMODATION_INFO_NAME
            )}
          />
        </div>
      )}

      {selectedAccomo == "hosted" && (
        <div className="bg-[#FAF3DD] border border-[#D2D2D2] rounded-2xl flex items-baseline gap-4 py-4 px-6 mt-4">
          <div>
            <Image
              src="/img/yes.png"
              width={21}
              height={20}
              alt="Picture of the author"
              className=""
            />
          </div>
          <div>
            <p className="font-[500] mb-2">
              {t(
                x.ACCOMMODATION_INFO_TOURIST_MESSAGES_SUCCESS_YOU_ARE_HOSTED_TITLE
              )}
            </p>
            <p>
              {t(
                x.ACCOMMODATION_INFO_TOURIST_MESSAGES_SUCCESS_YOU_ARE_HOSTED_DESCRIPTION
              )}
            </p>
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

export default Accommodation;
