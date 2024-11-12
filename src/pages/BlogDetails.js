import React, {Fragment} from 'react';
import {
  Seo,
  Breadcrumb,
  ScrollTopBtn
} from '../components';
import {
  HeaderOne,
  BlogSingle,
  FooterOne
} from '../containers';

const BlogDetails = () => (
  <Fragment>
    <Seo title="Blog Details" />
    <HeaderOne />
    <Breadcrumb pageName="Blog Details" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <BlogSingle className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default BlogDetails;