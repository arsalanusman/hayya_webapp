//   ********************************************
//   THIS IS A SAMPLE COMPONENT TO TEST THE ENUMS
//   ********************************************

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTranslation } from "../../../helper/utilities";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const SampleComponent = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);

  return (
    <>
      {tr(x.SHARED_LABELS_CONFIRM)}
      <br></br>
      {tr(x.SHARED_LABELS_NEXT)}
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

export default SampleComponent;

//   ********************************************
//   THIS IS A SAMPLE COMPONENT TO TEST THE ENUMS
//   ********************************************
