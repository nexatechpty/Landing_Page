import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgLogo = styled.div`
  width: 20px,
  height: 20px
`;
const Logo = ({ image, className }) => (
  <Link to="/">
    <ImgLogo>
      <img src={image} alt="Logo" />
    </ImgLogo>
  </Link>
);

export default Logo;
