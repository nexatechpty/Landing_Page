import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  PricePlanTwo,
  CtaOne,
  BlogFour,
  FooterOne
} from '../containers';

const PricePlan = ()=> (
  <Fragment>
    <Seo title="Pricing Plans" />
    <HeaderOne />
    <Breadcrumb pageName="Pricing Plans" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <PricePlanTwo className="space-top space-extra-bottom"/>
    <CtaOne className="space"/>
    <BlogFour className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default PricePlan;