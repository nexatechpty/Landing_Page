import React, {Fragment} from 'react';
import {
  Seo,
  Breadcrumb,
  ScrollTopBtn
} from '../components';
import {
  HeaderOne,
  NotFoundOne,
  FooterOne
} from '../containers';

const NotFound = ()=> (
  <Fragment>
    <Seo title="Error Page" />
    <HeaderOne />
    <Breadcrumb pageName="Error Page" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <NotFoundOne />
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default NotFound;