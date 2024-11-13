import React from "react";
import {
  ImageBoxFive,
  SecSubTitle,
  SecTitle,
  InfoMedia,
  List,
  Button,
} from "../../components";

const AboutFive = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-6 mb-30 pb-10 pb-lg-0">
          <ImageBoxFive
            imageOne="images/about/about1.jpg"
            imageTwo="images/about/about2.jpg"
            imageThree="images/about/about3.jpeg"
          />
        </div>
        <div className="col-lg-6 mb-30">
          <SecSubTitle>
            <i className="fas fa-bring-forward" />
            ABOUT OUR COMPANY
          </SecSubTitle>
          <SecTitle className="text-capitalize h1">
            Connecting People And Build Technology
          </SecTitle>
          <InfoMedia
            className="exp-media"
            number="2"
            title="Years Experience"
            info="At NexaTech, we specialize in crafting tailored technology solutions that propel businesses forward. Our expertise spans web development, cloud services, IT management, and machine learning, allowing us to meet the diverse needs of our clients. We blend innovation with practical insights, ensuring each solution is both cutting-edge and highly functional. "
          />
          <List className="list-style1">
            <List.Item>
              <i className="far fa-check-circle" />
              All In One IT Solution Company
            </List.Item>
            <List.Item>
              <i className="far fa-check-circle" />
              Amazing Expert Teams
            </List.Item>
            <List.Item>
              <i className="far fa-check-circle" />
              Quality Solution For Business
            </List.Item>
            <List.Item>
              <i className="far fa-check-circle" />
              24/7 Quick Supports
            </List.Item>
          </List>
          <Button path="/about">
            Learn More
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutFive;
