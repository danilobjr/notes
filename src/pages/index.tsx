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
}

interface State {
  cards: CardModel[];
}

export default class Index extends Component<{}, State> {

  state: State = {
    cards: [
      {id: 1, title:"Example title1", text: "Example Content"},
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
