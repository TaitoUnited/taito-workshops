import React, { Component } from 'react';

// Basics of React - Exercise 4 | Final

class Exercise extends Component {
  state = {
    title: null,
    loading: false,
  };

  componentDidMount() {
    this.fetchTitle();
  }

  fetchTitle = () => {
    this.setState({ loading: true });

    fetch('https://httpbin.org/json')
      .then(response => response.json())
      .then(data =>
        this.setState({ title: data.slideshow.title, loading: false })
      );
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { title, loading } = this.state;
    return (
      <div>
        {loading ? <div>Loading...</div> : <div>{title}</div>}

        <button type="button" onClick={this.fetchTitle}>
          Re-fetch
        </button>
      </div>
    );
  }
}

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
