import React from "react";
import { Subscription } from "rxjs";

import { Beer, createStore } from "./Store";
import { Template } from "./Template";
import { BrewerTips } from "./BrewerTips";
import { Description } from "./Description";
import { GeneralInformation } from "./GeneralInformation";
import { Header } from "./Header";
import { Image } from "./Image";
import { Hops } from "./Hops";
import { Malts } from "./Malts";
import { Yeast } from "./Yeast";

export interface BeerDetailsProps {
  id: string;
}

interface BeerDetailsState {
  beer: Beer | null;
}

export class BeerDetails extends React.Component<
  BeerDetailsProps,
  BeerDetailsState
> {
  public state: BeerDetailsState = {
    beer: null
  };
  private subscription?: Subscription;
  private store = createStore(this.props.id);

  public componentDidMount() {
    this.subscription = this.store.state$.subscribe(this.updateBeer);
  }

  public componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateBeer = (beer: Beer) => this.setState({ beer });

  render() {
    const { beer } = this.state;

    return (
      <Template
        brewersTips={<BrewerTips beer={beer} />}
        description={<Description beer={beer} />}
        generalInformation={<GeneralInformation beer={beer} />}
        header={<Header beer={beer} />}
        image={<Image beer={beer} />}
        hops={<Hops beer={beer} />}
        malts={<Malts beer={beer} />}
        yeast={<Yeast beer={beer} />}
      />
    );
  }
}
