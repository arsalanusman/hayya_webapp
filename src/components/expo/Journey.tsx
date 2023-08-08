// components/Slider.js
import React from 'react';
import Image from "next/image";


const Journey = () => {

  return (
  <div className='Journey-section'>
     <div className='container mx-auto'>
        <div className='expo-heading '>
              <div className='get flex gap-2 justify-center mb-3'>
                  <Image
                      src="/expo-img/Star.svg"
                      width={16}
                      height={16}
                      alt="Picture of the author"
                    />{" "}
                    <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>How it Goes?</div>
              </div>
              <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>Hayya Journey</div>
              <Image
                      src="/expo-img/line.png"
                      width={162}
                      height={10}
                      alt="Picture of the author"
                      className='mx-auto'
                    />{" "}
        </div>

         <div className='journey-box-main'>
          <div className='journey-box one'>
            <div className='img'>
              <Image
                  src="/expo-img/journey01.png"
                  width={81}
                  height={82}
                  alt="Picture of the author"
                />
            </div>
            <div className='text'>
              <h2>Know your Visa Type</h2>
              <p>Three VISA types are available based on your purpose of travel and/or your corresponding eligibility criteria.</p>
            </div>
          </div> 
          <div className='journey-box sec'>
            <div className='img'>
              <Image
                  src="/expo-img/journey02.png"
                  width={81}
                  height={82}
                  alt="Picture of the author"
                />
            </div>
            <div className='text'>
              <h2>Fill In three Stages</h2>
              <p>Your personal, residence, and accommodation information will be collected and processed before approving your VISA.</p>
            </div>
          </div>  
          <div className='journey-box'>
            <div className='img'>
              <Image
                  src="/expo-img/journey03.png"
                  width={199}
                  height={200}
                  alt="Picture of the author"
                />
            </div>
            <div className='text'>
              <h2>Get your Hayya Card!</h2>
              <p>After the provided information is reviewed and approved, your hayya digital card
  will be issued in no time.</p>
            </div>
          </div>  
         </div>

     </div>


  </div>
  );
};

export default Journey;
