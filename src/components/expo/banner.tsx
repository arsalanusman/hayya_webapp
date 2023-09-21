"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
const boxes01 = "/img/need-boxes01.png";
const boxes02 = "/img/need-boxes02.png";
const boxes03 = "/img/need-boxes03.png";
const boxes04 = "/img/need-boxes04.png";
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
 
  
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage;
  const slides = homepageLanguage.slides;

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
    autoplay: true,
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
                background: `linear-gradient(359deg,rgb(0 0 0 / 29%) 50%,rgb(0 0 0 / 63%) 100%,rgb(0 0 0 / 16%) 0), url(${slide.imageUrl})`,
              }}
            >
              <div className='text'>
                <h4>{slide.subTitle}</h4>
                <h1>{slide.heading}</h1>
                <p>{slide.description}</p>
                <button>Learn More</button>
              </div>
              <div className='banner-imges'>
                <div>
                  <Image
                    src={slide.imageSrc}
                    width={index == 0 ? 340 :292}
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


   <div className="need-popup">
      <Sheet>
        <div className="needhelp-button"><SheetTrigger>Need Help?</SheetTrigger></div>
        <SheetContent>
          <SheetHeader>
            <div className="need-content">
           
            <SheetDescription>
              <h1>How can we help you?</h1>
              <p> Tell us what you’re hoping to do here..</p>
              <br></br> <br></br> 
              <div className="need-boxes">
                <div> <Image src={boxes01} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>I’m Seeking to Apply for Hayya</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author'/></div>
              </div>
              <div className="need-boxes">
                <div> <Image src={boxes02} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>I Want to pre-register for Abu-Samara Border</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author'/></div>
              </div>
              <div className="need-boxes">
                <div> <Image src={boxes03} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>I want to Host Family & Friends</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author'/></div>
              </div>
              <div className="need-boxes">
                <div> <Image src={boxes04} width={44} height={44} alt='Picture of the author'/></div>  
                <div><p>I Want to Upload Accommodation Proof</p></div>
                <div><Image src={needarow} width={42} height={42} alt='Picture of the author'/></div>
              </div>

            </SheetDescription>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>


    </div>

  );
};
export default FeaturedProjects;
