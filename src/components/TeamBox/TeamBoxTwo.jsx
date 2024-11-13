import React from "react";
import { Link } from "react-router-dom";

const TeamBoxOne = ({ path, desgination, image, name }) => (
  <div className="team-style2">
    <div className="team-img">
      <div className="team-shape1"></div>
      <div className="team-shape2"></div>
      <Link>
        <img src={image} alt="teamavater" />
      </Link>
      <div className="team-social">
        <Link>
          <i className="fab fa-facebook-f" />
        </Link>
        <Link>
          <i className="fab fa-twitter" />
        </Link>
        <Link>
          <i className="fab fa-instagram" />
        </Link>
        <Link>
          <i className="fab fa-behance" />
        </Link>
        <Link>
          <i className="fab fa-youtube" />
        </Link>
      </div>
    </div>
    <div className="team-content">
      <h3 className="team-title h5">
        <Link className="text-inherit" to={path}>
          {name}
        </Link>
      </h3>
      <p className="team-degi">{desgination}</p>
    </div>
  </div>
);

export default TeamBoxOne;
