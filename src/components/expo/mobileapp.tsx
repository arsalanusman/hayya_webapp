// components/Slider.js
import React from 'react';
import Image from "next/image";
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


const Mobileapp = () => {
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage; 
    const { exploreMore, appTitle, appDescription, downloadDescription, getAppNow, appStoreImages } = homepageLanguage.mobileAppSection;

    return (
      <div className={'mobileapp-section ' + router.locale}>
        <div className='container mx-auto'>
          <div className='expo-heading '>
            <div className='get flex gap-2 justify-center mb-3'>
              <Image   className='expo-headingimg02' src='/expo-img/Star.svg' width={16} height={16} alt='Picture of the author' />{' '}
              <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>{exploreMore}</div>
            </div>
            <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>{appTitle}</div>
            <Image src='/expo-img/line.png' width={162} height={10} alt='Picture of the author' className='mx-auto expo-headingimg01' />{' '}
          
          </div>

          
          <div className='mobileapp-main'>
            <div className='lft'>
              <Image src='/expo-img/iPhone.png' width={496} height={687} alt='Picture of the author' />
            </div>
            
            <div className='rgt'>
              <h1>{appDescription}</h1>
              <p>{downloadDescription}</p>
              <h4>{getAppNow}</h4>
              <div className='button-main'>
                {appStoreImages.map((storeImage:any, index:number) => (
                  <div key={index}>
                    <Image src={storeImage.imageUrl} width={135} height={40} alt={storeImage.altText} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Mobileapp;
