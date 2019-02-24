import React from "react";
import { Subscription } from "rxjs";
import {
  TextBlock,
  RoundShape,
  TextRow
} from "react-placeholder/lib/placeholders";

import { Beer, createStore } from "./Store";
import { Template } from "./Template";
import { Image, InfoGroup } from "./styles";

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

  private getBrewerTips(beer: Beer | null) {
    if (beer) {
      return (
        <>
          <div>{beer.brewerTips}</div>
        </>
      );
    } else {
      return <TextBlock rows={3} color="rgba(255, 255, 255, .2)" />;
    }
  }

  private getDescription(beer: Beer | null) {
    if (beer) {
      return <>{beer.description}</>;
    } else {
      return <TextBlock rows={4} color="rgba(0, 0, 0, .2)" />;
    }
  }

  private getGeneralInformation(beer: Beer | null) {
    if (beer) {
      return (
        <>
          <InfoGroup>
            <span>{beer.alcoholByVolume}%</span>
            <span>Alcohol by volume</span>
          </InfoGroup>

          <InfoGroup>
            <span>{beer.firstBrewed}</span>
            <span>First brewed</span>
          </InfoGroup>
        </>
      );
    } else {
      return (
        <>
          <TextBlock rows={2} color="rgba(0, 0, 0, .2)" />
        </>
      );
    }
  }

  private getHeader(beer: Beer | null) {
    if (beer) {
      return (
        <>
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
        </>
      );
    } else {
      return (
        <div>
          <TextBlock rows={2} color="rgba(255, 255, 255, .2)" />
        </div>
      );
    }
  }

  private getImage(beer: Beer | null) {
    if (beer) {
      return <Image src={beer.imageUrl} />;
    } else {
      return (
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
      );
    }
  }

  private getHops(beer: Beer | null) {
    if (beer) {
      return (
        <>
          {beer.hops.map(hop => (
            <li key={`${hop.amount} of ${hop.name}`}>
              {hop.amount} of {hop.name}
            </li>
          ))}
        </>
      );
    } else {
      return <TextBlock rows={5} color="rgba(0, 0, 0, .2)" />;
    }
  }

  private getMalts(beer: Beer | null) {
    if (beer) {
      return (
        <>
          {beer.malts.map(malt => (
            <li key={`${malt.amount} of ${malt.name}`}>
              {malt.amount} of {malt.name}
            </li>
          ))}
        </>
      );
    } else {
      return <TextBlock rows={3} color="rgba(0, 0, 0, .2)" />;
    }
  }

  private getYeast(beer: Beer | null) {
    if (beer) {
      return <li>{beer.yeast}</li>;
    } else {
      return <TextBlock rows={1} color="rgba(0, 0, 0, .2)" />;
    }
  }

  render() {
    const { beer } = this.state;

    return (
      <Template
        brewersTips={this.getBrewerTips(beer)}
        description={this.getDescription(beer)}
        generalInformation={this.getGeneralInformation(beer)}
        header={this.getHeader(beer)}
        image={this.getImage(beer)}
        hops={this.getHops(beer)}
        malts={this.getMalts(beer)}
        yeast={this.getYeast(beer)}
      />
    );
  }
}
