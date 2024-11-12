import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ProjectThree,
  FooterOne
} from '../containers';

const Project = ()=> (
  <Fragment>
    <Seo title="Projects" />
    <HeaderOne />
    <Breadcrumb pageName="Projects" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <ProjectThree className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Project;