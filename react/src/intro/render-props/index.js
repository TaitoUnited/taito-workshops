import React from 'react';

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = event => {
    var rect = event.target.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    this.setState({ x, y });
  };

  render() {
    const { x, y } = this.state;
    const { children } = this.props;
    return (
      <div
        onMouseMove={this.handleMouseMove}
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
      >
        {children({ x, y })}
      </div>
    );
  }
}

export default Mouse;
