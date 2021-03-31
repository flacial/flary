/* eslint-disable react/prop-types */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div style={{ color: 'red', fontWeight: 'bold' }}>
          ERROR: Something went wrong. Please sumbit an issue here
          {' '}
          <a href="https://github.com/flacial/flary/issues/new/choose">Link</a>
          {' '}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
