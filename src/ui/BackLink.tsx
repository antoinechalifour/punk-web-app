import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const BackLink = styled(Link).attrs({
  children: <FiArrowLeft />
})`
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  margin-right: 1rem;
`;
