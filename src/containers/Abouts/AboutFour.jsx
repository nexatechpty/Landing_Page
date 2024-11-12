import React from 'react';
import {
  ImageBoxFour,
  SecTitle,
  SecSubTitle,
  InfoMedia
} from '../../components';

const AboutFour = ({...restProps})=> (
  <div {...restProps}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-6 mb-30">
          <ImageBoxFour 
            imageOne="images/about/ab-3-1.jpg"
            imageTwo="images/about/ab-3-2.jpg"
          />
        </div>
        <div className="col-lg-6 mb-30 pt-10 pt-lg-0 text-center text-md-start">
          <SecSubTitle><i className="fas fa-bring-forward"/>Get best It solution 2022</SecSubTitle>
          <SecTitle className="h1 mb-3 pb-3 text-capitalize">Ready To Get Our Best Quality Services</SecTitle>
          <InfoMedia className="media-order"
            number="01"
            title="We Deliver Perfect Solution"
            info="Rapidiously leverage existing quality services with wireless bandwidth seize functionalized methods..."
          />
          <InfoMedia className="media-order"
            number="02"
            title="Specialised Support Service"
            info="Rapidiously leverage existing quality services with wireless bandwidth seize functionalized methods..."
          />
          <InfoMedia className="media-order"
            number="03"
            title="We Deliver Perfect Solution"
            info="Rapidiously leverage existing quality services with wireless bandwidth seize functionalized methods..."
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutFour;