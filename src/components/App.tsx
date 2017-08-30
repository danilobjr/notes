import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {FloatingInput, Icon, FAB} from 'jsc-react-ui';
import {CardList, CardForm} from 'components';
import {Note} from 'models';

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

  async componentDidMount() {
    const notes = await fetch('api/notes.json')
      .then(response => response.json());

      this.setState({notes});
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
          <FAB
            iconName="plus"
            color="#f1c40f"
            iconColor="#2c3e50"
            onClick={this.handleNewButtonClick}
          />
        </div>
        <CardList
          cards={this.getFilteredCards()}
        />
        <CardForm
          open={modalOpen}
          onSave={this.handleOnModalSave}
          onClose={this.handleOnModalClose}
        />
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
    this.setState({notes, modalOpen: false});
  }
}
