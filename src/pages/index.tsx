import * as React from 'react';
import {Component, CSSProperties} from 'react';
import {Card, FloatingInput, Icon} from 'jsc-react-ui';

const styles = {
  wrapper: {
    display: 'flex',
    padding: 10,
    flexWrap: 'wrap'
  } as CSSProperties,
  card: {
    width: 246,
    margin: '25px 0 0 25px',
  },
  icon: {
    margin: '0 14px 0 18px',
  },
};

interface CardModel {
  id: number;
  title: string;
  text: string;
}

interface State {
  initialCards: CardModel[];
  filteredCards: CardModel[];
}

export default class Index extends Component<{}, State> {

  state: State = {
    initialCards: [
      {id:1, title: "Fazer listagem", text: "listar os cards"},
      {id:2, title: "Filtrar listagem", text: "exibir os cards de acordo com a busca"},
      {id:3, title: "Adicionar cards", text: "criar form em modal"}
    ],
    filteredCards: []
  };

  componentWillMount() {
    this.state.filteredCards = this.state.initialCards;
  }

  render() {
    const {filteredCards} = this.state;
    
    return (
        <div>
          <FloatingInput
            style={styles.card}
            placeholder="Search"
            leftElement={<Icon style={styles.icon}
            name="search" />}
            onChange={this.handleFilterChange}
          />
          <div style={styles.wrapper}>
            {filteredCards.map(c => 
              <Card
                key={c.id}
                style={styles.card}
                title={c.title}
              >
                  {c.text}
              </Card>
            )}
          </div>
        </div>
    );
  }

  handleFilterChange = (event) => {
    const {value} = event.target;

    const filteredCards = this.state.initialCards.filter((card) => {
      return card.title.toUpperCase().includes(value.toUpperCase());
    })

    this.setState({filteredCards});
  }
}
