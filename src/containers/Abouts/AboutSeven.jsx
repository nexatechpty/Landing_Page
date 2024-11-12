import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  InfoMedia,
  Button
} from '../../components';

const AboutSeven = ()=> (
  <div className="background-image" style={{backgroundImage: 'url(images/bg/about-bg-5-1.jpg)'}}>
    <div className="container container-style1">
      <div className="row flex-row-reverse align-items-center gx-70">
        <div className="col-lg-6 col-xl">
          <img src="images/about/ab-7-1.jpg" alt="aboutthumb"/>
        </div>
        <div className="col-lg-6 col-xl-auto">
          <div className="about-box2">
            <SecSubTitle><i className="fas fa-bring-forward"/>Get best It solution 2022</SecSubTitle>
            <SecTitle className="text-capitalize h1">Inspiring Tech Needs for Business</SecTitle>
            <p>Dynamically monetize web-enabled processes through client-based action items. Authoritatively grow goal is oriented markets through ompletely generate technically sound content without robust users.</p>
            <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
              <div className="col-sm-auto">
                <p className="author-degi">Founder & CEO</p>
                <h3 className="h5 author-name">Adam Smith</h3>
              </div>              
              <div className="col-sm-auto">
                <InfoMedia className="about-call"
                  icon="fas fa-phone-alt"
                  title="Call To Ask Any Queary"
                  info={<a href="tel:+25821562154">+(258) 2156 2154</a>}
                />
              </div>
            </div>
            <Button path="/service">Order Service<i className="far fa-long-arrow-right"/></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSeven;