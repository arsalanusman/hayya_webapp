"use client";
import Slider from "react-slick";
import Image from "next/image";
import enHomepage from "../../../public/locales/en/homepage.json";
import arHomepage from "../../../public/locales/ar/homepage.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const banner01 ="/expo-img/banner01.png";
const banner02 ="/expo-img/banner02.png";
const banner03 ="/expo-img/banner03.png";
const banner04 ="/expo-img/banner04.png";

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true, // Show arrows
    prevArrow: (
      // Custom prev arrow
      <div className="">
        <Image
          src="/img/slides/Union.png"
          width={40}
          height={40}
          alt="Left Arrow"
          className="arrow-left z-10 right-20 absolute -top-20  border border-black rounded-full p-3 transition duration-300  hover:bg-[#d5cc65] hover:border-0 cursor-pointer"
        />
      </div>
    ),
    nextArrow: (
      // Custom next arrow
      <div className="arrow-right">
        <Image
          src="/img/slides/Union.png"
          width={40}
          height={40}
          alt="Right Arrow" className="rotate-180 absolute -top-20 right-5  arrow-left border border-black rounded-full p-3 transition duration-300 hover:bg-[#d5cc65] hover:border-0 cursor-pointer"
        
        />
      </div>
    ),
    responsive: [
     
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  
  };

  
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const homepageLanguage: any =
    router.locale === "ar" ? arHomepage : enHomepage;
  const { title, subtitle, events } = homepageLanguage.eventsSection;

  return (
    <div className={'events-section ' + router.locale}>
      <div className='container mx-auto'>
        <div className='expo-heading '>
          <div className='get flex gap-2 justify-center mb-3'>
            <Image   className='expo-headingimg02' src='/expo-img/Star.svg' width={16} height={16} alt='Picture of the author' />{' '}
            <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>{title}</div>
          </div>
          <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>{subtitle}</div>
          <Image src='/expo-img/line.png' width={162} height={10} alt='Picture of the author' className='mx-auto expo-headingimg01' />{' '}
        </div>
        <Slider {...settings}>
          {events.map((event:any, index:number) => (
            <div key={index}>
              <div className='events-box' style={{direction:router.locale === "ar" ? 'rtl':'ltr'}}>
                <Image src={event.imageUrl} width={278} height={278} alt='Picture of the author' className='mx-auto' />
                <h2>{event.eventName}</h2>
                <h2 style={{marginTop:5}}>{event.year}</h2>
                <p>{event.eventDate}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;