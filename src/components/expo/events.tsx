"use client";
import Slider from "react-slick";
import Image from "next/image";
const banner01 ="/expo-img/banner01.png";
const banner02 ="/expo-img/banner02.png";
const banner03 ="/expo-img/banner03.png";
const banner04 ="/expo-img/banner04.png";

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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

  return (
    <div className='events-section'>
      <div className='container mx-auto'>
       <div className='expo-heading '>
             <div className='get flex gap-2 justify-center mb-3'>
                 <Image
                     src="/expo-img/Star.svg"
                     width={16}
                     height={16}
                     alt="Picture of the author"
                   />{" "}
                   <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>WHat’s Trending</div>
             </div>
             <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>Qatar Events</div>
             <Image
                     src="/expo-img/line.png"
                     width={162}
                     height={10}
                     alt="Picture of the author"
                     className='mx-auto'
                   />{" "}
       </div>
    <Slider {...settings}>
      <div>
        <div className="events-box">
         <Image
            src="/expo-img/events01.png"
            width={278}
            height={278}
            alt="Picture of the author"
            className='mx-auto'
          /><h2>Doha Expo <br></br>
          2023</h2>
          <p>Oct 12, 2023</p>
        </div>
      </div>
      <div>
        <div className="events-box">
         <Image
            src="/expo-img/events02.png"
            width={278}
            height={278}
            alt="Picture of the author"
            className='mx-auto'
          /><h2>Doha Expo <br></br>
          2023</h2>
          <p>Oct 12, 2023</p>
        </div>
      </div>
      <div>
        <div className="events-box">
         <Image
            src="/expo-img/events03.png"
            width={278}
            height={278}
            alt="Picture of the author"
            className='mx-auto'
          /><h2>Doha Expo <br></br>
          2023</h2>
          <p>Oct 12, 2023</p>
        </div>
      </div>
      <div>
        <div className="events-box">
         <Image
            src="/expo-img/events04.png"
            width={278}
            height={278}
            alt="Picture of the author"
            className='mx-auto'
          /><h2>Doha Expo <br></br>
          2023</h2>
          <p>Oct 12, 2023</p>
        </div>
      </div>
      <div>
        <div className="events-box">
         <Image
            src="/expo-img/events01.png"
            width={278}
            height={278}
            alt="Picture of the author"
            className='mx-auto'
          /><h2>Doha Expo <br></br>
          2023</h2>
          <p>Oct 12, 2023</p>
        </div>
      </div>
    </Slider>
    </div>
    </div>
  );
};

export default Events;
