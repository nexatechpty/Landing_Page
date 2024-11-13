import React from "react";
import Slider from "react-slick";
import { TitleWrap, SecSubTitle, SecTitle, TeamBoxTwo } from "../../components";

const TeamTwo = ({ ...restProps }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div {...restProps}>
      <div className="container">
        <TitleWrap className="text-center">
          <SecSubTitle>GREAT TEAM MEMBERS</SecSubTitle>
          <SecTitle className="h1 text-capitalize">
            We Have Expert Team
          </SecTitle>
        </TitleWrap>
        <Slider {...settings}>
          <TeamBoxTwo
            image="images/team/prosper.jpeg"
            name="Prosper Sibanda"
            desgination="Founder & CEO"
            path="/team-details"
          />
          <TeamBoxTwo
            image="images/team/nigel.jpeg"
            name="Nigel Mafuta"
            desgination="Co-Founder & CTO"
            path="/team-details"
          />
          <TeamBoxTwo
            image="images/team/siya.jpg"
            name="Siyamtanda Tonjeni"
            desgination="Co-Founder & UI/UX Designer"
            path="/team-details"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TeamTwo;
