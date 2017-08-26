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
  notes: Note[];
  filter: string;
}

export default class Index extends Component<{}, State> {

  state: State = {
    notes: [],
    filter: '',
  };

  componentDidMount() {
    fetch('/static/api/notes.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({notes: responseJson});
      });
  }

  render() {
    const {notes} = this.state;

    return (
      <div style={styles.container}>
        <FloatingInput
          style={styles.filter}
          placeholder="Search"
          leftElement={<Icon style={styles.icon} name="search" />}
          onChange={this.handleFilterChange}
        />
        <CardList cards={this.getFilteredCards()} />
      </div>
    );
  }

  getFilteredCards = () => {
    const {notes, filter} = this.state;

    return notes.filter((note) => {
      return note.title.toUpperCase().includes(filter.toUpperCase());
    });
  }

  handleFilterChange = (event: any) => {
    const {value} = event.target;
    this.setState({filter: value});
  }
}
