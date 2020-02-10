import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Basics of React - Exercise 1 | Final

class ListItem extends Component {
  static propTypes = {
    bold: PropTypes.bool,
    children: PropTypes.any,
  };

  static defaultProps = {
    bold: false,
    children: null,
  };

  render() {
    const { bold, children } = this.props;
    if (bold) {
      return (
        <li>
          <b>{children}</b>
        </li>
      );
    }

    return <li>{children}</li>;
  }
}

class Exercise extends Component {
  render() {
    return (
      <ul>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem bold>Item 3</ListItem>
      </ul>
    );
  }
}

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
