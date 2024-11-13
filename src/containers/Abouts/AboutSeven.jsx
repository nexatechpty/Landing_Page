import React from "react";
import { SecSubTitle, SecTitle, InfoMedia, Button } from "../../components";

const AboutSeven = () => (
  <div
    className="background-image"
    style={{ backgroundImage: "url(images/bg/about-bg-5-1.jpg)" }}
  >
    <div className="container container-style1">
      <div className="row flex-row-reverse align-items-center gx-70">
        <div className="col-lg-6 col-xl">
          <img src="images/about/digital_merketing.png" alt="aboutthumb" />
        </div>
        <div className="col-lg-6 col-xl-auto">
          <div className="about-box2">
            <SecSubTitle>
              <i className="fas fa-bring-forward" />
              Get best It solution 2022
            </SecSubTitle>
            <SecTitle className="text-capitalize h1">
              Inspiring Tech Needs for Business
            </SecTitle>
            <p>
              Unlock the potential of your business by dynamically optimizing
              web-enabled processes. Our client-focused strategies empower you
              to achieve your goals and capture market opportunities through
              innovative and technically sound content.
            </p>
            <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
              <div className="col-sm-auto">
                <p className="author-degi">Sales Assistant \</p>
                <h3 className="h5 author-name">Call To Ask Any Queary</h3>
              </div>
              <div className="col-sm-auto">
                <InfoMedia
                  className="about-call"
                  icon="fas fa-phone-alt"
                  title=""
                  info={<a href="tel:+25821562154">(+27) 64 704 5825</a>}
                />
              </div>
            </div>
            <Button path="/service">
              Order Service
              <i className="far fa-long-arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSeven;
