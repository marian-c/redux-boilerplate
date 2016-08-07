import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { browserHistory } from 'react-router';

class NotFound extends React.Component {
  goHome() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <h1>404</h1>
        <p>
          Sorry, we can't find the page you are looking for.<br />
          Let's go back to our the homepage
        </p>
        <button onClick={this.goHome}>Go Home</button>
      </div>
    );
  }
}

export default connect(
  null,
  routeActions //
)(NotFound);
