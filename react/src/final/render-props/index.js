import React from 'react';

const sleep = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

class Fetch extends React.Component {
  static defaultProps = {
    opts: {},
  };

  state = {
    loading: true,
    error: null,
    data: null,
  };

  async componentDidMount() {
    const { url, opts } = this.props;

    if (!url) {
      throw Error('Fetch component needs an URL!');
    }

    try {
      await sleep(2000);
      const res = await fetch(url, opts);

      if (res.status !== 200) {
        throw Error('No data!');
      }

      const data = await res.json();
      this.handleResponse(data);
    } catch (e) {
      this.handleError(e.message);
    }
  }

  handleResponse = data => {
    this.setState({ loading: false, data });
  };

  handleError = error => {
    this.setState({ loading: false, error: error });
  };

  render() {
    const { loading, error, data } = this.state;
    const { children } = this.props;

    return children({
      loading,
      error,
      data,
    });
  }
}

export default Fetch;
