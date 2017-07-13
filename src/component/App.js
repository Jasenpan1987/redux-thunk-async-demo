import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

export default App;
