import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'jsc-react-ui';
import {Note} from 'models';

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

interface State extends Note {}

export class CardForm extends Component<Props, State> {

  static defaultProps: Props = {
    open: false,
    onSave: () => { return; },
    onClose: () => { return; },
  };

  state: State = this.getInitialState();

  render() {
    const {open, onClose} = this.props;
    const {text, title} = this.state;

    return (
      <Modal
        style={styles.modal}
        noBackdrop
        open={open}
        onClose={onClose}
      >
        <ModalHeader>
          <input
            style={styles.input}
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </ModalHeader>

        <ModalBody>
          <textarea
            style={styles.textarea}
            placeholder="Write some thoughts."
            name="text"
            value={text}
            onChange={this.handleInputChange}
          />
        </ModalBody>

        <ModalFooter>
          <Button flat onClick={this.handleSaveButtonClick}>Save</Button>
        </ModalFooter>
      </Modal>
    );
  }

  handleInputChange = (event: any) => {
    const {target} = event;
    const {value, name} = target;

    this.setState({
      [name]: value,
    });
  }

  handleSaveButtonClick = () => {
    if (this.state.title !== '') {
      this.props.onSave(this.state);
      this.setState(this.getInitialState());
    } else {
      this.props.onClose();
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
