import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Basics of React - Exercise 3 | Final

class TextInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { value } = this.props;
    return <input type="text" onChange={this.onChange} value={value} />;
  }
}

class Exercise extends Component {
  state = {
    value: '',
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <TextInput onChange={this.onChange} value={value} />
        <div>{value}</div>
      </div>
    );
  }
}

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
