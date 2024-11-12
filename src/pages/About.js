import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ServiceFour, 
  AboutSeven,
  TeamTwo,
  TestimonialThree,
  CtaOne,
  BlogFour,
  FooterOne
} from '../containers';

const About = ()=> (
  <Fragment>
    <Seo title="About Us" />
    <HeaderOne />
    <Breadcrumb pageName="About Us" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ServiceFour className="space-top space-extra-bottom"/>
    <AboutSeven/>
    <TeamTwo className="space-top space-extra-bottom"/>
    <TestimonialThree className="space-top space-extra-bottom"/>
    <CtaOne className="space"/>
    <BlogFour className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default About;