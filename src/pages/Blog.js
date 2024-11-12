import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {HeaderOne, BlogOne, FooterOne} from '../containers';

const Blog = () => (
  <Fragment>
    <Seo title="Blog List" />
    <HeaderOne />
    <Breadcrumb pageName="Blog List" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <BlogOne className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Blog;