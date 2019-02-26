import React from "react";
import { TextBlock, RoundShape } from "react-placeholder/lib/placeholders";

import { Template } from "../Template";

export interface LoadingProps {}

export const Loading: React.FunctionComponent<LoadingProps> = () => (
  <Template
    brewersTips={<TextBlock rows={3} color="rgba(255, 255, 255, .2)" />}
    description={<TextBlock rows={4} color="rgba(0, 0, 0, .2)" />}
    generalInformation={<TextBlock rows={2} color="rgba(0, 0, 0, .2)" />}
    header={
      <div>
        <TextBlock rows={2} color="rgba(255, 255, 255, .2)" />
      </div>
    }
    hops={<TextBlock rows={5} color="rgba(0, 0, 0, .2)" />}
    image={
      <RoundShape
        color="#f5f5f5"
        style={{
          height: 150,
          width: 150,
          margin: "auto",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2)"
        }}
      />
    }
    malts={<TextBlock rows={3} color="rgba(0, 0, 0, .2)" />}
    yeast={<TextBlock rows={1} color="rgba(0, 0, 0, .2)" />}
  />
);
