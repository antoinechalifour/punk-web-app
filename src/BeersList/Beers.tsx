import React from "react";
import { Subscription } from "rxjs";

import { BeersStore } from "./Store";
import { BeerPreview } from "../BeerPreview";
import { BeersList } from "./styles";
import { Header } from "./Header";
import { Beer } from "../types";
import { InfiniteList } from "../ui/InfiniteList";

export interface BeersProps {
  store: BeersStore;
}

interface BeersState {
  beers: Beer[] | null;
}

export class Beers extends React.Component<BeersProps, BeersState> {
  private subscription?: Subscription;
  public state: BeersState = {
    beers: null
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
  }

  render() {
    if (!this.state.beers) {
      return <div>Loading...</div>;
    }

    return (
      <main>
        <Header />
        <InfiniteList
          renderLoader={() => <>Loading...</>}
          requestMoreItems={this.props.store.fetchMore}
        >
          <BeersList>
            {this.state.beers.map((beer, index) => (
              <li key={beer.id}>
                <BeerPreview
                  id={beer.id}
                  imageUrl={beer.imageUrl}
                  name={beer.name}
                  tagline={beer.tagline}
                />
              </li>
            ))}
          </BeersList>
        </InfiniteList>
      </main>
    );
  }
}
