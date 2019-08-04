// @flow
import { hot } from 'react-hot-loader/root';
import React from 'react';

import Panes from './Panes';

const App = () => (
  <div className="page">
    <div className="page__container">
      <Panes />
    </div>
  </div>
);

export default hot(App);
