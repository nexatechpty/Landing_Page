import React from "react";
import "./header.css";
import {
  InfoMedia,
  HeaderTop,
  List,
  IconLink,
  HeaderSticky,
  Logo,
  Button,
  MobileMenu,
  MainMenu,
  IconButton,
} from "../../components";

const HeaderFour = () => (
  <header className="vs-header header-layout3">
    <div className="header-box-wrap container position-relative d-none d-xl-block">
      <InfoMedia
        className="header-box"
        icon="fas fa-phone-alt"
        title="Call Us For Free"
        info={<a href="tel:+27647045825">+(27) 647045825</a>}
      />
    </div>
    <HeaderTop>
      <HeaderTop.Left>
        <List className="header-links style-white">
          <List.Item>
            <i className="far fa-phone-alt" />
            <a href="tel:+27647045825">(+27) 64 704 5825</a>
          </List.Item>
          <List.Item className="d-none d-xxl-inline-block">
            <i className="far fa-map-marker-alt" />
            173 Oxford road, Rosebank, 2196, Johannesburg
          </List.Item>
          <List.Item>
            <i className="far fa-envelope" />
            <a href="mailto:info@nexatech.co.za">info@nexatech.co.za</a>
          </List.Item>
        </List>
      </HeaderTop.Left>
      <HeaderTop.Right>
        <IconLink className="header-social style-white" title="Follow Us On:">
          <IconLink.Item icon="fab fa-facebook-f" path="/" />
          <IconLink.Item icon="fab fa-twitter" path="/" />
          <IconLink.Item icon="fab fa-instagram" path="/" />
          <IconLink.Item icon="fab fa-behance" path="/" />
          <IconLink.Item icon="fab fa-youtube" path="/" />
        </IconLink>
      </HeaderTop.Right>
    </HeaderTop>
    <HeaderSticky>
      <div className="container">
        <div className="menu-area">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <Logo image="images/nexatech_logo.png" />
            </div>
            <div className="col-auto">
              <MainMenu className="menu-style3 d-none d-lg-block" />
              <MobileMenu />
            </div>
            <div className="col-auto d-none d-lg-block">
              <div className="header-btns">
                <Button path="/contact" className="d-none d-xxl-inline-block">
                  Contact Us
                  <i className="far fa-arrow-right" />
                </Button>
                <IconButton className="style3 sideMenuToggler">
                  <i className="far fa-bars" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderSticky>
  </header>
);

export default HeaderFour;
