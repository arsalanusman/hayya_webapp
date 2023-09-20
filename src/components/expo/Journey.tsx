// components/Slider.js
import React from 'react';
import Image from "next/image";
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


const Journey = () => {
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage;
  const { title, subtitle, journeyBoxes } = homepageLanguage.journeySection;
  return (
    <div className={'Journey-section Apply-section ' + router.locale} >
    <div className='container mx-auto'>
      <div className='expo-heading '>
        <div className='get flex gap-2 justify-center mb-3'>
          <Image
            src="/expo-img/Star.svg"
            width={16}
            height={16}
            alt="Picture of the author"
            className='expo-headingimg02'
          />{" "}
          <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>{title}</div>
        </div>
        <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>{subtitle}</div>
        <Image
          src="/expo-img/line.png"
          width={162}
          height={10}
          alt="Picture of the author"
          className='mx-auto expo-headingimg01'
        />{" "}
      </div>

      <div className='journey-box-main'>
        {journeyBoxes.map((journeyBox:any, index:number) => (
          <div key={index} className={`journey-box ${index === 0 ? 'one' : index === 1 ? 'sec' : ''}`}>
            <div className='img'>
              <Image
                src={journeyBox.imageUrl}
                width={index === 2 ? 199 : 81}
                height={index === 2 ? 200 : 82}
                alt="Picture of the author"
                className='subanimation'
              />
            </div>
            <div className='text'>
              <h2>{journeyBox.heading}</h2>
              <p>{journeyBox.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Journey;
