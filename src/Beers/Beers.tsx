import React from "react";
import { Subscription } from "rxjs";

import { Beer, BeerStore } from "./Store";
import { BeerItem } from "./BeerItem";
import { BeersList } from "./styles";

export interface BeersProps {
  store: BeerStore;
}

interface BeersState {
  beers: Beer[] | null;
}

export class Beers extends React.Component<BeersProps, BeersState> {
  private subscription?: Subscription;
  private unobserve?: () => void;
  private intersectionObserver?: IntersectionObserver;
  public state: BeersState = {
    beers: null
  };

  loadMoreItems = () => {
    this.props.store.fetchMore();
  };

  private setupLazyLoader = (el: HTMLElement) => {
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

    this.unobserve = () => intersectionObserver.unobserve(el);
  };

  componentDidMount() {
    this.subscription = this.props.store.state$.subscribe(state => {
      this.setState({ beers: state });
      console.log("State:", state);
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.unobserve) {
      this.unobserve();
    }
  }

  getAnimationDelay(itemIndex: number) {
    const normalizedIndex = itemIndex % 25;
    const delay = Math.min(2, normalizedIndex * 0.1);

    return `${delay}s`;
  }

  render() {
    if (!this.state.beers) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <BeersList>
          {this.state.beers!.map((beer, index) => (
            <li
              key={beer.id}
              style={{ animationDelay: this.getAnimationDelay(index) }}
            >
              <BeerItem beer={beer} />
            </li>
          ))}
        </BeersList>
        <span ref={this.setupLazyLoader} />
      </>
    );
  }
}
