// components/Slider.js
import React from 'react';
import Image from "next/image";


const Mobileapp = () => {

  return (
  <div className='mobileapp-section'>
     <div className='container mx-auto'>
        <div className='expo-heading '>
              <div className='get flex gap-2 justify-center mb-3'>
                  <Image
                      src="/expo-img/Star.svg"
                      width={16}
                      height={16}
                      alt="Picture of the author"
                    />{" "}
                    <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>EXPLORE MORE</div>
              </div>
              <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>Hayya Mobile App</div>
              <Image
                      src="/expo-img/line.png"
                      width={162}
                      height={10}
                      alt="Picture of the author"
                      className='mx-auto'
                    />{" "}
        </div>

        <div className='mobileapp-main'>
            <div className='lft'>
              <Image
                  src="/expo-img/iPhone.png"
                  width={496}
                  height={687}
                  alt="Picture of the author"
                />
              </div>
              <div className='rgt'>
                <h1>Manage all of your activities through 
                  a unified window.</h1>
                  <p>Download the app to manage your Hayya ID, keep track of your events and stay on track with your travel plan.</p>
                  <h4>Get the App NOW!</h4>
                  <div className='button-main'>
                      <div>  <Image
                        src="/expo-img/store01.png"
                        width={135}
                        height={40}
                        alt="Picture of the author"
                      /></div>
                      <div><Image
                        src="/expo-img/store02.png"
                        width={135}
                        height={40}
                        alt="Picture of the author"
                      /></div>
                  </div>
              </div>

        </div>  

      

     </div>


  </div>
  );
};

export default Mobileapp;
