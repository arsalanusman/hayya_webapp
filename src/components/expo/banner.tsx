"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
const boxes01 = "/img/need-boxes01.png";
const boxes02 = "/img/need-boxes02.png";
const boxes03 = "/img/need-boxes03.png";
const boxes04 = "/img/need-boxes04.png";
const icon = "/img/icon.png";
const icon2 = "/img/icon-1.png";
const icon3 = "/img/icon3.png";
const icon4 = "/expo-img/journey01.png";
const needarow = "/img/needarow.png";
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet-need"
const FeaturedProjects = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1]:any = useState(null);
  const [slider2, setSlider2]:any = useState(null);
  const [step, setStep]:any = useState(0);
 
  
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage;
  const slides = homepageLanguage.slides;
  const hayaForm = homepageLanguage.hayaForm;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const settingsMain = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    asNavFor: ".slider-nav",
  };
  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    speed: 1000,
    dots: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='hero-main'>
      <Slider
        className='slider-for'
        {...settingsMain}
        asNavFor={slider2}
        ref={(slider:any) => setSlider1(slider)}
      >
        {slides.map((slide:any, index:any) => (
          <div key={index}>
            <div
              className='banner-main'
              style={{
                background: `linear-gradient(74deg, rgba(0, 0, 0, 0.75) -58.62%, rgba(0, 0, 0, 0.73) 12.98%, rgba(0, 0, 0, 0.56) 97.42%, rgba(0, 0, 0, 0.49) 295.08%, rgba(0, 0, 0, 0.00) 607.16%), url(${slide.imageUrl})`,
              }}
            >
              <div className='text'>
                <h4>{slide.subTitle}</h4>
                <h1>{slide.heading}</h1>
                <p>{slide.description}</p>
                <button>{slide.button}</button>
              </div>
              <div className='banner-imges'>
                <div>
                  <Image
                    src={slide.imageSrc}
                    width={index == 0 ? 440 :292}
                    height={451}
                    alt='Picture of the author'
                    className='img-01'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='sliderthumMian'>
        <Slider
          className='slider-nav'
          {...settingsThumbs}
          asNavFor={slider1}
          ref={(slider:any) => setSlider2(slider)}
        >
          {slides.map((slide:any, index:any) => (
            <div key={index}>
              <div className='slider-bottom'>
                <div>
                  <h2>{slide.title}</h2>
                </div>
                <div>
                  <h4>{slide.expoTitle}</h4>
                  <p>{slide.info}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>


   <div className="need-popup ">
      <Sheet>
        <div className="needhelp-button"><SheetTrigger>{hayaForm.needHelp}</SheetTrigger></div>
        <SheetContent>
          <SheetHeader>
            <div className="need-content">
           {step == 0 ? 
            <SheetDescription>
              <h1>{hayaForm.step_1.heading}</h1>
              <p  className="text-base text-center font-semibold text-slate-950">{hayaForm.step_1.subHeading}</p>
              <br></br> <br></br> 
              <div className="need-boxes mb-5" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
                <div> <Image src={boxes01} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>{hayaForm.step_1.level_1}</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author' onClick={()=>setStep(1)} /></div>
              </div>
              <div className="need-boxes mb-5" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
                <div> <Image src={boxes02} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>{hayaForm.step_1.level_2}</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author'  onClick={()=>setStep(1)}/></div>
              </div>
              <div className="need-boxes mb-5" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
                <div> <Image src={boxes03} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>{hayaForm.step_1.level_3}</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author' onClick={()=>setStep(1)}/></div>
              </div>
              <div className="need-boxes mb-5" style={router.locale === "ar" ? {'direction':'ltr'} : {}} onClick={()=>setStep(1)}>
                <div> <Image src={boxes04} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>{hayaForm.step_1.level_4}</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author'/></div>
              </div>

            </SheetDescription>
            : step == 1 ? 
            <SheetDescription>
              <h1>{hayaForm.step_2.heading}</h1>
              <p className="text-base text-center font-semibold text-slate-950 mb-10">{hayaForm.step_2.subHeading}</p>
              

              <div className="select-main"  style={router.locale === "ar" ? {'direction':'ltr', display:"block", textAlign:'right'} : {display:"block"}}>
                <div className='select-box w-full mb-7'>
                  <label htmlFor='residency'  className="text-base text-slate-950">{hayaForm.step_2.level_1}</label>
                  <div className='select-bg'>
                    <select name='residency' id='residency' placeholder="Select Nationality">
                      <option value="">Select Nationality</option>
                    </select>
                  </div>
                </div>

                <div className='select-box w-full mb-7'>
                  <label htmlFor='residency'  className="text-base text-slate-950">{hayaForm.step_2.level_2}</label>
                
                  <div className="flex space-x-4">
                    {/* Yes Radio Button */}
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio text-blue-600 rounded-full w-5 h-5 border-2 border-blue-600 bg-transparent" name="yes-no" value="yes"  onClick={()=>setStep(2)} />
                      <span className="ml-2">{hayaForm.step_2.yes}</span>
                    </label>

                    {/* No Radio Button */}
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio text-red-600 rounded-full w-5 h-5 border-2 border-red-600 bg-transparent" name="yes-no" value="no"  onClick={()=>setStep(2)} />
                      <span className="ml-2">{hayaForm.step_2.no}</span>
                    </label>
                  </div>
                </div>

                <div className='select-box w-full mb-7'>
                  <label htmlFor='residency'  className="text-base text-slate-950">{hayaForm.step_2.level_3}</label>
                
                  <div className="flex space-x-4">
                    {/* Yes Radio Button */}
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio text-blue-600 rounded-full w-5 h-5 border-2 border-blue-600 bg-transparent" name="yes-no" value="yes"  onClick={()=>setStep(2)} />
                      <span className="ml-2">{hayaForm.step_2.yes}</span>
                    </label>

                    {/* No Radio Button */}
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio text-red-600 rounded-full w-5 h-5 border-2 border-red-600 bg-transparent" name="yes-no" value="no"  onClick={()=>setStep(2)}/>
                      <span className="ml-2">{hayaForm.step_2.no}</span>
                    </label>
                  </div>
                </div>


                <div className='select-box w-full mb-7'>
                  <label htmlFor='residency'  className="text-base text-slate-950">{hayaForm.step_2.level_4}</label>
                
                  <div className="flex space-x-4">
                    {/* Yes Radio Button */}
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio text-blue-600 rounded-full w-5 h-5 border-2 border-blue-600 bg-transparent" name="yes-no" value="yes"  onClick={()=>setStep(2)}/>
                      <span className="ml-2">{hayaForm.step_2.yes}</span>
                    </label>

                    {/* No Radio Button */}
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio text-red-600 rounded-full w-5 h-5 border-2 border-red-600 bg-transparent" name="yes-no" value="no"  onClick={()=>setStep(2)}/>
                      <span className="ml-2">{hayaForm.step_2.no}</span>
                    </label>
                  </div>
                </div>
              </div>
            </SheetDescription>
            
            : step == 2 &&
            <SheetDescription>
            <h1>{hayaForm.step_3.heading}</h1>
            <p className="text-center"> {hayaForm.step_3.subHeading}</p>
            <br></br> <br></br> 
            <div className="need-boxes" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
              <div> <Image src={icon4} width={44} height={44} alt='Picture of the author'/></div>  
              <div><p>{hayaForm.step_3.level_1}</p></div>
              <div><Image src={needarow} width={42} height={42} alt='Picture of the author' onClick={()=>alert('aa')}/></div>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="mx-4 text-gray-500 font-semibold">{hayaForm.step_3.or}</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="need-boxes" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
              <div> <Image src={icon3} width={44} height={44} alt='Picture of the author'/></div>  
              <div><p>{hayaForm.step_3.level_2}</p></div>
              <div><Image src={needarow} width={42} height={42} alt='Picture of the author' onClick={()=>alert('aa')}/></div>
            </div>
            
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="mx-4 text-gray-500 font-semibold">{hayaForm.step_3.or}</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="need-boxes" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
              <div> <Image src={icon2} width={44} height={44} alt='Picture of the author'/></div>  
              <div><p>{hayaForm.step_3.level_3}</p></div>
              <div><Image src={needarow} width={42} height={42} alt='Picture of the author' onClick={()=>alert('aa')}/></div>
            </div>
            
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="mx-4 text-gray-500 font-semibold">{hayaForm.step_3.or}</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="need-boxes" style={router.locale === "ar" ? {'direction':'ltr'} : {}}>
              <div> <Image src={icon} width={44} height={44} alt='Picture of the author'/></div>  
              <div><p>{hayaForm.step_3.level_4}</p></div>
              <div><Image src={needarow} width={42} height={42} alt='Picture of the author' onClick={()=>alert('aa')}/></div>
            </div>

          </SheetDescription>
            
            }


            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>


    </div>

  );
};
export default FeaturedProjects;
