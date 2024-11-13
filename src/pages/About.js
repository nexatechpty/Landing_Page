import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  HeaderFour,
  ServiceFour,
  AboutSeven,
  TeamTwo,
  TestimonialThree,
  CtaOne,
  // BlogFour,
  // FooterOne,
  FooterThree,
} from "../containers";

const About = () => (
  <Fragment>
    <Seo title="About Us" />
    <HeaderFour />
    <Breadcrumb pageName="About Us" bgImage="images/bg/footer-bg-1-1.jpg" />
    <ServiceFour className="space-top space-extra-bottom" />
    <AboutSeven />
    <TeamTwo className="space-top space-extra-bottom" />
    <TestimonialThree className="space-top space-extra-bottom" />
    <CtaOne className="space" />
    {/* <BlogFour className="space-top space-extra-bottom" /> */}
    <FooterThree />
    <ScrollTopBtn />
  </Fragment>
);

export default About;
