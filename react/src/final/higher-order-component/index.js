import React from 'react';

const withDocumentTitle = title => Comp => {
  const displayName = Comp.displayName || Comp.name || 'Component';

  return class Wrapper extends React.Component {
    static displayName = `withDocumentTitle(${displayName})`;

    state = {
      origTitle: `${document.title}`,
    };

    componentDidMount() {
      document.title = title;
    }

    componentWillUnmount() {
      document.title = this.state.origTitle;
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
};

export default withDocumentTitle;
