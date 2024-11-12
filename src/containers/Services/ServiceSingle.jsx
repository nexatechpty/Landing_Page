import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {List} from '../../components';
import {SidebarTwo} from '../';

// FAQ Data
import faqData from '../../data/faq.json';

const ServiceSingle = ({...restProps})=> (
  <div {...restProps}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-8">          
          <div className="mb-3 pb-3"><img src="images/service/sr-d-1-1.jpg" alt="Project"/></div>
          <h2 className="h4">IT Solution And Business</h2>
          <p>Holisticly benchmark functional products before excellent methods of empowerment. Seamlessly visualize innovative web-readiness whereas extensive initiatives. Completely unleash frictionless data via end-to-end services. Continually unleash virtual e-tailers through magnetic core competencies. Interactively engage distributed alignments via focused alignments. Dynamically fabricate excellent innovation for go forward technology. Intrinsicly impact empowered scenarios after cost effective outsourcing. Synergistically productivate pandemic e-business rather than state of the art e-tailers. Continually expedite customized information with go forward potentialities.</p>
          <div className="row gx-0 mb-4 pb-2 pt-3">
            <div className="col-xl-6"><img src="images/service/sr-d-1-2.jpg" alt="project" className="w-100"/></div>
            <div className="col-xl-6">
              <div className="service-list-box">
                <h3 className="h5 title">Service Features</h3>
                <List className="list-style3">
                  <List.Item><i className="fal fa-check-circle"/>We Provide Flexible IT Services</List.Item>
                  <List.Item><i className="fal fa-check-circle"/>Best IT Solution with Our Team</List.Item>
                  <List.Item><i className="fal fa-check-circle"/>Award Winning Digital Solutions</List.Item>
                  <List.Item><i className="fal fa-check-circle"/>25 Years Skilled Experience</List.Item>
                </List>
              </div>
            </div>
          </div>          
          <h3 className="h5">The challenge of project</h3>
          <p>Interactively engage distributed alignments via focused alignments. Dynamically fabricate excellent innovation for go forward technology. Intrinsicly impact empowered scenarios after cost effective outsourcing. Synergistically productivate pandemic e-business rather than state of the art e-tailers.</p>
          <p>Completely unleash frictionless data via end-to-end services. Continually unleash virtual e-tailers through magnetic core competencies. Interactively engage distributed alignments via focused alignments.</p>
          <div className="row pt-3 mb-30 pb-10 gy-30">
            <div className="col-md-6"><img src="images/service/sr-d-1-3.jpg" alt="project"/></div>
            <div className="col-md-6"><img src="images/service/sr-d-1-4.jpg" alt="project"/></div>
          </div>
          <Accordion defaultActiveKey={faqData[0].questionId} className="accordion-style1 layout2">
            {faqData.map(item => (
              <Accordion.Item key={item.questionId} eventKey={item.questionId}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body><p>{item.answer}</p></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className="col-lg-4">
          <SidebarTwo/>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceSingle;