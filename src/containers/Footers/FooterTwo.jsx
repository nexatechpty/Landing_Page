import React from 'react';
import {Link} from 'react-router-dom';
import {
  Logo,
  IconLink,
  Widget,
  AboutWidget,
  CategoryWidget,
  FormTwo,
  TableOne
} from '../../components'; 


// Widget Datas
import widgetsdata from '../../data/widgets.json';

const {pageList, exploreLinks} = widgetsdata;

const FooterTwo = ()=> (
  <footer className="footer-wrapper footer-layout2 background-image" style={{backgroundImage: 'url(images//bg/footer-bg-2-1.jpg)'}}>
    <div className="footer-top">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-30">
          <div className="col-sm-auto">
            <Logo image="images/logo-white.png"/>
          </div>
          <div className="col-sm-auto">
            <IconLink className="footer-social" title="Follow Us On:">
              <IconLink.Item icon="fab fa-facebook-f" path="/"/>
              <IconLink.Item icon="fab fa-twitter" path="/"/>
              <IconLink.Item icon="fab fa-behance" path="/"/>
              <IconLink.Item icon="fab fa-youtube" path="/"/>
              <IconLink.Item icon="fab fa-instagram" path="/"/>
            </IconLink>
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between gx-80">
          <div className="col-md-6 col-lg-4 col-xl-auto col-xxl order-2 order-lg-1">
            <Widget widgetTitle="Quick Links" className="footer-widget widget_nav_menu">
              <CategoryWidget className="footer-links">
                {pageList.map(cat => (
                  <CategoryWidget.Item key={cat.name} path={cat.path}>{cat.name}</CategoryWidget.Item>
                ))}
                {exploreLinks.map(cat => (
                  <CategoryWidget.Item key={cat.name} path={cat.path}>{cat.name}</CategoryWidget.Item>
                ))}
              </CategoryWidget>
            </Widget>
          </div>
          <div className="col-lg-4 col-xl-auto order-1 order-lg-2">
            <Widget widgetTitle="About Company" className="footer-widget">
              <AboutWidget>
                <AboutWidget.Text>Continually evolve worldwide vortals rather than process centric human capital.wide benefits via quality niches provide access without plagiarize collaborative alignments after</AboutWidget.Text>
                <FormTwo/>
              </AboutWidget>
            </Widget>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-auto order-3">
            <Widget widgetTitle="Working Hours" className="footer-widget">
              <TableOne className="footer-schedule">
                <TableOne.Item title="Mone - Fri:" text="	09:00 - 06:00" />
                <TableOne.Item title="Saturday:" text="09:00 - 12:00" />
                <TableOne.Item title="Sunday" text="Closed" />
              </TableOne>
              <div className="footer-number">
                <h4 className="title h6">Need Help? Contact Number</h4>
                <a href="tel:+248215621532" className="info">+(248) 2156-21532</a>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <p className="copyright-text">Copyright <i className="fal fa-copyright"/> 2022 <Link className="text-white" to="/">TechBiz</Link>. All rights reserved by <a className="text-white" href="https://themeforest.net/user/vecuro_themes">Vecuro</a>.</p>
      </div>
    </div> 
  </footer>
);

export default FooterTwo;