import React from "react";

import { Title } from "../styles";
import { Wrapper, Image, Message } from "./styles";

export interface NoResultsProps {
  query: string;
}

export const NoResults: React.FunctionComponent<NoResultsProps> = ({
  query
}) => (
  <>
    <Title>No results found</Title>
    <Wrapper>
      <Image />
      <Message>
        No match for "<span>{query}</span>"
      </Message>
    </Wrapper>
  </>
);
