import React from "react";
import { LoadMore } from "./styles";

export interface InfiniteListProps {
  requestMoreItems: () => void;
  renderLoader: () => JSX.Element;
}

export class InfiniteList extends React.Component<InfiniteListProps> {
  private clearObserver?: () => void;

  private loadMoreItems: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.props.requestMoreItems();
      }
    });
  };

  private setUpObserver = (el: HTMLElement | null) => {
    if (el === null) {
      return;
    }

    const options = {
      root: null,
      rootMargin: "10px",
      thrshold: 1.0
    };

    const intersectionObserver = new IntersectionObserver(
      this.loadMoreItems,
      options
    );

    intersectionObserver.observe(el);

    this.clearObserver = () => intersectionObserver.unobserve(el);
  };

  componentWillUnmount() {
    if (this.clearObserver) {
      this.clearObserver();
    }
  }

  render() {
    return (
      <>
        {this.props.children}
        <LoadMore ref={this.setUpObserver}>
          {this.props.renderLoader()}
        </LoadMore>
      </>
    );
  }
}
