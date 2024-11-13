import React from "react";
import { Link } from "react-router-dom";

const TeamBoxOne = ({ path, desgination, image, name, className }) => (
  <div className={`team-style1 ${className || ""}`}>
    <div className="team-img">
      <Link>
        <img src={image} alt="teamMember" />
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
      <h3 className="team-title">
        <Link className="text-inherit">{name}</Link>
      </h3>
      <p className="team-degi">{desgination}</p>
    </div>
  </div>
);

export default TeamBoxOne;
