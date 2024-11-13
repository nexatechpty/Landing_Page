import React, { Fragment } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { ContactTwo, FooterOne, FooterThree, HeaderFour } from "../containers";

const Contact = () => (
  <Fragment>
    <Seo title="Contact Us" />
    <HeaderFour />
    <Breadcrumb pageName="Contact Us" bgImage="images/bg/footer-bg-1-1.jpg" />
    <ContactTwo className="space-top space-extra-bottom" />
    <FooterThree />
    <ScrollTopBtn />
  </Fragment>
);

export default Contact;
