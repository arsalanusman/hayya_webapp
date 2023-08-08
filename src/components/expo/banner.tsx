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
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const router = useRouter();
  const { t } = useTranslation("homepage");

  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage;

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

  const slides = [
    {
      title: "01",
      expoTitle: "Doha Expo 2023",
      info: "INFORMATION"
    },
    {
      title: "02",
      expoTitle: "Doha Expo 2023",
      info: "INFORMATION"
    },
    {
      title: "03",
      expoTitle: "Doha Expo 2023",
      info: "INFORMATION"
    },
    {
      title: "04",
      expoTitle: "Doha Expo 2023",
      info: "INFORMATION"
    }
  ];

  return (
    <div className="hero-main">
      <Slider
        className="slider-for"
        {...settingsMain}
        asNavFor={nav2 as any}
        ref={(slider) => setSlider1(slider as any)}
      >
        <div>
          <div
            className="banner-main"
            style={{
              background: `linear-gradient(359deg,rgb(0 0 0 / 29%) 50%,rgb(0 0 0 / 63%) 100%,rgb(0 0 0 / 16%) 0), url(${banner01})`,
            }}
          >
            <div className="text">
              <h4>{t(homepageLanguage["slider1"].subHeading)}</h4>
              <h1>
                Qatar Expo <br></br>2023
              </h1>
              <p>
                The International Horticultural Expo 2023 will be hosted by the
                State of Qatar. Located on the west of Doha city, 2,5km from
                West Bay, 3,5km from Doha Port and about 12km away from HIA.
              </p>
              <button>Learn More</button>
            </div>
            <div className="banner-imges">
              <div>
                <Image
                  src="/expo-img/qatar01.png"
                  width={342}
                  height={462}
                  alt="Picture of the author"
                  className="img-01"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="banner-main"
            style={{
              background: `linear-gradient(359deg,rgb(0 0 0 / 29%) 50%,rgb(0 0 0 / 63%) 100%,rgb(0 0 0 / 16%) 0), url(${banner02})`,
            }}
          >
            <div className="text">
              <h4>the HAYYA EXPerience</h4>
              <h1>
                Planning <br></br>a Road Trip?
              </h1>
              <p>
                The International Horticultural Expo 2023 will be hosted by the
                State of Qatar. Located on the west of Doha city, 2,5km from
                West Bay, 3,5km from Doha Port and about 12km away from HIA.
              </p>
              <button>Learn More</button>
            </div>
            <div className="banner-imges">
              <div>
                <Image
                  src="/expo-img/qatar02.png"
                  width={342}
                  height={462}
                  alt="Picture of the author"
                  className="img-01"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="banner-main"
            style={{
              background: `linear-gradient(359deg,rgb(0 0 0 / 29%) 50%,rgb(0 0 0 / 63%) 100%,rgb(0 0 0 / 16%) 0), url(${banner03})`,
            }}
          >
            <div className="text">
              <h4>the HAYYA EXPerience</h4>
              <h1>
                AFC Asian <br></br>Cup 2023
              </h1>
              <p>
                The International Horticultural Expo 2023 will be hosted by the
                State of Qatar. Located on the west of Doha city, 2,5km from
                West Bay, 3,5km from Doha Port and about 12km away from HIA.
              </p>
              <button>Learn More</button>
            </div>
            <div className="banner-imges">
              <div>
                <Image
                  src="/expo-img/qatar03.png"
                  width={342}
                  height={462}
                  alt="Picture of the author"
                  className="img-01"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="banner-main"
            style={{
              background: `linear-gradient(359deg,rgb(0 0 0 / 29%) 50%,rgb(0 0 0 / 63%) 100%,rgb(0 0 0 / 16%) 0), url(${banner04})`,
            }}
          >
            <div className="text">
              <h4>the HAYYA EXPerience</h4>
              <h1>
                Qatar Expo <br></br>2023
              </h1>
              <p>
                The International Horticultural Expo 2023 will be hosted by the
                State of Qatar. Located on the west of Doha city, 2,5km from
                West Bay, 3,5km from Doha Port and about 12km away from HIA.
              </p>
              <button>Learn More</button>
            </div>
            <div className="banner-imges">
              <div>
                <Image
                  src="/expo-img/qatar04.png"
                  width={342}
                  height={462}
                  alt="Picture of the author"
                  className="img-01"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="sliderthumMian">
        <Slider
          className="slider-nav"
          {...settingsThumbs}
          asNavFor={nav1 as any}
          ref={(slider) => setSlider2(slider as any)}
        >
        {router.locale === "ar"
            ? slides.slice().reverse().map((slide, index) => (
                <div key={index}>
                  <div className="slider-bottom">
                    <div>
                      <h2>{slide.title}</h2>
                    </div>
                    <div>
                      <h4>{slide.expoTitle}</h4>
                      <p>{slide.info}</p>
                    </div>
                  </div>
                </div>
              ))
            : slides.map((slide, index) => (
                <div key={index}>
                  <div className="slider-bottom">
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
