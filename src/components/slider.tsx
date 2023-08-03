// components/Slider.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS

const Slider = () => {
  const slides = [
    {
      id: 1,
      heading: "01 Doha Express",
      subtitle: "Information",
      imageUrl: "slide1.jpg",
      buttonText: "Read More",
      buttonLink: "#slide1",
      background: "bg-gray-200",
    },
    {
      id: 2,
      heading: "02 Grand Pics",
      subtitle: "Information 2",
      imageUrl: "slide2.jpg",
      buttonText: "Read More",
      buttonLink: "#slide2",
      background: "bg-gray-300",
    },
    // Add more slides here if needed
  ];

  const renderThumbs = (currentSlide:any, goToSlide:any) =>
    slides.map((slide, index) => (
      <button
        key={index}
        className={`h-4 w-4 mx-1 rounded-full focus:outline-none ${
          currentSlide === index ? 'bg-black' : 'bg-gray-400'
        }`}
        onClick={() => goToSlide(index)}
      >
        <span className="sr-only">{slide.heading}</span>
      </button>
    ));

  return (
    <Carousel
      showArrows
      autoPlay
      infiniteLoop
      transitionTime={500}
      emulateTouch
      className="relative"
      renderThumbs={renderThumbs}
    >
      {slides.map((slide) => (
        <div key={slide.id} className={`h-full flex items-center justify-center ${slide.background}`}>
          <div className="w-full mx-10 md:mx-0 md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800">{slide.heading}</h3>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
            <a
              href={slide.buttonLink}
              className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
            >
              {slide.buttonText}
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              className="max-w-full mx-auto md:max-w-none rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
