import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'jsc-react-ui';
import {Note} from './../models/Note';

const styles = {
  modal: {
    width: 500,
    height: 400,
    backgroundColor: '#fff',
    display: 'flex',
    flexFlow: 'column',
  },
  input: {
    border: 'none',
    fontWeight: 600,
    fontSize: '1.1em',
    flex: 1,
  } as CSSProperties,
  textarea: {
    border: 'none',
    resize: 'none',
    flex: 1,
  },
};

interface Props {
  open: boolean;
  onSave?: (note: Note) => void;
  onClose?: () => void;
}

export class CardForm extends Component<Props, Note> {

  props: Props = {
    open: false,
  };

  state: Note = this.getInitialState();

  render() {
    const {open} = this.props;

    return (
      <div>
        <Modal
          style={styles.modal}
          noBackdrop
          open={open}
          onClose={this.props.onClose}
        >
          <ModalHeader>
            <input
              style={styles.input}
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </ModalHeader>

          <ModalBody>
            <textarea
              style={styles.textarea}
              placeholder="Write some thoughts."
              name="text"
              value={this.state.text}
              onChange={this.handleInputChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button flat onClick={this.handleSaveButtonClick}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  handleInputChange = (event: any) => {
    const {target} = event;
    const {value} = target;
    const {name} = target;

    this.setState({
      [name]: value,
    });
  }

  handleSaveButtonClick = () => {
    if (this.state.title !== '') {
      this.props.onSave(this.state);
      this.setState(this.getInitialState());
    } else {
      alert('Title is mandatory');
    }
  }

  getInitialState() {
    return {
      id : +new Date(),
      title : '',
      text : '',
    };
  }
}
