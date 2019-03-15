import React from 'react';

function withAuthRedirect(Comp) {
  const displayName = Comp.displayName || Comp.name || 'Component';

  return class WrapperComp extends React.Component {
    static displayName = `withAuthRedirect(${displayName})`;

    state = {
      authChecked: false,
    };

    componentDidMount() {
      const isAuthenticated = localStorage.getItem('app@is-authenticated');

      if (!isAuthenticated) {
        window.history.pushState({}, {}, '/login');
      }

      this.setState({ authChecked: true });
    }

    render() {
      const { authChecked } = this.state;

      if (!authChecked) {
        return <div>Checking auth...</div>;
      }

      return <Comp {...this.props} />;
    }
  };
}

export default withAuthRedirect;
