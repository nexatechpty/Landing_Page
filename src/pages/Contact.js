import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne, 
  ContactTwo, 
  FooterOne
} from '../containers';

const Contact = () => (
  <Fragment>
    <Seo title="Contact Us" />
    <HeaderOne />
    <Breadcrumb pageName="Contact Us" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ContactTwo className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Contact;