import React from "react";
import { Subscription } from "rxjs";
import tinycolor from "tinycolor2";

import { Beer, createStore } from "./Store";
import * as styles from "./styles";

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
    if (!this.state.beer) {
      return null;
    }

    const color = tinycolor(this.state.beer.color);
    const textColor = color.isLight()
      ? "rgba(0, 0, 0, .95)"
      : "rgba(255, 255, 255, .95)";

    return (
      <styles.Container>
        <styles.Header>
          <h1>{this.state.beer.name}</h1>
          <p>{this.state.beer.tagline}</p>
        </styles.Header>
        <styles.Content>
          <styles.Image src={this.state.beer.imageUrl} />

          <section>
            <styles.Categories>
              {this.state.beer.categories.map(category => (
                <li key={category}>
                  <styles.CategoryTag
                    style={{ borderColor: color.toHexString() }}
                  >
                    {category}
                  </styles.CategoryTag>
                </li>
              ))}
            </styles.Categories>
          </section>

          <section>
            <styles.Card>
              <styles.CardTitle>About this beer</styles.CardTitle>
              <styles.Description>
                {this.state.beer.description}
              </styles.Description>
            </styles.Card>
          </section>

          <section>
            <styles.Card>
              <styles.CardTitle>General Information</styles.CardTitle>

              <styles.GeneralInfo>
                <styles.InfoGroup>
                  <span>{this.state.beer.alcoholByVolume}%</span>
                  <span>Alcohol by volume</span>
                </styles.InfoGroup>

                <styles.InfoGroup>
                  <span>{this.state.beer.firstBrewed}</span>
                  <span>First brewed</span>
                </styles.InfoGroup>
              </styles.GeneralInfo>
            </styles.Card>
          </section>

          <styles.BrewerTips>
            <div>Brewer's tip</div>
            <div>{this.state.beer.brewerTips}</div>
          </styles.BrewerTips>

          <section>
            <styles.Card>
              <styles.CardTitle>Ingredients</styles.CardTitle>
              <styles.IngredientCategory>Malts</styles.IngredientCategory>
              <styles.IngredientList>
                {this.state.beer.malts.map(malt => (
                  <li key={malt.name}>
                    {malt.amount} of {malt.name}
                  </li>
                ))}
              </styles.IngredientList>

              <styles.IngredientCategory>Hops</styles.IngredientCategory>
              <styles.IngredientList>
                {this.state.beer.hops.map(hop => (
                  <li key={hop.name}>
                    {hop.amount} of {hop.name}
                  </li>
                ))}
              </styles.IngredientList>

              <styles.IngredientCategory>Yeast</styles.IngredientCategory>
              <styles.IngredientList>
                <li>{this.state.beer.yeast}</li>
              </styles.IngredientList>
            </styles.Card>
          </section>
        </styles.Content>
      </styles.Container>
    );
  }
}
