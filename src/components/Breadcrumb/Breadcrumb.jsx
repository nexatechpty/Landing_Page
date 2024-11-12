import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = ({pageName, bgImage}) => (
  <div className="breadcumb-wrapper background-image" style={{backgroundImage: `url('${bgImage}')`}}>
      <div className="container z-index-common">
          <div className="breadcumb-content">
              <h1 className="breadcumb-title">{pageName}</h1>
              <div className="breadcumb-menu-wrap">
                  <ul className="breadcumb-menu">
                      <li><Link to="/">Home</Link></li>
                      <li>{pageName}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
);

export default Breadcrumb;