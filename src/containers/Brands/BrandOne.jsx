import React from "react";
import Slider from "react-slick";

const BrandOne = ({ ...restProps }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div {...restProps}>
      <div className="container">
        <div className="sec-line-wrap">
          <div className="sec-line"></div>
          <h2 className="sec-title2">Our Trusted Clients</h2>
          <div className="sec-line"></div>
        </div>
        <Slider className="row text-center" {...settings}>
          <div className="row text-center">
            <img src="images/brand/nayvee_tech_logo.png" alt="Nayvee Tech" />
          </div>
          <div className="row text-center">
            <img
              src="images/brand/mechatecs_logo.webp"
              alt="Mechatecs Mining and Engeenering"
            />
          </div>
          <div className="row text-center">
            <img
              src="images/brand/webton_logo_nobg_img.webp"
              alt="Webton Projects"
            />
          </div>
          <div className="row text-center">
            <img src="images/brand/mq-lo-nbg.png" alt="MQ Petroleum" />
          </div>
          <div className="row text-center">
            <img
              src="images/brand/nayvee_logo_ icon_nobg.png"
              alt="Nayvee Chat"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BrandOne;
