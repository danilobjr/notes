import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {Card} from 'jsc-react-ui';

const styles = {
  wrapper: {
    display: 'flex',
    padding: 10,
    flexWrap: 'wrap',
  } as CSSProperties,
  card: {
    width: 246,
    margin: '25px 0 0 25px',
  },
};

interface CardModel {
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
      {id:1, title: "Example title1", text: "Example Content"},
      {id:2, title: "Example title2", text: "Example Content"},
    ],
  };

  render() {
    const {cards} = this.state;
    
    return (
        <div style={styles.wrapper}>
          {cards.map(c => 
            <Card
              key={c.id}
              style={styles.card}
              title={c.title}
            >
                {c.text}
            </Card>
          )}
        </div>
    );
  }
}
