import * as React from 'react';
import {CSSProperties, SFC} from 'react';
import {Card} from 'jsc-react-ui';
import {CardModel} from './../types/card-model'

const styles = {
  wrapper: {
    display: 'flex',
    paddingTop: 10,
    flexWrap: 'wrap',
  } as CSSProperties,
  card: {
    width: 246,
    margin: '25px 0 0 25px',
  },
};

interface Props {
  cards: CardModel[];
}

export const CardList: SFC<Props> = ({cards}) => (
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
