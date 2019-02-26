import React from "react";

import { Wrapper, InnerLayout } from "./styles";
import { Card, CardContent } from "../../ui/Card";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";

export interface LoadingSkelletonProps {}

export const LoadingSkelleton: React.FunctionComponent<
  LoadingSkelletonProps
> = () => (
  <Wrapper>
    {Array.from(new Array(5), (_, index) => index).map(index => (
      <li key={index}>
        <Card>
          <CardContent>
            <InnerLayout>
              <RectShape
                color="rgba(0, 0, 0, .1)"
                style={{ height: 75, width: 75 }}
              />
              <TextBlock rows={2} color="rgba(0, 0, 0, .1)" />
            </InnerLayout>
          </CardContent>
        </Card>
      </li>
    ))}
  </Wrapper>
);
