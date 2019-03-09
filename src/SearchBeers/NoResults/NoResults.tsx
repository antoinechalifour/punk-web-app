import React from "react";
import { Wrapper, Image, Message } from "./styles";

export interface NoResultsProps {
  query: string;
}

export const NoResults: React.FunctionComponent<NoResultsProps> = ({
  query
}) => (
  <Wrapper>
    <Image />
    <Message>
      No match for "<span>{query}</span>"
    </Message>
  </Wrapper>
);
