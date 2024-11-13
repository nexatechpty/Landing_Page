import React from "react";
import Slider from "react-slick";
import { TitleWrap, SecSubTitle, SecTitle, TeamBoxOne } from "../../components";

const TeamThree = ({ className }) => {
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
    <div
      className={`background-image ${className || ""}`}
      style={{ backgroundImage: "url(images/bg/team-bg-3-1.jpg)" }}
    >
      <div className="container">
        <TitleWrap className="text-center">
          <SecSubTitle>Great Team Members</SecSubTitle>
          <SecTitle className="h1 text-capitalize">
            We Have Expert Team
          </SecTitle>
        </TitleWrap>
        <Slider className="row" {...settings}>
          <TeamBoxOne
            path="/team-details"
            name="Prosper Sibanda"
            desgination="Founder & CEO"
            image="images/team/prosper.jpeg"
            className="layout2"
          />
          <TeamBoxOne
            path="/team-details"
            name="Nigel Mafuta"
            desgination="Co-Founder & CTO"
            image="images/team/nigel.jpeg"
            className="layout2"
          />
          <TeamBoxOne
            path="/team-details"
            name="Siyamtanda Tonjeni"
            desgination="C0-Founder & Chief Design Officer"
            image="images/team/siya.jpg"
            className="layout2"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TeamThree;
