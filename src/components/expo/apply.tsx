// components/Slider.js
import React from 'react';
import Image from "next/image";
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";




const Apply = () => {
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage; 
    const { heading, selectOptions, applyBoxes } = homepageLanguage.applySection;

  return (
    <div className='Apply-section' >
      <div className='container mx-auto'>
        <div className='expo-heading '>
          <div className='get flex gap-2 justify-center mb-3'>
            <Image className='expo-headingimg02' src='/expo-img/Star.svg' width={16} height={16} alt='Picture of the author' />{' '}
            <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>{heading.howToApply}</div>
          </div>
          <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>{heading.mainTitle}</div>
          <Image src='/expo-img/line.png' width={162} height={10} alt='Picture of the author' className='mx-auto expo-headingimg01' />{' '}
        </div>

        <div className='select-main'>
          <div className='select-box'>
            <label htmlFor='nationality'>{selectOptions.nationalityLabel}</label>
            <div className='select-bg'>
              <select name='nationality' id='nationality'>
                {selectOptions.nationality.map((option:any, index:number) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='select-box'>
            <label htmlFor='residency'>{selectOptions.residencyLabel}</label>
            <div className='select-bg'>
              <select name='residency' id='residency'>
                {selectOptions.residency.map((option:any, index:number) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='Apply-box-main'>
          {applyBoxes.map((applyBox:any) => (
            <div key={applyBox.id} className='Apply-box one'>
              <div className='img'>
                <Image  className='subanimation' src={`/expo-img/apply0${applyBox.id}.png`} width={61} height={61} alt='Picture of the author' />
              </div>
              <div className='text'>
                <h4>{applyBox.type}</h4>
                <h2>{applyBox.title}</h2>
                <p>{applyBox.description}</p>
                <button>{applyBox.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apply;