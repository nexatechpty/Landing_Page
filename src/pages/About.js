import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  ServiceFour,
  AboutSeven,
  TeamTwo,
  TestimonialThree,
  CtaOne,
  BlogFour,
  FooterOne,
  HeaderFour,
} from "../containers";

const About = () => (
  <Fragment>
    <Seo title="About Us" />
    <HeaderFour />
    <Breadcrumb
      pageName="About Us"
      bgImage="images/breadcumb/breadcumb-bg.jpg"
    />
    <ServiceFour className="space-top space-extra-bottom" />
    <AboutSeven />
    <TeamTwo className="space-top space-extra-bottom" />
    <TestimonialThree className="space-top space-extra-bottom" />
    <CtaOne className="space" />
    <BlogFour className="space-top space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default About;
