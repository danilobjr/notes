import * as React from 'react';
import {Component} from 'react';
import {CSSProperties} from 'react';
import {Card} from 'jsc-react-ui';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,
  card: {
    width: 246,
  }
};

class CardModel {
  id: number;
  title: string;
  text: string;

  constructor(id:number, title:string, text:string){
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

interface State {
  cards: CardModel[];
}

export default class Index extends Component<{}, State> {

  state: State = {
    cards: [
      new CardModel(1, "Example title1asd", "Example Content"),
    ],
  };

  render() {
    const {cards} = this.state;
    
    return (
        <div style={styles.wrapper}>
          {cards.map(c => <Card key={c.id} style={styles.card} title={c.title}>{c.text}</Card>)}
        </div>
    );
  }
}
