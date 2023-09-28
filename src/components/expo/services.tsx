// components/Slider.js
import React from 'react';
import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import 'react-multi-carousel/lib/styles.css'; // Import the multi-carousel CSS
import Carousel from 'react-multi-carousel';
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


// Define custom arrow components
const CustomLeftArrow = ({ onClick }:any) => (
  <button
    onClick={onClick}
    className="custom-arrow custom-left-arrow"
    aria-label="Previous"
  >
    {/* Add your custom left arrow icon or image here */}
    <Image src="/img/slides/Union.png" width={40} height={40} alt="Previous" 
     />
  </button>
);

const CustomRightArrow = ({ onClick }:any) => (
  <button
    onClick={onClick}
    className="custom-arrow custom-right-arrow"
    aria-label="Next"
  >
    {/* Add your custom right arrow icon or image here */}
    <Image src="/img/slides/Union.png" width={40} height={40} alt="Next" />
  </button>
);

const CarouselSlider = () => {
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage; 
  const { heading, title, slides } = homepageLanguage.servicesSection;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='services-section'>
      <div className='container mx-auto'>
        <div className='expo-heading sd'>
          <div className='get flex gap-2 justify-center mb-3'>
            <Image className='expo-headingimg02' src='/expo-img/Star.svg' width={16} height={16} alt='Picture of the author' />{' '}
            <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>{heading}</div>
          </div>
          <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>{title}</div>
          <Image src='/expo-img/line.png' width={162} height={10} alt='Picture of the author' className='mx-auto expo-headingimg01' />{' '}
        </div>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          arrows={true}
          showDots
          slidesToSlide={1}
          infinite
          autoPlay={true}
          autoPlaySpeed={3000}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {slides.map((slide:any) => (
            <div
              key={slide.id}
              className='services-box'
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                direction:router.locale === "ar" ? 'rtl':'ltr'
              }}
            >
              <div className='text'>
                <h3 className=''>{slide.heading}</h3>
                <p className=''>{slide.subtitle}</p>
                <button className='mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg'>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlider;