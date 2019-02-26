import React, { useRef } from "react";

import { useScrollEnd } from "../../hooks/useScrollEnd";
import { LoadMore } from "./styles";

export interface InfiniteListProps {
  requestMoreItems: () => void;
  renderLoader: () => JSX.Element;
}

export const InfiniteList: React.FunctionComponent<InfiniteListProps> = ({
  children,
  renderLoader,
  requestMoreItems
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useScrollEnd(ref, requestMoreItems);

  return (
    <>
      {children}
      <LoadMore ref={ref}>{renderLoader()}</LoadMore>
    </>
  );
};
