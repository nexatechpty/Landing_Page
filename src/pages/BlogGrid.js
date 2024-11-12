import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {HeaderOne, BlogThree, FooterOne} from '../containers';

const BlogGrid = () => (
  <Fragment>
    <Seo title="Blog Grid" />
    <HeaderOne />
    <Breadcrumb pageName="Blog Grid" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <BlogThree className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default BlogGrid;