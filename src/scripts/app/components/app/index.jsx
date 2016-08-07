import React from 'react';
import { connect } from 'react-redux';

import css from './app.scss';

const App = (props) => {
  return (
    <div className={css.app}>
      <h1>Redux boilerplate with webpack</h1>
      {props.children}
    </div>
  );
};

const mapStateToProps = (/* state */) => {
  return {};
};

export default connect(mapStateToProps)(App);
