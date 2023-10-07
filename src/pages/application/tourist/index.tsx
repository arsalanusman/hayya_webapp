"use client";

import { Button } from "@/components/ui/button";
import Backbutton from "@/components/ui/backhomebutton";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react"
import InformationTab from "./information"
import ProfileTab from "./profile";
import PersonalTab from "./personal";
import ResidenceTab from "./residence";
import AccommodationTab from "./accommodation";
import SummaryTab from "./summary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTranslation } from "@/helper/utilities";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HayyaWithMe } from "@/helper/enums/hayya-with-me";

type Props = {};

const FILE_NAME = "hayya-with-me";
const x = HayyaWithMe;

const ApplicationInformation = () => {
  const { t } = useTranslation([FILE_NAME]);
  const tr = (key: string) => getTranslation(t, FILE_NAME, key);
  const Router = useRouter()
  const dataToSave = useSelector((state:any) => state.data.dataToSave);
  const [isLoading,setIsLoading] = useState(false)

  const [steps, setSteps] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [isValidate, setIsValidate] = useState(false)
  const [successValidate, setSuccessValidate] = useState(false);
  const listOfPages = [
    { name: tr(x.APPLICATION_INFO_TITLE) },
    { name: tr(x.PERSONAL_INFO_TITLE) },
    { name: tr(x.RESIDENCE_INFO_TITLE) },
    { name: tr(x.ACCOMMODATION_INFO_TITLE) },
    { name: tr(x.APPLICATION_SUMMARY_TITLE) },
  ]

  useEffect(()=> {
    setIsLoading(true)
}
,[])
  function isStepComplete(stepIndex: number, currentStep: number): boolean {
    return stepIndex < currentStep;
  }

  return <>
       <div className="container-fluid pb-10 px-4 sm:px-20 bg-gradient-to-t from-[#0C4532] to-[#327886] to-100%  mx-auto  h-full w-full ">
      {isLoading && <>
       <Backbutton />
       <div className="px-0 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
          <div className="grid gap-2 items-baseline grid-cols-1 lg:grid-cols-[29%_minmax(70%,_1fr)]">
            <div className="sm:block hidden">
              {listOfPages.map((item: any, index: number) => (
                <div className="flex" key={index}>
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div
                        className={`flex items-center justify-center w-4 h-4 bg-white border rounded-full ${isStepComplete(index, steps) ? 'complete' : steps !== index ? 'opacity-25' : ''
                          }`}
                      ></div>
                    </div>
                    <div
                      className={`w-px h-full bg-gray-300 ${isStepComplete(index, steps) ? 'complete' : steps !== index ? 'opacity-25' : ''
                        }`}
                    />
                  </div>
                  <div className="pb-10">
                    <p
                      className={`text-white ${isStepComplete(index, steps) ? 'complete' : steps !== index ? 'opacity-25' : ''
                        }`}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ease-in duration-300">
              <div className="text-center mx-auto mb-6">
                <Image
                  src="/img/star.svg"
                  width={32}
                  height={32}
                  alt="Picture of the author"
                  className="text-center mx-auto mb-3"
                />
                <p className="text-[26px] font-[500] text-white">
                  {tr(x.REQUEST_HAYYA)}
                </p>
              </div>
              <div className="bg-white border-solid border-2  border-gray-100 rounded-2xl p-5 sm:p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
                {steps === 0 && (
                  <InformationTab
                    isActive={(e: any) => setIsActive(e)}
                    formType={dataToSave}
                  />
                )}
                {steps === 1 && (
                  <PersonalTab
                    isActive={(e: any) => setIsActive(e)}
                    isValidate={(e: any) => setIsValidate(e)}
                    isSuccess={(e: any) => setSuccessValidate(e)}
                    success={successValidate}
                  />
                )}
                {steps === 2 && (
                  <ResidenceTab isActive={(e: any) => setIsActive(e)} />
                )}
                {steps === 3 && (
                  <AccommodationTab isActive={(e: any) => setIsActive(e)} />
                )}
                {steps === 4 && (
                  <SummaryTab isActive={(e: any) => setIsActive(e)} />
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-20">
                  {steps === 0 && (
                    <div className="w-full">
                      <Button
                        variant="outline"
                        className="w-full p-6 rounded-2xl border-[#000]"
                        onClick={(e: any) => Router.push("/application")}
                      >
                        {tr(x.SHARED_LABELS_EXIT)}
                      </Button>
                    </div>
                  )}
                  {steps > 0 && (
                    <div className="w-full">
                      <Button
                        variant="outline"
                        className="w-full p-6 rounded-2xl border-[#000]"
                        onClick={(e) => {
                          setIsActive(false);
                          setSuccessValidate(false);
                          setSteps(steps - 1);
                        }}
                      >
                        {tr(x.SHARED_LABELS_BACK)}:{" "}
                        {listOfPages[steps - 1].name}
                      </Button>
                    </div>
                  )}
                  {isValidate && (
                    <div className="w-full">
                      <Button
                        variant="secondary"
                        className={"bg-[#e7e3aa] w-full p-6 rounded-2xl"}
                        onClick={(e) => {
                          isActive && setIsValidate(false);
                          setIsActive(true);
                          setSuccessValidate(true);
                        }}
                      >
                        {tr(x.SHARED_LABELS_VALIDATE_YOUR_ID)}
                      </Button>
                    </div>
                  )}
                  {!isValidate && steps !== listOfPages.length - 1 && (
                    <div className="w-full">
                      <Button
                        variant="secondary"
                        className={
                          "bg-[#e7e3aa] w-full p-6 rounded-2xl" +
                          (!isActive ? " opacity-25" : "")
                        }
                        onClick={(e) => {
                          isActive && setSteps(steps + 1);
                          setSuccessValidate(false);
                          setIsActive(true);
                        }}
                      >
                        {tr(x.SHARED_LABELS_NEXT)}
                      </Button>
                    </div>
                  )}
                  {steps === listOfPages.length - 1 && (
                    <div className="w-full">
                      <Dialog>
                        <DialogTrigger className="bg-[#e7e3aa] w-full p-3 rounded-2xl">
                          {tr(x.SHARED_LABELS_SUBMIT_APPLICATION)}
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <Image
                                src="/img/Union.svg"
                                width={16}
                                height={17}
                                alt="Picture of the author"
                                className="mb-4"
                              />
                              
                            </DialogTitle>
                            <DialogDescription>
                              {tr(x.MODAL_SUBMIT_HAYYA_APP_DESCRIPTION)}
                            </DialogDescription>
                            <div className="flex justify-between pt-8">
                              <div>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button>
                                      {tr(x.SHARED_LABELS_BACK_TO_SUMMARY)}
                                    </Button>
                                  </DialogClose>
                                </DialogFooter>
                              </div>
                              <div>
                                <Button
                                  className="bg-[#D5CC65] text-black hover:text-white"
                                  type="submit"
                                  onClick={(e) =>
                                    Router.push("/application/payment")
                                  }
                                >
                                  {tr(x.SHARED_LABELS_SUBMIT)}
                                </Button>
                              </div>
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div></>}
      </div>
   

  </>
}


export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [FILE_NAME])),
  },
});

export default ApplicationInformation;
