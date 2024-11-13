import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  ServiceFive,
  CtaOne,
  ProcessThree,
  TestimonialOne,
  FooterOne,
  HeaderFour,
} from "../containers";

const Service = () => (
  <Fragment>
    <Seo title="Services" />
    <HeaderFour />
    <Breadcrumb
      pageName="Services"
      bgImage="images/breadcumb/breadcumb-bg.jpg"
    />
    <ServiceFive className="space-top space-extra-bottom" />
    <CtaOne className="space" />
    <ProcessThree className="space-top space-extra-bottom" />
    <TestimonialOne className="space-top space-extra-bottom" />
    <FooterOne />
    <ScrollTopBtn />
  </Fragment>
);

export default Service;
