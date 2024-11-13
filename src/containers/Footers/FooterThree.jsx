import React from "react";
import { Link } from "react-router-dom";
import {
  InfoMedia,
  Widget,
  AboutWidget,
  CategoryWidget,
  RecentPostWidget,
  IconLink,
} from "../../components/";

// Widget Datas
import widgetsdata from "../../data/widgets.json";

const { pageList, exploreLinks, recentPosts } = widgetsdata;

const FooterThree = () => (
  <footer className="footer-wrapper footer-layout3">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="footer-media style2 col-sm ">
            <InfoMedia
              icon="fal fa-map-marker-alt"
              title="Office Address"
              info="173 Oxford Road, 2196, Rosebank, Johannesburg, South Africa"
            />
          </div>
          <div className="footer-media style2 col-sm">
            <InfoMedia
              icon="fal fa-clock"
              title="Working Hours"
              info="Weekdays 8am - 22pm Weekend Closed"
            />
          </div>
          <div className="footer-media style2 col-sm">
            <InfoMedia
              icon="fal fa-phone-volume"
              title="Contact Us"
              info={
                <>
                  <a href="mailto:info@nexatech.co.za">info@nexatech.co.za</a>
                  <br />
                  <a href="tel:+27647045825">(+27) 64 704 5825</a>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-auto">
            <Widget widgetTitle="About Us" className="footer-widget">
              <AboutWidget>
                <AboutWidget.Text>
                  Our expertise spans web development, cloud services, IT
                  management, and machine learning, allowing us to meet the
                  diverse needs of our clients.
                </AboutWidget.Text>
                {/* <IconLink className="footer-social">
                  <IconLink.Item icon="fab fa-facebook-f" path="/" />
                  <IconLink.Item icon="fab fa-twitter" path="/" />
                  <IconLink.Item icon="fab fa-behance" path="/" />
                  <IconLink.Item icon="fab fa-youtube" path="/" />
                  <IconLink.Item icon="fab fa-instagram" path="/" />
                </IconLink> */}
              </AboutWidget>
            </Widget>
          </div>
          <div className="col-6 col-xl-auto">
            <Widget
              widgetTitle="Links"
              className="widget_nav_menu footer-widget"
            >
              <CategoryWidget>
                {pageList.map((cat) => (
                  <CategoryWidget.Item key={cat.name} path={cat.path}>
                    {cat.name}
                  </CategoryWidget.Item>
                ))}
              </CategoryWidget>
            </Widget>
          </div>
          <div className="col-6 col-xl-auto">
            <Widget
              widgetTitle="Explore"
              className="widget_nav_menu footer-widget"
            >
              <CategoryWidget>
                {exploreLinks.map((cat) => (
                  <CategoryWidget.Item key={cat.name} path={cat.path}>
                    {cat.name}
                  </CategoryWidget.Item>
                ))}
              </CategoryWidget>
            </Widget>
          </div>
          {/* <div className="col-md-6 col-xl-auto">
            <Widget widgetTitle="Lastest Post" className="footer-widget">
              {recentPosts.slice(0, 2).map((post) => (
                <RecentPostWidget
                  key={post.id}
                  title={post.title}
                  image={post.image}
                  date={post.date}
                />
              ))}
            </Widget>
          </div> */}
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <p className="copyright-text">
          Copyright <i className="fal fa-copyright" /> 2024{" "}
          <Link className="text-white" to="/">
            NexaTech
          </Link>
          . All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterThree;
