import React, { PropTypes } from 'react';
import { Button, Panel } from 'react-bootstrap';
import { partial } from 'lodash';

import { cardType } from '../constants/propTypes';


export default class MultiCardPicker extends React.Component {
  static propTypes = {
    cards: PropTypes.arrayOf(cardType.isRequired).isRequired,
    countNeeded: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onCardToggle = this.onCardToggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onCardToggle(id) {
    this.setState({ [id]: !this.state[id] });
  }

  onSubmit() {
    this.props.onSubmit(this.getSelectedIds());
  }

  getSelectedIds() {
    return this.props.cards.filter((c) => !!this.state[c.id]).map((c) => c.id);
  }

  render() {
    const { cards, countNeeded, title, onCancel } = this.props;
    return (
      <Panel
        header={title}
        footer={
          <div>
            <Button onClick={this.onSubmit} disabled={this.getSelectedIds().length !== countNeeded}>OK</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </div>
        }
        className="card-picker multi-card-picker">
        {cards.map((c) =>
          <Button
            key={c.id}
            className={`card ${c.cardType}-${c.id} ${!!this.state[c.id] && 'selected'}`}
            onClick={partial(this.onCardToggle, c.id)} />
        )}
      </Panel>
    );
  }
}
