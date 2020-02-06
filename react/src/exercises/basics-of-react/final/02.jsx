import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Basics of React - Exercise 2 | Final

class Exercise extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  state = {
    checkedItems: {},
  };

  onCheck = item => {
    const { checkedItems } = this.state;
    this.setState({
      checkedItems: { ...checkedItems, [item]: !checkedItems[item] },
    });
  };

  render() {
    const { items } = this.props;
    const { checkedItems } = this.state;

    return items.map(item => (
      <div key={item}>
        <input
          type="checkbox"
          onChange={() => this.onCheck(item)}
          value={checkedItems[item]}
        />

        {checkedItems[item] ? <b>{item}</b> : <span>{item}</span>}
      </div>
    ));
  }
}

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise items={['dog', 'cat', 'lion', 'giraffe']} />;
};

export default Usage;
