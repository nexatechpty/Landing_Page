import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  TeamSingle,
  FooterOne
} from '../containers';

const TeamDetails = ()=> (
  <Fragment>
    <Seo title="Team Details" />
    <HeaderOne />
    <Breadcrumb pageName="Team Details" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <TeamSingle className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default TeamDetails;