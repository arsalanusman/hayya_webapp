// components/Slider.js
import React from 'react';
import Image from "next/image";


const Apply = () => {

  return (
  <div className='Apply-section'>
     <div className='container mx-auto'>
        <div className='expo-heading '>
              <div className='get flex gap-2 justify-center mb-3'>
                  <Image
                      src="/expo-img/Star.svg"
                      width={16}
                      height={16}
                      alt="Picture of the author"
                    />{" "}
                    <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>How to apply?</div>
              </div>
              <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>Hayya Enrty Visa’s</div>
              <Image
                      src="/expo-img/line.png"
                      width={162}
                      height={10}
                      alt="Picture of the author"
                      className='mx-auto'
                    />{" "}
        </div>

        <div className='select-main'>
          <div className='select-box'>
              <label htmlFor="cars">You’re?</label>
              <div className='select-bg'>
              <select name="cars" id="cars">
              <option value="Select Nationality">Select Nationality</option>
              <option value="Angola">Angola</option>
              <option value="Austria">Austria</option>
              </select>
              </div>
          </div>
          <div className='select-box'>
              <label htmlFor="cars">You Have?</label>
              <div className='select-bg'>
                <select name="cars" id="cars">
                <option value="Choose Country of Residency">Choose Country of Residency</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                </select>
              </div>
          </div>
        </div>

         <div className='Apply-box-main'>
          <div className='Apply-box one'>
            <div className='img'>
              <Image
                  src="/expo-img/apply01.png"
                  width={61}
                  height={61}
                  alt="Picture of the author"
                />
            </div>
            <div className='text'>
              <h4>Type A</h4>
              <h2>Tourist Visa</h2>
              <p>Are you planning to come to Qatar for visiting its beautiful spots? Request Hayya to enter the country</p>
              <button>Apply for Tourist Visa</button>
            </div>
          </div> 
          <div className='Apply-box one'>
            <div className='img'>
              <Image
                  src="/expo-img/apply02.png"
                  width={61}
                  height={61}
                  alt="Picture of the author"
                />
            </div>
            <div className='text'>
            <h4>Type B</h4>
              <h2>Conferences & Events  </h2>
              <p>Will you attend an event or conference hosted in Qatar? To participate you need to get an Hayya</p>
              <button>Apply for Hayya Visit</button>
            </div>
          </div>  
          <div className='Apply-box'>
            <div className='img'>
              <Image
                  src="/expo-img/apply03.png"
                  width={61}
                  height={61}
                  alt="Picture of the author"
                />
            </div>
            <div className='text'>
              <h4>Type C</h4>
              <h2>Hayya with Me</h2>
              <p>Do you receive a voucher code by a family member or a friends? Redeem your code and request Hayya.</p>
              <button>Apply for Hayya with me</button>
            </div>
          </div>  
         </div>

     </div>


  </div>
  );
};

export default Apply;
