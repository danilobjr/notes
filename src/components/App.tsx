import * as React from 'react';
import {Component, CSSProperties, ChangeEvent} from 'react';
import {FloatingInput, Icon, FAB} from 'jsc-react-ui';
import {CardList, CardForm} from 'components';
import {Note} from 'models';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setFilter, openAddModal, closeAddModal, addCard} from './../reducers/filter';

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
  modalOpen: boolean;
}

interface Props {
  filter: string;
  modalOpen: boolean;
  notes: Note[];
  dispatch: any;
}

class Main extends Component<Props, State> {

  state: State = {
    notes: [],
    modalOpen: false,
  };

  async componentDidMount() {
    const notes = await fetch('api/notes.json')
      .then(response => response.json());

      this.setState({notes});
  }

  render() {
    const {notes, modalOpen, filter} = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.actionContainer}>
          <FloatingInput
            style={styles.filter}
            placeholder="Search"
            value={filter}
            leftElement={<Icon style={styles.icon} name="search" />}
            onChange={this.handleFilterChange as any}
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
    //const {notes} = this.state;
    const {notes, filter} = this.props;

    return notes.filter((note) => {
      return note.title.toUpperCase().includes(filter.toUpperCase());
    });
  }

  handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    this.props.dispatch(setFilter(value));
  }

  handleNewButtonClick = () => {
    this.props.dispatch(openAddModal());
  }

  handleOnModalClose = () => {
    this.props.dispatch(closeAddModal());
  }

  handleOnModalSave = (note: Note) => {

    this.props.dispatch(addCard(note.id, note.title, note.text));
    this.handleOnModalClose();
  }
}

let mapStateToProps = function(state: any){
  return {filter: state.filter, modalOpen: state.modal, notes: state.notes};
};

export const App = connect(mapStateToProps)(Main);
