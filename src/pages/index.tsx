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

//não consegui passar este estilo na div
const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export default class Index extends Component {
  render() {
    return (
        <div style={styles.wrapper}>
          <Card
            style={styles.card}
            title="Card 1"
            image="https://facebook.github.io/react/img/logo.svg">
              Sed tempus, odio nec laoreet pulvinar.
          </Card>
          <Card
            style={styles.card}
            title="Card 2"
            image="https://facebook.github.io/react/img/logo.svg">
              Sed tempus, odio nec laoreet pulvinar.
          </Card>
        </div>
    );
  }
}
