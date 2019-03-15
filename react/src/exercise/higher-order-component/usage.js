import React from 'react';
import withDocumentTitle from './index';

const Hello = () => <div>Hello World</div>;

// TODO: provide title string to HOC somehow
const Comp = withDocumentTitle(Hello);

class Usage extends React.Component {
  state = {
    show: false,
  };

  render() {
    const { show } = this.state;

    return (
      <div>
        <button onClick={() => this.setState(prev => ({ show: !prev.show }))}>
          {show ? 'Unmount' : 'Mount'}
        </button>

        {show && <Comp />}
      </div>
    );
  }
}

export default Usage;
