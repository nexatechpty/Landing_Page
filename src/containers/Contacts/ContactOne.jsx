import React from 'react';
import {
  SecTitle,
  SecSubTitle,
  InfoMedia,
  FormOne
} from '../../components';

const ContactOne = ()=> (
  <div className="background-image" style={{backgroundImage: 'url(images/bg/appoin-bg-1-1.jpg)'}}>
    <div className="container z-index-common">
      <div className="row gx-60">
        <div className="col-xl-6 align-self-center space">
          <SecSubTitle className="text-white">Make An Appointment</SecSubTitle>
          <SecTitle className="text-capitalize h1 text-white">We Provide Best Advice For Your Future</SecTitle>
          <hr className="hr-style1"/>
          <p className="mb-4 mt-1 pb-3 text-white">Compellingly mesh cross-platform portals through functional human capital world-class architectures for orthogonal initiatives. Assertively benchmark visionary quality vectors after covalent e-tailers. Intrinsicly</p>
          <div className="row gy-30">
            <div className="col-md-6">
              <InfoMedia className="contact-media"
                icon="fal fa-envelope"
                title="24/7 CALL AVAILABLE"
                info={<a href="tel:+0423565446789">+042356 5446 (789)</a>}
              />
            </div>
            <div className="col-md-6">
              <InfoMedia className="contact-media"
                icon="fal fa-envelope"
                title="Write a Quick mail"
                info={<a href="mailto:support@example.com">support@example.com</a>}
              />
            </div>
            <div className="col-md-6">
              <InfoMedia className="contact-media"
                icon="fal fa-envelope"
                title="VISITE AMERICA OFFICE"
                info="3401 Ladera Dr NW,  New York"
              />
            </div>
            <div className="col-md-6">
              <InfoMedia className="contact-media"
                icon="fal fa-envelope"
                title="VISITE GERMAN OFFICE"
                info="Kaiserbleek 4 Goslar, Lower Saxony "
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 form-wrap1">
          <FormOne 
            title="Make An Appointment"
            btnText="Make An Appointment"
          />
        </div>
      </div>
    </div>
  </div>
);


export default ContactOne;