// components/Slider.js
import React from 'react';
import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import 'react-multi-carousel/lib/styles.css'; // Import the multi-carousel CSS
import Carousel from 'react-multi-carousel';

const CarouselSlider = () => {
  const slides = [
    {
      id: 1,
      heading: "Accommodation",
      subtitle: "Description",
      imageUrl: "/expo-img/services01.png",
      buttonText: "Learn More",
      buttonLink: "#slide1",
    },
    {
      id: 2,
      heading: "Transportation",
      subtitle: "Description",
      imageUrl: "/expo-img/services02.png",
      buttonText: "Learn More",
      buttonLink: "#slide2",
    },
    {
      id: 3,
      heading: "Health Insurance",
      subtitle: "Description",
      imageUrl: "/expo-img/services03.png",
      buttonText: "Learn More",
      buttonLink: "#slide2",
    },
    {
      id: 4,
      heading: "Venue Access",
      subtitle: "Description",
      imageUrl: "/expo-img/services04.png",
      buttonText: "Learn More",
      buttonLink: "#slide2",
    },
    {
      id: 5,
      heading: "02 Grand Pics",
      subtitle: "Information 2",
      imageUrl: "/expo-img/services01.png",
      buttonText: "Learn More",
      buttonLink: "#slide2",
    },
    // Add more slides here if needed
  ];

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
      <div className='expo-heading '>
          <div className='get flex gap-2 justify-center mb-3'>
              <Image
                  src="/expo-img/Star.svg"
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />{" "}
                <div className='text-[16px] font-semibold tracking-[.1em] uppercase'>What you get</div>
          </div>
          <div className='Merriweather text-3xl sm:text-5xl font-extrabold mb-4'>Hayya Services</div>
          <Image
                  src="/expo-img/line.png"
                  width={162}
                  height={10}
                  alt="Picture of the author"
                  className='mx-auto'
                />{" "}
      </div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={false}
        showDots
        slidesToSlide={1}
        infinite
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slides.map((slide) => (
          
          <div key={slide.id} className="services-box" style={{
            backgroundImage: `url(${slide.imageUrl})`,
          
          }}>
            <div className='text'>
              <h3 className="">{slide.heading}</h3>
              <p className="">{slide.subtitle}</p>
              <button
                
                  className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
                >
              {slide.buttonText}
            </button>
            </div>
          
          
            {/* <img
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              className="w-full mt-4 rounded-lg shadow-md"
            /> */}
          
          </div>
        
        ))}
        
      </Carousel>
      </div>
    </div>
  );
};

export default CarouselSlider;
