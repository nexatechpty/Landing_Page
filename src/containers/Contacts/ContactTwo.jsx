import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import {InfoMedia, FormFive} from '../../components';

const ContactTwo = ({...restProps})=> (
  <div {...restProps}>
    <div className="container">
      <Tab.Container  id="contactTab" defaultActiveKey='tabno1'>
        <Nav className="contact-tab-menu">
          <Nav.Link eventKey="tabno1">
            <span className="btn-img"><img src="images/contact/contact-1-1.jpg" alt="tabicon"/></span>
            <span className="btn-title h6">TechBiz, Germany</span>
            <span className="btn-text">86 KKL, FrankFrut</span>
          </Nav.Link>
          <Nav.Link eventKey="tabno2">
            <span className="btn-img"><img src="images/contact/contact-1-2.jpg" alt="tabicon"/></span>
            <span className="btn-title h6">TechBiz, Australia</span>
            <span className="btn-text">259 NYD, Canberra</span>
          </Nav.Link>
          <Nav.Link eventKey="tabno3">
            <span className="btn-img"><img src="images/contact/contact-1-3.jpg" alt="tabicon"/></span>
            <span className="btn-title h6">TechBiz, United State</span>
            <span className="btn-text">259 NYD, NewYork</span>
          </Nav.Link>
        </Nav>
        <Tab.Content>          
          <Tab.Pane eventKey="tabno1">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Germany Office Address</h3>                  
                  <p className="contact-box__text">Completely recaptiualize 24/7 communities via standards compliant metrics whereas web-enabled content</p>
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Phone Number & Email"
                    info={<><a href="tel:+310259121563">+(310) 2591 21563</a><a href="mailto:info@example.com">info@example.com</a></>}
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Our Office Address"
                    info="258 Dancing Street, Miland Line, HUYI 21563, FrankFrut"
                  />
                  <InfoMedia
                    icon="far fa-clock"
                    title="Official Work Time"
                    info="7:00am - 6:00pm ( Mon - Fri ) Sat, Sun & Holiday Closed"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">                
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Leave a Message</h3>
                  <p className="contact-box__text">We’re Ready To Help You</p>
                  <FormFive/>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="tabno2">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Australia Office Address</h3>                  
                  <p className="contact-box__text">Completely recaptiualize 24/7 communities via standards compliant metrics whereas web-enabled content</p>
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Phone Number & Email"
                    info={<><a href="tel:+310259121563">+(310) 2591 21563</a><a href="mailto:info@example.com">info@example.com</a></>}
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Our Office Address"
                    info="258 Dancing Street, Miland Line, HUYI 21563, Canberra"
                  />
                  <InfoMedia
                    icon="far fa-clock"
                    title="Official Work Time"
                    info="7:00am - 6:00pm ( Mon - Fri ) Sat, Sun & Holiday Closed"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">                
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Leave a Message</h3>
                  <p className="contact-box__text">We’re Ready To Help You</p>
                  <FormFive/>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="tabno3">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="contact-box">
                  <h3 className="contact-box__title h4">United State Office Address</h3>                  
                  <p className="contact-box__text">Completely recaptiualize 24/7 communities via standards compliant metrics whereas web-enabled content</p>
                  <InfoMedia
                    icon="fal fa-phone-alt"
                    title="Phone Number & Email"
                    info={<><a href="tel:+310259121563">+(310) 2591 21563</a><a href="mailto:info@example.com">info@example.com</a></>}
                  />
                  <InfoMedia
                    icon="far fa-map-marker-alt"
                    title="Our Office Address"
                    info="258 Dancing Street, Miland Line, HUYI 21563, NewYork"
                  />
                  <InfoMedia
                    icon="far fa-clock"
                    title="Official Work Time"
                    info="7:00am - 6:00pm ( Mon - Fri ) Sat, Sun & Holiday Closed"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-30">                
                <div className="contact-box">
                  <h3 className="contact-box__title h4">Leave a Message</h3>
                  <p className="contact-box__text">We’re Ready To Help You</p>
                  <FormFive/>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  </div>
);

export default ContactTwo;