import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  Button,
  InfoMedia,
  ImageBoxThree
} from '../../components';

const AboutThree = () => (
  <div className="about-wrap1 background-image" style={{backgroundImage: 'url(images/bg/ab-bg-2-1.jpg)'}}>
    <div className="container">
      <div className="row gx-60">
        <div className="col-xl-6 mb-50 mb-xl-0">
          <ImageBoxThree 
            imageOne="images/about/ab-2-1.jpg"
            imageTwo="images/about/ab-2-2.jpg"
            number="100+"
            title="Awards We won"
            icon="fal fa-award"
          />
        </div>
        <div className=" col-xl-6 align-self-center text-center text-xl-start">
          <SecSubTitle><i className="fas fa-bring-forward" />ABOUT OUR COMPANY</SecSubTitle>
          <SecTitle>Connecting people & technology</SecTitle>
          <p className="mb-4 pb-2 pe-xl-5">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation laboris.</p>
          <div className="row gx-60 mb-4 pb-1 gy-2 text-start justify-content-center justify-content-xl-start">
            <div className="col-auto">
              <InfoMedia className="about-media"
                image="images/icon/ab-ic-2-1.png"
                info="Provide Skills Services"
              />
            </div>
            <div className="col-auto">
              <InfoMedia className="about-media"
                image="images/icon/ab-ic-2-2.png"
                info="Urgent Support For Clients"
              />
            </div>
          </div>
          <Button path="/contact">Get A Quote<i className="far fa-arrow-right"/></Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutThree;