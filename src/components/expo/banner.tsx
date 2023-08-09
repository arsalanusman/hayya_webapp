"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
const banner01 = "/expo-img/banner01.png";
const banner02 = "/expo-img/banner02.png";
const banner03 = "/expo-img/banner03.png";
const banner04 = "/expo-img/banner04.png";
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

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
                <h1>{slide.expoTitle}</h1>
                <p>{slide.description}</p>
                <button>Learn More</button>
              </div>
              <div className='banner-imges'>
                <div>
                  <Image
                    src={slide.imageSrc}
                    width={292}
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
    </div>
  );
};
export default FeaturedProjects;
