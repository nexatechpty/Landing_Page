import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  ServiceFive,
  CtaOne,
  ProcessThree,
  TestimonialOne,
  // FooterOne,
  HeaderFour,
  FooterThree,
} from "../containers";

const Service = () => (
  <Fragment>
    <Seo title="Services" />
    <HeaderFour />
    <Breadcrumb pageName="Services" bgImage="images/bg/footer-bg-1-1.jpg" />
    <ServiceFive className="space-top space-extra-bottom" />
    <CtaOne className="space" />
    <ProcessThree className="space-top space-extra-bottom" />
    <TestimonialOne className="space-top space-extra-bottom" />
    <FooterThree />
    <ScrollTopBtn />
  </Fragment>
);

export default Service;
