// components/Slider.js
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import 'react-multi-carousel/lib/styles.css'; // Import the multi-carousel CSS
import Carousel from 'react-multi-carousel';

const CarouselSlider = () => {
  const slides = [
    {
      id: 1,
      heading: "01 Doha Express",
      subtitle: "Information",
      imageUrl: "slide1.jpg",
      buttonText: "Read More",
      buttonLink: "#slide1",
    },
    {
      id: 2,
      heading: "02 Grand Pics",
      subtitle: "Information 2",
      imageUrl: "slide2.jpg",
      buttonText: "Read More",
      buttonLink: "#slide2",
    },
    {
      id: 3,
      heading: "02 Grand Pics",
      subtitle: "Information 2",
      imageUrl: "slide2.jpg",
      buttonText: "Read More",
      buttonLink: "#slide2",
    },
    {
      id: 4,
      heading: "02 Grand Pics",
      subtitle: "Information 2",
      imageUrl: "slide2.jpg",
      buttonText: "Read More",
      buttonLink: "#slide2",
    },
    {
      id: 5,
      heading: "02 Grand Pics",
      subtitle: "Information 2",
      imageUrl: "slide2.jpg",
      buttonText: "Read More",
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
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      showDots
      slidesToSlide={1}
      infinite
      autoPlay
      autoPlaySpeed={2000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {slides.map((slide) => (
        <div key={slide.id} className="bg-gray-200 rounded-lg p-6">
          <h3 className="text-3xl font-bold text-gray-800">{slide.heading}</h3>
          <p className="text-xl text-gray-600">{slide.subtitle}</p>
          <img
            src={slide.imageUrl}
            alt={`Slide ${slide.id}`}
            className="w-full mt-4 rounded-lg shadow-md"
          />
          <a
            href={slide.buttonLink}
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
          >
            {slide.buttonText}
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
