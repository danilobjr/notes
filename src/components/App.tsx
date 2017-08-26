import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {FloatingInput, Icon, IconButton} from 'jsc-react-ui';
import {CardList} from './../components/CardList';
import {CardForm} from './../components/CardForm';
import {Note} from './../models/Note';

const styles = {
  container: {
    padding: 10,
  },
  actionContainer: {
    display: 'flex',
    justifyContent : 'space-between',
    margin: '25px 25px 0 25px',
  } as CSSProperties,
  filter: {
    width: 246,
  },
  icon: {
    margin: '0 14px 0 18px',
  },
  iconButton : {
    backgroundColor: '#F1C40F',
  },
};

interface State {
  notes: Note[];
  filter: string;
  modalOpen: boolean;
}

export class App extends Component<{}, State> {

  state: State = {
    notes: [],
    filter: '',
    modalOpen: false,
  };

  componentDidMount() {
    fetch('/static/api/notes.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({notes: responseJson});
      });
  }

  render() {
    const {notes, modalOpen} = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.actionContainer}>
          <FloatingInput
            style={styles.filter}
            placeholder="Search"
            leftElement={<Icon style={styles.icon} name="search" />}
            onChange={this.handleFilterChange}
          />
          <IconButton style={styles.iconButton}
            iconName="plus"
            onClick={this.handleNewButtonClick} />
        </div>
        <CardList cards={this.getFilteredCards()} />
        <CardForm open={modalOpen}
          onSave={this.handleOnModalSave}
          onClose={this.handleOnModalClose} />
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

  handleNewButtonClick = () => {
    this.setState({modalOpen: true});
  }

  handleOnModalClose = () => {
    this.setState({modalOpen: false});
  }

  handleOnModalSave = (note: Note) => {
    const notes = [...this.state.notes, note];
    this.setState({notes: notes, modalOpen: false});
  }
}
