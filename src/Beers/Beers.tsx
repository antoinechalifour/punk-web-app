import React from "react";
import { Subscription } from "rxjs";

import { Beer, BeersStore } from "./Store";
import { BeerItem } from "./BeerItem";
import { BeersList, LoadMore } from "./styles";

export interface BeersProps {
  store: BeersStore;
}

interface BeersState {
  beers: Beer[] | null;
}

export class Beers extends React.Component<BeersProps, BeersState> {
  private subscription?: Subscription;
  private unobserve?: () => void;
  public state: BeersState = {
    beers: null
  };

  loadMoreItems: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.props.store.fetchMore();
      }
    });
  };

  private setupLazyLoader = (el: HTMLElement | null) => {
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

  render() {
    if (!this.state.beers) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <BeersList>
          {this.state.beers.map((beer, index) => (
            <li key={beer.id}>
              <BeerItem beer={beer} />
            </li>
          ))}
        </BeersList>
        <LoadMore ref={this.setupLazyLoader}>Loading...</LoadMore>
      </>
    );
  }
}
