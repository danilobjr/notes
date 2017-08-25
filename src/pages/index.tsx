import * as React from 'react';
import {Component} from 'react';
import {FloatingInput, Icon} from 'jsc-react-ui';
import {CardList} from './../components/CardList';
import {Note} from './../types/Note';

const styles = {
  container: {
    padding: 10,
  },
  filter: {
    width: 246,
    margin: '25px 0 0 25px',
  },
  icon: {
    margin: '0 14px 0 18px',
  },
};

interface State {
  cards: Note[];
  filter: string;
}

export default class Index extends Component<{}, State> {

  state: State = {
    cards: [],
    filter: '',
  };

  componentDidMount() {
    fetch('/static/api/cards.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({cards: responseJson});
      });
  }

  render() {
    const {cards} = this.state;

    return (
      <div style={styles.container}>
        <FloatingInput
          style={styles.filter}
          placeholder="Search"
          leftElement={<Icon style={styles.icon}
          name="search" />}
          onChange={this.handleFilterChange}
        />
        <CardList cards={this.getFilteredCards()} />
      </div>
    );
  }

  getFilteredCards = () => {
    const {cards, filter} = this.state;

    return cards.filter((card) => {
      return card.title.toUpperCase().includes(filter.toUpperCase());
    });
  }

  handleFilterChange = (event: any) => {
    const {value} = event.target;
    this.setState({filter: value});
  }
}
