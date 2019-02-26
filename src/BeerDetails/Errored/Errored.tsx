import React from "react";

import { Wrapper, Image, Message } from "./styles";
import { Link } from "react-router-dom";

export interface ErroredProps {}

export const Errored: React.FunctionComponent<ErroredProps> = () => (
  <Wrapper>
    <Image />

    <h1>Gloops</h1>
    <Message>The beer was not found.</Message>

    <Link to="/">Take me back home</Link>
  </Wrapper>
);
