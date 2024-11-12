import React from 'react';
import {Link} from 'react-router-dom';

const IconLink = ({title, children, className})=> (
  <div className={`icon-link ${className || ''}`}>
    {title && <span className="social-title">{title}</span>}
    {children}
  </div>
);

IconLink.Item = ({path, icon})=> (
  <Link to={path || '#'}><i className={icon}/></Link>
);

export default IconLink;