import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgLogo = styled.div`
  width: 120px;
  height: full;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

const Logo = ({ image, className }) => (
  <Link to="/" className={className}>
    <ImgLogo>
      <img src={image} alt="Logo" />
    </ImgLogo>
  </Link>
);

export default Logo;
