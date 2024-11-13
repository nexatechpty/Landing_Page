import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
<<<<<<< HEAD
=======
  HeaderFour,
>>>>>>> fb631e57069a92ea7b97f8c1ff9595f6be9facbf
  ServiceFour,
  AboutSeven,
  TeamTwo,
  TestimonialThree,
  CtaOne,
  BlogFour,
  FooterOne,
<<<<<<< HEAD
  HeaderFour,
=======
>>>>>>> fb631e57069a92ea7b97f8c1ff9595f6be9facbf
} from "../containers";

const About = () => (
  <Fragment>
    <Seo title="About Us" />
    <HeaderFour />
<<<<<<< HEAD
    <Breadcrumb
      pageName="About Us"
      bgImage="images/breadcumb/breadcumb-bg.jpg"
    />
=======
    <Breadcrumb pageName="About Us" bgImage="images/babt_bg.png" />
>>>>>>> fb631e57069a92ea7b97f8c1ff9595f6be9facbf
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
